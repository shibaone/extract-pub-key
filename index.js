const Wallet = require('ethereumjs-wallet');
const EthUtil = require('ethereumjs-util');

const privateKeyString = '';//your privateKey with 0x
const privateKeyBuffer = EthUtil.toBuffer(privateKeyString);
const wallet = Wallet['default'].fromPrivateKey(privateKeyBuffer);
const publicKey = wallet.getPublicKeyString();
console.log(publicKey);