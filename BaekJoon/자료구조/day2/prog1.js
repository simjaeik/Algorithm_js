// const mirro = [
//   [0, 0, 0, 0, 1, 0, 0, 0],
//   [0, 1, 1, 0, 0, 0, 1, 0],
//   [0, 1, 0, 1, 1, 0, 0, 1],
//   [0, 0, 0, 0, 1, 1, 1, 0],
//   [0, 1, 1, 0, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0, 1, 0],
//   [0, 0, 0, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0, 1, 0],
// ];

// const mirro = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ];

// const mirro = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0],
// ];

const mirro = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

const PATH = 0;
const WALL = 1;
const PASSED = 2;

const N = mirro.length;
const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
const target = 10;

const solution = (x, y, K) => {
  if (x === N - 1 && y === N - 1) {
    return 1;
  }

  mirro[x][y] = PASSED;
  let sum = 0;
  for (let i = 0; i < dir.length; i++) {
    const nx = x + dir[i][0];
    const ny = y + dir[i][1];
    if (
      nx < 0 ||
      ny < 0 ||
      nx >= N ||
      ny >= N ||
      mirro[nx][ny] !== PATH ||
      K > target - 1
    )
      continue;
    sum += solution(nx, ny, K + 1);
  }
  mirro[x][y] = PATH;
  return sum;
};

console.log(solution(0, 0, 0));
