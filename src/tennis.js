export class TennisGame {

    constructor(playerOne, playerTwo) {
        this.playerOne = {name: playerOne, score: 0};
        this.playerTwo = {name: playerTwo, score: 0};
    }

    displayScore() {
        if (this.playerTwo.score === 0 && this.playerOne.score === 0) {
            return '0-0'
        } else if (this.playerTwo.score > this.playerOne.score || this.playerOne.score > this.playerTwo.score) {
            return `${this.playerOne.score}-${this.playerTwo.score}`
        } else if (this.playerTwo.score === this.playerTwo.score) {
            return 'deuce'
        }
    }

    scorePlayerOne() {
        if (this.playerOne.score === 0) {
            this.playerOne.score = 15
        } else if (this.playerOne.score === 15) {
            this.playerOne.score = 30
        } else if (this.playerOne.score === 30) {
            this.playerOne.score = 40
        }
    }
    scorePlayerTwo() {
        if (this.playerTwo.score === 0) {
            this.playerTwo.score = 15
        } else if (this.playerTwo.score === 15) {
            this.playerTwo.score = 30
        } else if (this.playerTwo.score === 30) {
            this.playerTwo.score = 40
        }
    }
}

