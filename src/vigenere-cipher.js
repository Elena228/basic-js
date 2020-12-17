const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type = true) {
    this.typeOfMachine = type;
  }

  encrypt(message, key) {
    if ((message === undefined) || (key === undefined)) {
    throw new Error('');
    }
    let result = [];
    let strArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let i = 0;
    let arg;
    strArr.forEach(element => {
      if (/[A-Z]/.test(element)) {
        arg = ((element.codePointAt(0)-65) + (keyArr[i].codePointAt(0)-65)) % 26;
        i = (i < key.length - 1)? (i + 1): 0;
        result.push(String.fromCodePoint(arg + 65));
      }
      else {
        result.push(element);
      }
    }); 
    return this.typeOfMachine? result.join(''): result.reverse().join('');
  }   
  
  
  decrypt(message, key) {
    if ((message === undefined) || (key === undefined)) {
      throw new Error('');
      } 
    let result = [];
    let strArr = message.split('');
    let keyArr = key.toUpperCase().split('');
    let i = 0;
    let arg;
    strArr.forEach(element => {
      if (/[A-Z]/.test(element)) {
        arg = ((element.codePointAt(0)-65) - (keyArr[i].codePointAt(0)-65) + 26) % 26;
        i = (i < key.length - 1)? (i + 1): 0;
        result.push(String.fromCodePoint(arg + 65));
      }
      else {
        result.push(element);
      }
    }); 
    return this.typeOfMachine? result.join(''): result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
