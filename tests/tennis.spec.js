import {TennisGame} from "../src/tennis";


describe('Tennis Game', () => {
    const playerOne = 'Ibra';
    const playerTwo = 'Hima';
    const game = new TennisGame(playerOne, playerTwo);

    test('it returns 0-0 because is start game ', () => {
        expect(game.displayScore()).toBe('0-0')
    });
    test('add 15 to score ', () => {
        expect(game.scorePlayerOne()).toBe()
    });
    test('display score after add 15 to score player One', () => {
        expect(game.displayScore()).toBe('15-0')
    });
    test('add  to score ', () => {
        expect(game.scorePlayerOne()).toBe()
    });
    test('add  to score ', () => {
        expect(game.scorePlayerOne()).toBe()
    });
    test('display score after add 30 to score player One', () => {
        expect(game.displayScore()).toBe('40-0')
    });
    test('add  to score playerTwo ', () => {
        expect(game.scorePlayerTwo()).toBe()
    });
    test('add  to score playerTwo', () => {
        expect(game.scorePlayerTwo()).toBe()
    });
    test('add  to score playerTwo', () => {
        expect(game.scorePlayerTwo()).toBe()
    });
    test('display score for deuce', () => {
        expect(game.displayScore()).toBe('deuce')
    });
    test('add  to score playerTwo', () => {
        expect(game.scorePlayerTwo()).toBe()
    });
    test('display score return avantage', () => {
        expect(game.displayScore()).toBe(`Avantage=> ${playerTwo}.`)
    });
    test('add  to score playerTwo', () => {
        expect(game.scorePlayerOne()).toBe()
    });
    test('display score for deuce', () => {
        expect(game.displayScore()).toBe('deuce')
    });
    test('add  to score playerTwo', () => {
        expect(game.scorePlayerTwo()).toBe()
    });
    test('add  to score playerTwo', () => {
        expect(game.scorePlayerTwo()).toBe()
    });
    test('display score for deuce', () => {
        expect(game.displayScore()).toBe(`Nous avons un gagnant: ${playerTwo}.`)
    });
});
