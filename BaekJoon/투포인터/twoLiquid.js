const rl = require("readline").createInterface({ input: process.stdin });

let list = [];
rl.on("line", (ln) => {
  list.push(ln);
}).on("close", () => {
  list.shift();

  let sum = 2000000000;
  let left, right;

  list = list[0].split(" ").map((e) => e - 0);

  list.sort((a, b) => Math.abs(a) - Math.abs(b));

  for (let i = 0; i < list.length; i++) {
    let res = list[i] + list[i + 1];
    if (Math.abs(res) < Math.abs(sum)) {
      sum = res;
      left = list[i];
      right = list[i + 1];
    }
  }
  if (left > right) {
    [left, right] = [right, left];
  }

  console.log(`${left} ${right}`);
});

let list = ["-100 1 1"];

list = list[0].split(" ").map((e) => e - 0);

list.sort((a, b) => a - b);

let start = 0,
  end = list.length - 1,
  sum;

let ans = { start, end, min: 2000000000 };

while (start < end) {
  sum = list[start] + list[end];

  if (Math.abs(sum) < Math.abs(ans.min)) {
    ans.min = sum;
    ans.start = list[start];
    ans.end = list[end];
  }

  if (sum === 0) {
    break;
  } else if (sum > 0) {
    end--;
  } else if (sum < 0) {
    start++;
  }
}

if (ans.start < 0 && ans.end < 0) {
  [ans.start, ans.end] = [ans.end, ans.start];
}

console.log(`${ans.start} ${ans.end}`);
