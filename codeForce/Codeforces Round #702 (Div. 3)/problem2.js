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
    let list = [0, 0, 0];
    const nums = input
      .shift()
      .split(" ")
      .forEach((n) => {
        const div = n % 3;
        list[div]++;
      });

      let count = 0;
    list
      .map((n) => N / 3 - n)
      .forEach((v, idx) => {
        for (let i = idx + 1; i < 3; i++) {
          const cmp = Math.abs(list[i]);
          if (v * list[i] < 0) {
            v = Math.abs(v);
            if (v > cmp) {
                list[idx] += list[i];
                list[i] = 0;
            }else{
                list[i] += list[idx];
                list[idx] = 0;
            }
            count += (i-idx
          }
        }
      });
  }
});
