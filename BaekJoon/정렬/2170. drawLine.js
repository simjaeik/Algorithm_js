const { platform } = require("os");

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  const N = Number(input.shift());
  let list = input
    .map((v) => v.split(" ").map((n) => Number(n)))
    .sort((a, b) => {
      return a[0] - b[0];
    });

  let line = list.shift();
  let sum = 0;

  for (let i = 0, len = list.length; i < len; i++) {
    const [start, end] = list[i];

    if (start > line[1]) {
      sum += line[1] - line[0];
      line = [start, end];
      continue;
    }

    line[1] = Math.max(line[1], end);
  }
  sum += line[1] - line[0];
  console.log(sum);
});
