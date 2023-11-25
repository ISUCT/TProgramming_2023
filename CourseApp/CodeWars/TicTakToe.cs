namespace CodWearsTests;

public class TicTacToe
{
    public int IsSolved(int[,] board)
    {
        for (int i = 0; i < 2; i++)
        {
            if (board[i, 0] == board[i, 1] && (board[i, 1] == board[i, 2]) && board[i, 1] != 0)
            {
                return board[i, 0];
            }
            else if (board[0, i] == board[1, i] && board[1, i] == board[2, i] && board[1, i] != 0)
            {
                return board[i, 0];
            }
            else if ((board[0, 0] == board[1, 1] && board[1, 1] == board[2, 2] && board[1, 1] != 0) ||
                     (board[2, 0] == board[1, 1] && board[1, 1] == board[0, 2] && board[1, 1] != 0))
            {
                return board[1, 1];
            }
            else
            {
                for (int k = 0; k < 2; k++)
                {
                    if (board[i, k] == 0)
                    {
                        return -1;
                    }
                }
            }
        }

        return 0;
    }
}