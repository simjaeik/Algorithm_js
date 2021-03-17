const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const getSum = (nums, sum) => {
  while (nums.length > 0) {
    if (nums.length === 1) {
      sum += nums.shift();
      break;
    }
    const [n1, n2] = [nums.shift(), nums.shift()];
    sum += n1 * n2 >= n1 + n2 ? n1 * n2 : n1 + n2;
  }
  return sum;
};

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const N = Number(input.shift());
  let [plus, minus] = [[], []];

  input.forEach((v) => {
    const num = Number(v);

    num <= 0 ? minus.push(num) : plus.push(num);
  });

  minus.sort((a, b) => {
    return a - b;
  });
  plus.sort((a, b) => {
    return b - a;
  });

  let sum = 0;

  sum = getSum(minus, sum);
  sum = getSum(plus, sum);

  console.log(sum);
});
