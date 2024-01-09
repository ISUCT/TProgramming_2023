import { Game } from "../src/game";

describe('Knight Battle', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game(1, [
            ['Knight', 1, 1, 'cnight1'],
            ['Knight', 1, 1, 'player_name']
        ]);
    });

    it('Characters creation', () => {
        const logMock = jest.spyOn(console, 'log');
        game.play();
        const correctLog = logMock.mock.calls[0][0] == '(Рыцарь) cnight1 [Здоровье: 1, Сила: 1] <<VS>> (Рыцарь) player_name [Здоровье: 1, Сила: 1]';
        expect(correctLog).toBe(true);
    });
    it('The process of battle', () => {
        const logMock = jest.spyOn(console, 'log');
        game.play();
        const correctLog = (logMock.mock.calls[1][0] == 'Первым ходит ИГРОК 1' || logMock.mock.calls[1][0] == 'Первым ходит ИГРОК 2') &&
            (logMock.mock.calls[2][0] == '(Рыцарь) cnight1 наносит урон 1 противнику (Рыцарь) player_name' ||
                logMock.mock.calls[2][0] == '(Рыцарь) player_name наносит урон 1 противнику (Рыцарь) cnight1' ||
                logMock.mock.calls[2][0] == '(Рыцарь) cnight1 использует (Удар возмездия) и наносит урон 1 противнику (Рыцарь) player_name' ||
                logMock.mock.calls[2][0] == '(Рыцарь) player_name использует (Удар возмездия) и наносит урон 1 противнику (Рыцарь) cnight1');
        expect(correctLog).toBe(true);
    });
    it('Checking who lost the game', () => {
        const logMock = jest.spyOn(console, 'log');
        game.play();
        const correctLog = logMock.mock.calls[3][0] == '(Рыцарь) cnight1 погибает' && (logMock.mock.calls[2][0].indexOf('(Рыцарь) player_name наносит') != -1 || logMock.mock.calls[2][0].indexOf('(Рыцарь) player_name использует') != -1) ||
            logMock.mock.calls[3][0] == '(Рыцарь) player_name погибает' && (logMock.mock.calls[2][0].indexOf('(Рыцарь) cnight1 наносит') != -1 || logMock.mock.calls[2][0].indexOf('(Рыцарь) cnight1 использует') != -1);
        expect(correctLog).toBe(true);
    });
});
