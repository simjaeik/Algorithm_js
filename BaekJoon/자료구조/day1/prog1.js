const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  let [N, list, K] = input;

  list = list
    .split(" ")
    .map((v) => v - 0)
    .sort((a, b) => a - b);

  K = Number(K);

  const recursion = (start, end) => {
    if (start >= end) {
      return 0;
    }
    const sum = list[start] + list[end];
    if (sum > K) {
      return recursion(start, end - 1);
    } else if (sum < K) {
      return recursion(start + 1, end);
    } else {
      return 1 + recursion(start + 1, end - 1);
    }
  };

  console.log(recursion(0, list.length - 1));
});
