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
    .shift()
    .split(" ")
    .map((n) => Number(n))
    .sort((a, b) => {
      return a - b;
    });

  let sum = list.shift();

  if (sum !== 1) {
    console.log(1);
    return;
  }

  for (let i = 0, len = list.length; i < len; i++) {
    if (sum + 1 < list[i]) {
      break;
    }
    sum += list[i];
  }
  console.log(sum + 1);
});
