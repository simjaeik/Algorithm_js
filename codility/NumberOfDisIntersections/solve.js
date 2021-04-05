// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let [lower, upper] = [[], []];

  A.forEach((v, i) => {
    lower.push(i - v);
    upper.push(i + v);
  });
  lower.sort((a, b) => {
    return a - b;
  });
  upper.sort((a, b) => {
    return a - b;
  });

  let [cnt, cur, ans] = [0, 0, 0];
  lower.forEach((v) => {
    while (v > upper[cur]) {
      cur++;
      cnt--;
    }
    ans += cnt;
    cnt++;
  });
  return ans;
}
