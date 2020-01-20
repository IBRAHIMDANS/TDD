import { TennisGame} from "../src/tennis";


describe('Tenis Game', () => {
    const game = new TennisGame('ibra','hima');

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
    test('display score for deuce', () => {
        expect(game.displayScore()).toBe('deuce')
    });

});
