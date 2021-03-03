const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  const N = Number(input.shift());

  let list = new Array(1000001).fill(0);
  input
    .map((v) => {
      return [...v.split(" ").map((n) => Number(n))];
    })
    .map(([f, b]) => {
      list[f]++;
      list[b]--;
    });

  let cnt = 0,
    max = 0;
  list = list.forEach((add) => {
    cnt += add;
    max = Math.max(max, cnt);
  });

  console.log(max);
});
