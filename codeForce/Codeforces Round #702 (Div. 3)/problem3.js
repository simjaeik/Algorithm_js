const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  const T = input.shift();

  for (let i = 0; i < T; i++) {
    const num = Number(input.shift());
    const limit = Math.floor(Math.pow(num, 1 / 3));
    let start = 1;
    let end = limit;

    let ans = "NO";
    while (start <= end && end <= limit) {
      let sum = Math.pow(start, 3) + Math.pow(end, 3);
      if (sum === num) {
        ans = "YES";
        break;
      }
      if (sum > num) {
        end--;
        continue;
      }
      if (sum < num) {
        start++;
        continue;
      }
    }
    console.log(ans);
  }
});
