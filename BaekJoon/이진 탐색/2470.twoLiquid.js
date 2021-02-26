const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  const N = Number(input.shift());
  const list = input
    .shift()
    .split(" ")
    .map((n) => n - 0)
    .sort((a, b) => a - b);

  let [left, right] = [0, N - 1];
  let min = Math.abs(list[left] + list[right]);
  let ans = [list[left], list[right]];

  while (left < right) {
    const sum = list[left] + list[right];

    if (sum === 0) {
      ans = [list[left], list[right]];
      break;
    }
    if (min > Math.abs(sum)) {
      ans = [list[left], list[right]];
      min = Math.abs(sum);
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  console.log(ans[0] + " " + ans[1]);
});
