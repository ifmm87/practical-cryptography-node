const crypto = require('crypto');
hash = crypto.createHash('sha256');
hash.update('ivanmujica');
console.log('=====================without salt=======================');
console.log(hash.digest('hex'));



const password = 'ivanmujica';
const salt = crypto.randomBytes(256).toString('hex');
console.log('===== the salt=======================================');
console.log(salt);
const hashedPwd = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512');
console.log('=========hashed pass===================================');
console.log(hashedPwd.toString('hex'));
