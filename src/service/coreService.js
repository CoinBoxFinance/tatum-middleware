const {axios} = require('../index');

const storeWithdrawal = async (data, res, headers) => {
  try {
    return await axios({
      method: 'POST',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `offchain/v2/withdrawal`,
      data,
    });
  } catch (e) {
    console.error(e.response.data);
    res.status(e.response.status).send(e.response.data);
    throw e;
  }
};

const getUTXOBtc = async (hash, index, headers) => {
  const response = await axios({
    method: 'GET',
    headers: {
      'content-type': headers['content-type'] || 'application/json',
      accept: 'application/json',
      authorization: headers.authorization,
      'x-api-key': headers['x-api-key'],
    },
    url: `bitcoin/v2/utxo/${hash}/${index}`,
  });
  return response.data;
};

const getUTXOLtc = async (hash, index, headers) => {
  const response = await axios({
    method: 'GET',
    headers: {
      'content-type': headers['content-type'] || 'application/json',
      accept: 'application/json',
      authorization: headers.authorization,
      'x-api-key': headers['x-api-key'],
    },
    url: `litecoin/v2/utxo/${hash}/${index}`,
  });
  return response.data;
};

const getTxByAddressBtc = async (address, headers) => {
  try {
    const response = await axios({
      method: 'GET',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `bitcoin/v2/transaction/address/${address}/true`,
    });
    return response.data;
  } catch (e) {
    return [];
  }
};

const getTxByAddressLtc = async (address, headers) => {
  try {
    const response = await axios({
      method: 'GET',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `litecoin/v2/transaction/address/${address}/true`,
    });
    return response.data;
  } catch (e) {
    return [];
  }
};

const getBnbAccount = async (address, res, headers) => {
  try {
    const response = await axios({
      method: 'GET',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `bnb/v2/account/${address}`,
    });
    return response.data;
  } catch (e) {
    console.error(e.response);
    res.status(e.response.status).send(e.response.data);
    throw e;
  }
};

const broadcastBtc = async (data, res, headers) => {
  try {
    const response = await axios({
      method: 'POST',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `bitcoin/v2/broadcast`,
      data,
    });
    res.status(200).json(response.data);
  } catch (e) {
    console.error(e.response);
    res.status(e.response.status).send(e.response.data);
    throw e;
  }
};

const broadcastLtc = async (data, res, headers) => {
  try {
    const response = await axios({
      method: 'POST',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `litecoin/v2/broadcast`,
      data,
    });
    res.status(200).json(response.data);
  } catch (e) {
    console.error(e.response);
    res.status(e.response.status).send(e.response.data);
    throw e;
  }
};

const broadcastEth = async (data, res, headers) => {
  try {
    const response = await axios({
      method: 'POST',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `ethereum/v2/broadcast`,
      data,
    });
    res.status(200).json(response.data);
  } catch (e) {
    console.error(e.response);
    res.status(e.response.status).send(e.response.data);
    throw e;
  }
};

const broadcastBnb = async (data, res, headers) => {
  try {
    const response = await axios({
      method: 'POST',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `bnb/v2/broadcast`,
      data,
    });
    res.status(200).json(response.data);
  } catch (e) {
    console.error(e.response);
    res.status(e.response.status).send(e.response.data);
    throw e;
  }
};

const broadcastXrp = async (data, res, headers) => {
  try {
    const response = await axios({
      method: 'POST',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `xrp/v2/broadcast`,
      data,
    });
    res.status(200).json(response.data);
  } catch (e) {
    console.error(e.response);
    res.status(e.response.status).send(e.response.data);
    throw e;
  }
};

const broadcast = async (data, id, res, headers) => {
  try {
    const response = await axios({
      method: 'POST',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `offchain/v2/withdrawal/broadcast`,
      data,
    });
    if (response.data.completed) {
      res.json({txId: response.data.txId, id});
      return;
    }
    res.status(200).json({
      txId: response.data.txId,
      id,
      error: 'Withdrawal submitted to blockchain but not completed, wait until it is completed automatically in next block or complete it manually.',
      code: 'withdrawal.not.completed',
    });
  } catch (e) {
    console.error(e.response);
    throw e;
  }
};

const storeErc20Address = async (symbol, address, responseData, res, headers) => {
  try {
    await axios({
      method: 'POST',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `offchain/v2/ethereum/erc20/${symbol}/${address}`,
    });
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(error.response.status).json({
      ...responseData,
      error: 'Unable to set contract address for ERC20 symbol to Tatum, manual update is necessary.',
      code: 'erc20.not.completed',
    });
    throw error;
  }
};

const deployErc20 = async (data, res, headers) => {
  try {
    return await axios({
      method: 'POST',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `offchain/v2/ethereum/erc20/`,
      data,
    });
  } catch (e) {
    console.error(e);
    res.status(e.response.status).json(e.response.data);
    throw e;
  }
};

const cancelWithdrawal = async (id, res, headers) => {
  try {
    await axios({
      method: 'DELETE',
      headers: {
        'content-type': headers['content-type'] || 'application/json',
        accept: 'application/json',
        authorization: headers.authorization,
        'x-api-key': headers['x-api-key'],
      },
      url: `offchain/v2/withdrawal/${id}`,
    });
    res.status(500).json({
      error: 'Unable to broadcast transaction, withdrawal cancelled.',
      code: 'withdrawal.hex.cancelled',
    });
  } catch (err) {
    res.status(err.response.status).json({
      data: err.response.data,
      error: 'Unable to broadcast transaction, and impossible to cancel withdrawal. ID is attached, cancel it manually.',
      code: 'withdrawal.hex.not.cancelled',
      id,
    });
    throw err;
  }
};

module.exports = {
  storeWithdrawal,
  broadcast,
  broadcastBtc,
  broadcastLtc,
  broadcastEth,
  broadcastXrp,
  broadcastBnb,
  getBnbAccount,
  cancelWithdrawal,
  deployErc20,
  getUTXOLtc,
  getUTXOBtc,
  getTxByAddressBtc,
  getTxByAddressLtc,
  storeErc20Address,
};
