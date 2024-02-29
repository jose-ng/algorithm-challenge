/*
Title: Find Winner on a Tic Tac Toe Game
Description: Tic-tac-toe is played by two players A and B on a 3 x 3 grid.
In this Tic-Tac-Toe challenge, you are given a 3 x 3 grid representing the game grid. Two players, A and B, take turns placing their respective characters ('X' and 'O') into empty squares of the grid.
The game continues until there are three of the same characters in a row, column, or diagonal, resulting in a win for the player with the matching characters.
If all squares are filled without any player achieving a winning combination, the game ends in a draw.
Additionally, if there are still empty squares on the grid and no winner has been determined, the game is considered to be ongoing (pending).
You can assume that 'moves' array is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.
Constraints:
 1 <= moves.length <= 9
 moves[i].length == 2
 0 <= row[i], col[i] <= 2
 There are no repeated elements on 'moves'.
 'moves' follow the rules of tic tac toe.
Your task is to implement a function/method that takes the 3 x 3 array as input and returns the winner of the game (A or B) if there is one, or "Draw" if the game ends in a draw, or "Pending" if the game is still ongoing.
Your implementation should also include the necessary unit test cases to verify the correctness of your solution.
*/

function findWiner(match) {
  const result = ["A", "B", "Draw", "Repeated Moves", "Error"];
  let moves = 0;
  let grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const checkIfWin = (p) => {
    console.log(grid[0][0] + "," + grid[0][1] + "," + grid[0][2]);
    console.log(grid[1][0] + "," + grid[1][1] + "," + grid[1][2]);
    console.log(grid[2][0] + "," + grid[2][1] + "," + grid[2][2]);

    for (let i = 0; i < 3; i++) {
      if (
        (grid[i][0] == p && grid[i][1] == p && grid[i][2] == p) ||
        (grid[0][i] == p && grid[1][i] == p && grid[2][i] == p)
      ) {
        return true;
      }
    }

    if (
      (grid[0][0] == p && grid[1][1] == p && grid[2][2] == p) ||
      (grid[2][0] == p && grid[1][1] == p && grid[0][2] == p)
    ) {
      return true;
    }
    return false;
  };

  for (const m of match) {
    if (moves > 8) return result[4];
    else if (grid[m[0]][m[1]]) return result[3];
    grid[m[0]][m[1]] = moves % 2 === 0 ? "X" : "O";
    moves += 1;
    if (moves > 3) {
      if (checkIfWin("X")) return result[0];
      else if (checkIfWin("O")) return result[1];
    }
    if (moves === 9) return result[2];
  }
}

console.log(
  findWiner([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
);

console.log(
  findWiner([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ])
);

console.log(
  findWiner([
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ])
);

module.exports = findWiner;
