const rl = require("readline").createInterface({
  input: process.stdin,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input[0].split(" ").map((n) => n - 0);
  console.log(n + m);
});
