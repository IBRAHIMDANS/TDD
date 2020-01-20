export class TennisGame {

    constructor(playerOneName, playerTwoName) {
        this.playerOne = {name: playerOneName, score: 0};
        this.playerTwo = {name: playerTwoName, score: 0};
    }

    displayScore() {
        if (this.playerOne.score === 4 && this.playerTwo.score === 3) {
            return `Avantage=> ${this.playerOne.name}.`
        } else if (this.playerOne.score === 3 && this.playerTwo.score === 4) {
            return `Avantage=> ${this.playerTwo.name}.`
        } else if (this.playerOne.score >= 5) {
            return `Nous avons un gagnant: ${this.playerOne.name}.`
        }else if (this.playerTwo.score >= 5) {
            return `Nous avons un gagnant: ${this.playerTwo.name}.`
        }else if(this.playerOne.score === 4 && this.playerTwo.score === 4) {
            this.playerOne.score--;
            this.playerTwo.score--;
            return 'deuce'
        } else if (this.playerTwo.score === 3 && this.playerOne.score === 3) {
            return 'deuce'
        }
         return `${this.selectScore(this.playerOne.score)}-${this.selectScore(this.playerTwo.score)}`
    }

    scorePlayerOne() {
       this.playerOne.score = this.playerOne.score+1
    }

    scorePlayerTwo() {
        this.playerTwo.score = this.playerTwo.score+1
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

