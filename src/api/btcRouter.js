'use strict';
const express = require('express')
const axios = require('axios')

const router = express.Router()

const {axios: axiosCoreInstance} = require('../index')

const {BTC} = require('../constants')
const commonService = require('../service/commonService')
const btcService = require('../service/btcService')

router.post('/wallet', (req, res) => {
  const {chain} = req.body

  const mnemonic = commonService.generateMnemonic()
  const wallet = btcService.generateWallet(chain, mnemonic)
  res.json({mnemonic, ...wallet})
})

router.get('/wallet/xpub/:chain/:xpub/:i', ({params}, res) => {
  const {i, xpub, chain} = params
  const index = parseInt(i)

  const address = btcService.calculateAddress(xpub, chain, index)
  res.send({address})
})

router.post('/wallet/xpriv', ({body}, res) => {
  const {index, mnemonic, chain} = body
  const i = parseInt(index)

  const privateKeyWIF = btcService.calculatePrivateKey(chain, mnemonic, i)
  res.json(privateKeyWIF)
})

router.post('/withdrawal', async ({headers, body}, res) => {
  const {mnemonic, ...withdrawal} = body

  if (!withdrawal.fee) {
    withdrawal.fee = 0.0005
  }
  let resp
  try {
    resp = await axiosCoreInstance({
      method: 'POST',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        'accept': headers['accept'] || 'application/json',
        'x-client-secret': headers['x-client-secret']
      },
      url: `api/v1/withdrawal`,
      data: withdrawal
    })
  } catch ({response}) {
    console.error(response.data)
    res.status(response.status).send(response.data)
    return
  }
  const {id, vin, vinIndex, addresses, amounts} = resp.data
  const {currency, amount, fee, targetAddress} = withdrawal

  const rawtx = btcService.prepareTransaction(vin, vinIndex, addresses, amounts, targetAddress, currency, amount, fee, mnemonic)
  console.log('tx raw hex:', rawtx)

  try {
    const url = `${currency === BTC ? 'https://' : 'https://testnet.'}blockexplorer.com/api/tx/send`
    const {data} = await axios.post(url, {rawtx})

    const txId = data.txid
    axiosCoreInstance({
      method: 'PUT',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        'accept': headers['accept'] || 'application/json',
        'x-client-secret': headers['x-client-secret']
      },
      url: `api/v1/withdrawal/${id}/${txId}`,
      data: withdrawal
    }).then(() => res.json({txId}))
      .catch(({response}) => {
        console.error(response.data)
        res.status(response.status).json({
          ...response.data,
          txId,
          id,
          error: 'Withdrawal submitted to blockchain but not completed, wait until it is completed automatically in next block or complete it manually.',
          code: 'withdrawal.not.completed'
        })
      })
  } catch (e) {
    console.error(e)
    axiosCoreInstance({
      method: 'DELETE',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        'accept': headers['accept'] || 'application/json',
        'x-client-secret': headers['x-client-secret']
      },
      url: `api/v1/withdrawal/${id}`
    }).then(() => res.status(500).json({
      error: 'Unable to broadcast transaction, withdrawal cancelled.',
      code: 'withdrawal.hex.cancelled'
    }))
      .catch(({response}) => res.status(response.status).json({
        ...response.data,
        error: 'Unable to broadcast transaction, and impossible to cancel withdrawal. ID is attached, cancel it manually.',
        code: 'withdrawal.hex.not.cancelled',
        id
      }))
  }
})

module.exports = router
