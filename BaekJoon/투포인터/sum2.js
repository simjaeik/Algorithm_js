const rl = require("readline").createInterface({
  input: process.stdin,
});

let input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  const [N, M] = input[0].split(" ").map((e) => e - 0);
  const list = input[1].split(" ").map((e) => e - 0);

  let s = 0,
    e = 0,
    sum = list[0],
    answer = 0;

  while (e < N) {
    if (sum === M) {
      answer++;
      sum -= list[s++];
      sum += list[++e];
    } else if (sum < M) {
      sum += list[++e];
    } else if (sum > M) {
      sum -= list[s++];
    }
  }
  console.log(answer);
});

const ln = ["10 5", "1 2 3 4 2 5 3 1 1 2"];
// const ln = ["4 2", "1 1 1 1"];

const [N, M] = ln[0].split(" ").map((e) => e - 0);
const list = ln[1].split(" ").map((e) => e - 0);

let s = 0,
  e = 0,
  sum = list[0],
  answer = 0;

while (e < N) {
  if (sum === M) {
    answer++;
    sum -= list[s++];
    sum += list[++e];
  } else if (sum < M) {
    sum += list[++e];
  } else if (sum > M) {
    sum -= list[s++];
  }
}

console.log(answer);
