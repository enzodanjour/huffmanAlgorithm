class CountingFrequence {
    constructor(word) {
        this.word = word;
    }

    getFrequence() {
        var count = {};
        this.word.split('').forEach(function (s) {
            count[s] ? count[s]++ : count[s] = 1;
        });
        return count;
    }

    
}

module.exports = CountingFrequence