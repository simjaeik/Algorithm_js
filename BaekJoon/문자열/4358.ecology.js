const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (ln) => {
  input.push(ln);
}).on("close", () => {
  const map = new Map();

  input.forEach((v) => {
    const check = map.get(v);
    if (check) {
      map.set(v, check + 1);
    } else {
      map.set(v, 1);
    }
  });

  let list = [];
  for (const [key, value] of map) {
    const num = ((value / input.length) * 100).toFixed(4);
    list.push(key + " " + num);
  }

  list = list.sort();
  list.forEach((v) => console.log(v));
});
