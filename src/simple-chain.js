const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('( )');
    } 
    else {
      this.chain.push(`( ${value} )`);
    } 
    return this; 
  },
  removeLink(position) {
    if ((position > 0) && (position <= this.chain.length) && (position % 1 === 0)) {
      this.chain = this.chain.slice(0, position-1).concat(this.chain.slice(position));
      return this;
    } 
    else {
      this.chain = [];
      throw new Error('THROWN');
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
   let result = (this.chain.join('~~'));
   this.chain = [];
   return result;
  }
};

module.exports = chainMaker;
