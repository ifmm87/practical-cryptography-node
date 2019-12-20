const crypto = require('crypto');

const hmac = crypto.createHmac('sha256', 'my secret');
hmac.update('some data to hash');
console.log('============================================');
console.log(hmac.digest('hex'));
