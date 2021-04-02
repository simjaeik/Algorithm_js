// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let max = 0;
  const bi = N.toString(2);

  let cur = 0;
  [...bi].forEach((v) => {
    if (v === "1") {
      max = Math.max(max, cur);
      cur = 0;
    } else {
      cur++;
    }
  });

  return max;
}
