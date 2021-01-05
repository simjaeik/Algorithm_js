const { platform } = require("os");

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (ln) => {
  input = Number(ln);
}).on("close", () => {
  let primeList = Array(input + 1)
    .fill(0)
    .map((v, i) => i);

  //   primeList.forEach((v) => {
  //     primeList = primeList.filter((num) => num === v || num % v !== 0);
  //   });
  for (let i = 2; i <= primeList.length; i++) {
    if (primeList[i] === 0) {
      continue;
    }
    for (let n = i * 2; n < primeList.length; n += i) {
      primeList[n] = 0;
    }
  }

  primeList = primeList.filter((num) => num !== 0);
  primeList.shift();
  console.log(primeList);

  let start = 0,
    end = 0,
    answer = 0;

  while (start < primeList.length && end < primeList.length && start <= end) {
    const list = primeList.slice(start, end + 1);
    const sum = list.reduce((res, val) => res + val, 0);

    if (sum === input) {
      start++;
      end++;
      answer++;
    } else if (sum > input) {
      start++;
    } else if (sum < input) {
      end++;
    }
  }
  console.log(answer);
});
