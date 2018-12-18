//Link to the challenge: https://app.codesignal.com/challenge/we9iKLGLCQMdzEvW3

const TEFI = board => {
  const [T, E, F, I] = [0, 1, 2, 3];
  const result = [0, 0, 0, 0];

  board = board.map(r => r.split(''));

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === '*') {
        //check the possibility of being an I, if the very next field is a '.'
        //or the edge of the board
        if (
          c === board[r].length - 1 ||
          (c + 1 < board[r].length && board[r][c + 1] === '.')
        ) {
          //Found an I, let's clear out the *'s
          result[I]++;

          let temp = r;

          while (temp < board.length && board[temp][c] === '*') {
            board[temp][c] = '.';
            temp++;
          }

          //check the possibility of being a T if there is not a * immediately below this one
        } else if (r + 1 < board.length && board[r + 1][c] === '.') {
          //Found a T, let's clear out the *'s
          result[T]++;

          let mid = -1;
          let temp = c;

          //Clear out the top of the T, also find the midpoint
          while (temp < board[r].length && board[r][temp] === '*') {
            board[r][temp] = '.';
            temp++;

            if (mid === -1 && board[r + 1][temp] === '*') {
              mid = temp;
            }
          }

          temp = r + 1;

          while (temp < board.length && board[temp][mid] === '*') {
            board[temp][mid] = '.';
            temp++;
          }
        } else {
          //Found an E or an F
          //need to count how many offshoots to determine which it is
          let offshoots = 0;
          let temp = c;

          //clear out the top
          while (temp < board[r].length && board[r][temp] === '*') {
            board[r][temp] = '.';
            temp++;
          }

          //go down and out
          temp = r + 1;

          while (temp < board.length && board[temp][c] === '*') {
            board[temp][c] = '.';

            if (c + 1 < board[temp].length && board[temp][c + 1] === '*') {
              offshoots++;

              let tempC = c + 1;

              while (tempC < board[temp].length && board[temp][tempC] === '*') {
                board[temp][tempC] = '.';
                tempC++;
              }
            }

            temp++;
          }

          if (offshoots === 1) result[F]++;
          else result[E]++;
        }
      }
    }
  }

  return result;
};
