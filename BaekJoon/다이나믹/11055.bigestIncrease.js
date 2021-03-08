const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  const N = Number(input.shift());

  let dp = new Array(N).fill(0);
  const list = input
    .shift()
    .split(" ")
    .map((n) => Number(n));

  let max = 0;
  for (let i = 0; i < N; i++) {
    dp[i] = list[i];
    for (let j = 0; j < i; j++) {
      if (list[j] < list[i] && dp[i] < dp[j] + list[i]) {
        dp[i] = dp[j] + list[i];
      }
    }
    if (max < dp[i]) {
      max = dp[i];
    }
  }

  console.log(max);
});
