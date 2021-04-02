const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  let [s1, s2] = [input.shift(), input.shift()];
  if (s1.length > s2.length) {
    [s1, s2] = [s2, s1];
  }

  let ans = new Array(s1.length).fill(new Array(s1.length).fill(0));
  let str = "";

  [...s1].forEach((v) => {
    for (let j = 0; j < s1.length; j++) {
        
        for(let i =j; i<)
    }
  });
  console.log(ans.length);
  if (ans.length > 0) console.log(ans);
});
