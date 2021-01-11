const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (ln) => {
  input = Number(ln);
}).on("close", () => {
  const solution = (num) => {
    if (num < 2) {
      return num;
    }
    return solution(num - 2) + solution(num - 1);
  };

  console.log(solution(input));
});
