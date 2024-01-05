import { Game, LoggingGame } from "../src/game";
import { Knight } from "../src/knight";
import { Mage } from "../src/mage";
import { Archer } from "../src/archer";

// describe("Testing game constructor", () => {
//     it("Game should be created", () => {
//         const first = new Game(1, [["Knight", 1, 1, "cnight1"], ["Knight", 1, 1, "player_name"]]); new Game(1);
//         expect(first.play()).toEqual("(Рыцарь) cnight1 [Здоровье: 1, Сила: 1] <<VS>> (Рыцарь) player_name [Здоровье: 1, Сила: 1]");
//     });
// });

describe('Knight Battle', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game(1, [
            ['Knight', 1, 1, 'cnight1'],
            ['Knight', 1, 1, 'player_name']
        ]);
    });

    it('should simulate the first scenarios', () => {
        const logMock = jest.spyOn(console, 'log');
        game.play();
        const correctLog = logMock.mock.calls[0][0] == '(Рыцарь) cnight1 [Здоровье: 1, Сила: 1] <<VS>> (Рыцарь) player_name [Здоровье: 1, Сила: 1]' &&
            (logMock.mock.calls[1][0] == 'Первым ходит ИГРОК 1' || logMock.mock.calls[1][0] == 'Первым ходит ИГРОК 2') &&
            (logMock.mock.calls[2][0] == '(Рыцарь) cnight1 наносит урон 1 противнику (Рыцарь) player_name' ||
                logMock.mock.calls[2][0] == '(Рыцарь) player_name наносит урон 1 противнику (Рыцарь) cnight1' ||
                logMock.mock.calls[2][0] == '(Рыцарь) cnight1 использует (Удар возмездия) и наносит урон 1 противнику (Рыцарь) player_name' ||
                logMock.mock.calls[2][0] == '(Рыцарь) player_name использует (Удар возмездия) и наносит урон 1 противнику (Рыцарь) cnight1') &&
            (logMock.mock.calls[3][0] == '(Рыцарь) cnight1 погибает' || logMock.mock.calls[3][0] == '(Рыцарь) player_name погибает');
        expect(correctLog).toBe(true);
    });
});
