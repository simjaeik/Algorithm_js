const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  const [N, K] = input.map((n) => n - 0);

  let low = 1,
    high = K;
  let result = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let cnt = 0;
    for (let i = 1; i <= N; i++) {
      cnt += Math.min(Math.floor(mid / i), N);
    }

    if (cnt < K) {
      low = mid + 1;
    } else {
      result = mid;
      high = mid - 1;
    }
  }
  console.log(result);
});
