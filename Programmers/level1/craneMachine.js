const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );
const solution = (board, moves) => {
  const stack = [];
  let answer = 0;
  console.log(...transpose(board));

  moves.forEach((target) => {
    for (let i = 0, len = board.length; i < len; i++) {
      if (board[i][target - 1] === 0) {   
        continue;
      }
      const cur = board[i][target - 1];
      board[i][target - 1] = 0;
      if (stack[stack.length - 1] === cur) {
        answer += 2;
        stack.pop();
        break;
      }
      stack.push(cur);
      break;
    }
  });
  return answer;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4, 5, 5, 5, 5]
  )
);
