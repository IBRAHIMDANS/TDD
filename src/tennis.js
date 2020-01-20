export class TennisGame {

    constructor(playerOne, playerTwo) {
        this.playerOne = {name: playerOne, score: 0};
        this.playerTwo = {name: playerTwo, score: 0};
    }

    displayScore() {
        if (this.playerTwo.score === 0 && this.playerOne.score === 0) {
            return `${this.selectScore(0)}-${this.selectScore(0)}`
        } else if (this.playerOne.score === 4 && this.playerTwo.score === 3) {
            return `Avantage: ${this.playerOne.name}`
        }else if (this.playerOne.score === 3 && this.playerTwo.score === 4) {
            return `Avantage: ${this.playerTwo.name}`
        } else if (this.playerTwo.score === this.playerTwo.score) {
            return 'deuce'
        }
    }

    scorePlayerOne() {
       this.playerTwo.score++
    }

    scorePlayerTwo() {
        this.playerTwo.score++
    }

    selectScore(score) {
        if (typeof score !== "number") throw 'score is number';
        if (score === 0) {
            return '0'
        } else if (score === 1) {
            return '15'
        } else if (score === 2) {
            return '30'
        } else if (score === 3) {
            return '40'
        }
    }
}

