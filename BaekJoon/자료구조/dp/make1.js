var input = require("fs").readFileSync("/dev/stdin").toString();
let inputNum = Number(input);

const list = new Array(inputNum + 1).fill(0);
(list[0] = 1), (list[1] = 1), (list[2] = 1), (list[3] = 1);

for (let i = 4; i <= inputNum; i++) {
  const nums = [];
  if (i % 2 === 0) {
    nums.push(list[i / 2] + 1);
  }
  if (i % 3 === 0) {
    nums.push(list[i / 3] + 1);
  }
  nums.push(list[i - 1] + 1);
  list[i] = Math.min(...nums);
}
console.log(list[inputNum]);

console.log(solution(740));
