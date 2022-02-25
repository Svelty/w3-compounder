const crypto = require('crypto');
require('dotenv').config();

const algo = 'aes-256-ctr';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algo, process.env.ENCRYPT_KEY, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

const decrypt = (hash) => {
  const [iv, content] = hash.split(':');
  const decipher = crypto.createDecipheriv(algo, process.env.ENCRYPT_KEY, Buffer.from(iv, 'hex'));

  return Buffer.concat([decipher.update(Buffer.from(content, 'hex')), decipher.final()]).toString();
}

module.exports = {
  encrypt,
  decrypt
}