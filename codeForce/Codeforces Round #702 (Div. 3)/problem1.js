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
    const N = input.shift();
    const nums = input.shift().split(" ");

    let sum = 0;
    for (let j = 0; j < N - 1; j++) {
      const min = Math.min(nums[j], nums[j + 1]);
      const max = Math.max(nums[j], nums[j + 1]);
      const div = max / min;

      let times = Math.log(div) / Math.log(2);
      times = times % 1 === 0 && times > 0 ? times - 1 : Math.floor(times);
      sum += times;
    }
    console.log(sum);
  }
});
