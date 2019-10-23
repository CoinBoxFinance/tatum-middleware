const TBTC = 'TBTC';
const ROPSTEN = 'ropsten';
const BTC = 'BTC';
const BNB = 'BNB';
const TBNB = 'TBNB';
const ETH = 'mainnet';
const XRP = 'XRP';
const TXRP = 'TXRP';
const ETH_DERIVATION_PATH = 'm/44\'/60\'/0\'/0';
const BTC_DERIVATION_PATH = 'm/44\'/0\'/0\'/0';
const BNB_DERIVATION_PATH = 'm/44\'/714\'/0\'/0';
const TESTNET_DERIVATION_PATH = 'm/44\'/1\'/0\'/0';

const INFURA_KEY = process.env.INFURA_KEY || '0d81f0f1a8274699be73135db15af8a3';

const CONTRACT_ADDRESSES = {
  USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  LEO: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
  LINK: '0x514910771af9ca656af840dff83e8264ecf986ca',
  FREE: '0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  BAT: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
  TUSD: '0x0000000000085d4780B73119b644AE5ecd22b376',
  PAX: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
  PLTC: '0x0c6e8a8358cbde54f8e4cd7f07d5ac38aec8c5a4',
};

const CONTRACT_DECIMALS = {
  USDT: 6,
  LEO: 18,
  LINK: 18,
  FREE: 18,
  MKR: 18,
  USDC: 6,
  BAT: 18,
  TUSD: 18,
  PAX: 18,
  PLTC: 18,
};

module.exports = {
  TBTC,
  ROPSTEN,
  BTC,
  ETH,
  BNB,
  TBNB,
  ETH_DERIVATION_PATH,
  BNB_DERIVATION_PATH,
  BTC_DERIVATION_PATH,
  TESTNET_DERIVATION_PATH,
  INFURA_KEY,
  XRP,
  TXRP,
  CONTRACT_ADDRESSES,
  CONTRACT_DECIMALS,
};
