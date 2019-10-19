const crypto = require('crypto');
// hash = crypto.createHash('sha256');
// hash.update('ivanmujica');
// console.log('=====================without salt=======================');
// console.log(hash.digest('hex'));

const algorithm = 'aes-256-cbc';
const password = 'Good strong password for key';
const salt = crypto.randomBytes(256).toString('hex');
const key = crypto.scryptSync(password, salt, 32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, key, iv)


const telefono = '74088911';
let encrypted = cipher.update(telefono, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('=========encrypted===================================');
console.log(telefono, encrypted);


const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted = decipher.final('utf8');

console.log('===========decrypted=================================');
console.log(decrypted);

