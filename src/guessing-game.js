class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.start = min;
    this.end = max;
  }

  guess() {
    this.guessNum = Math.round((this.start + this.end) / 2);
    return this.guessNum;
  }

  lower() {
    this.end = this.guessNum;
  }

  greater() {
    this.start = this.guessNum;
  }
}

module.exports = GuessingGame;
