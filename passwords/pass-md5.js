const crypto = require('crypto');
const hash = crypto.createHash('md5');
hash.update('ivanmujica');
const hashPass = hash.digest('hex');
console.log('============================================');
console.log(hashPass);
