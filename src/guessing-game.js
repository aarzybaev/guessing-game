class GuessingGame {
    constructor () {
        this.middle = 0;
    }

       setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {

        this.middle = Math.round((this._max + this._min) / 2);
        return this.middle;       
    }

    greater() {
        this._min = this.middle++;
        this._max = this._max--;
        this.guess();
    }

    lower() {
        this._min = this._min++;
        this._max = this.middle--;    
        this.guess();        
    }
}

module.exports = GuessingGame;
