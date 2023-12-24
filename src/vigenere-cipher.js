const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  transform(message, key, encrypt) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];

      if (this.alphabet.includes(messageChar)) {
        const messageIndex = this.alphabet.indexOf(messageChar);
        const keyChar = key[keyIndex % key.length];
        const keyShift = encrypt ? this.alphabet.indexOf(keyChar) : -this.alphabet.indexOf(keyChar);
        const transformedIndex = (messageIndex + keyShift + this.alphabet.length) % this.alphabet.length;
        const transformedChar = this.alphabet[transformedIndex];
        result += transformedChar;
        keyIndex++;
      } else {
        result += messageChar;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this.transform(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.transform(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
