const crypto = require('crypto');

const sally = crypto.createDiffieHellman(2048);
const sallyKeys = sally.generateKeys();

const bob = crypto.createDiffieHellman(sally.getPrime(), sally.getGenerator());
const bobKey = bob.generateKeys();

const sallySecret = sally.computeSecret(bobKey);
const bobSecret = bob.computeSecret(sallyKeys);

console.log('============================================');
console.log(sallySecret.toString('hex'));

console.log('============================================');
console.log(bobSecret.toString('hex'));

