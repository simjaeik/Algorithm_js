const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (ln) => {
  input = Number(ln);
}).on("close", () => {
  const facto = (num) => {
    if (num === 0) {
      return 1;
    }
    return num * facto(num - 1);
  };

  console.log(facto(input));
});
