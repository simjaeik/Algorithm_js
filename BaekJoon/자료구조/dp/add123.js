const rl = require("readline").createInterface({ input: process.stdin });

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  input.shift();

  let dp = Array(12).fill(0);
  (dp[1] = 1), (dp[2] = 2), (dp[3] = 4);
  input.forEach((num) => {
    if (dp[num] !== 0) {
      console.log(dp[num]);
      return;
    }
    for (let i = 4; i <= num; i++) {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    console.log(dp[num]);
  });
});
