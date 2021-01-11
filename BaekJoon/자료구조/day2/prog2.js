// const mirro = [
//   [0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 1, 0],
//   [0, 0, 0, 0, 1, 0, 0, 1],
//   [0, 1, 1, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 0, 1, 0, 0],
//   [0, 0, 1, 1, 1, 0, 0, 0],
// ];

// const mirro = [
//   [0, 0, 1],
//   [0, 0, 0],
//   [0, 1, 0],
// ];

// const mirro = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 1],
//   [0, 0, 0, 0],
//   [0, 1, 0, 0],
// ];

const mirro = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
];

const PATH = 0;
const WALL = 1;
const PASSED = 2;

const X = 0;
const Y = 1;

const INIT_POSITION = -1;

const N = mirro.length;
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const findCurve = (x, y, pos) => {
  let nx = x + dir[pos][X];
  let ny = y + dir[pos][Y];

  while (nx >= 0 && ny >= 0 && nx < N && ny < N && mirro[nx][ny] !== WALL) {
    nx += dir[pos][X];
    ny += dir[pos][Y];
  }
  nx -= dir[pos][X];
  ny -= dir[pos][Y];
  return [nx, ny];
};

const solution = (x, y, pos) => {
  if (x < 0 || y < 0 || x >= N || y >= N || mirro[x][y] !== PATH) {
    return false;
  }
  if (x === N - 1 && y === N - 1) {
    return true;
  }
  mirro[x][y] = PASSED;

  for (let i = 0; i < dir.length; i++) {
    if (pos === INIT_POSITION || (i !== pos && i !== (pos + 2) % dir.length)) {
      const [nx, ny] = findCurve(x, y, i);
      if (solution(nx, ny, i)) {
        return true;
      }
    }
  }
  mirro[x][y] = PATH;

  return false;
};

console.log(solution(0, 0, INIT_POSITION));

