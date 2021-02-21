const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  input.shift();

  input
    .map((v) => v - 0)
    .forEach((v) => {
      const n = v % 10;
      let ans = "NO";

      if (n % 2 === 0) {
        for (let i = 3; i * i <= v; i += 2) {
          if (v % i === 0) {
            ans = "YES";
            break;
          }
        }
      } else {
        ans = "YES";
      }

      console.log(ans);
    });
});
