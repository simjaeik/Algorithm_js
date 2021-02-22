const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  const [N, T] = input
    .shift()
    .split(" ")
    .map((n) => n - 0);
  const list = input
    .shift()
    .split(" ")
    .map((n) => n - 0)
    .sort();

  let end = list[list.length - 1];

  const bsearch = (s, e) => {
    let max = 0;
    while (s <= e) {
      const mid = Math.floor((e + s) / 2);

      const sum = list.reduce((res, v) => {
        if (v > mid) {
          return res + v - mid;
        }
        return res;
      }, 0);

      if (sum >= T) {
        s = mid + 1;
        if (mid > max) {
          max = mid;
        }
        continue;
      }
      if (sum < T) {
        e = mid - 1;
        continue;
      }
    }
    return max;
  };

  const answer = bsearch(1, 1000000000);

  console.log(answer);
});
