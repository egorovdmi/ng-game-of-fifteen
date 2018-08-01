import { isWinningGame } from './game.service';
import { Board } from './board.model';

describe('GameService', () => {
    it('isWinningGame_WinningBoardState_True', () => {
        //arrange
        const board = new Board([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null]);

        //act
        const result = isWinningGame(board);

        //assert
        expect(result).toBe(true);
    });
});
