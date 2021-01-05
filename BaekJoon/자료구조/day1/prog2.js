const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  let [N, list, target] = input;
  list = list.split(" ").map((v) => v - 0);
  N = Number(N);
  target = Number(target);

  const getFloor = (start, end) => {
    if (list[0] > target) {
      return -1;
    }
    if (start > end) {
      return list[end];
    }

    const middle = parseInt((start + end) / 2);

    if (list[middle] === target) {
      return list[middle];
    }
    if (list[middle] < target) {
      return getFloor(middle + 1, end);
    }
    if (list[middle] > target) {
      return getFloor(start, middle - 1);
    }
  };

  const getCeiling = (start, end) => {
    if (list[list.length - 1] < target) {
      return -1;
    }
    if (start > end) {
      return list[start];
    }

    const middle = parseInt((start + end) / 2);

    if (list[middle] === target) {
      return list[middle];
    }
    if (list[middle] < target) {
      return getCeiling(middle + 1, end);
    }
    if (list[middle] > target) {
      return getCeiling(start, middle - 1);
    }
  };

  console.log(getFloor(0, N - 1));
  console.log(getCeiling(0, N - 1));
});
