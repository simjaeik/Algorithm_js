const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const N = Number(input.shift());

  let list = [];

  input.forEach((line) => {
    let multi = 1;
    for (let i = line.length; i >= 0; i--) {
      let idx = -1;
      const included = list.some((v) => {
        idx++;
        return v[0] === line[i];
      });

      if (included) {
        list[idx][1] += multi;
      } else {
        list.push([line[i], multi]);
      }
      multi *= 10;
    }
  });

  let num = 9,
    sum = 0;
  list = list
    .filter((v) => {
      return v[0];
    })
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .forEach((v) => {
      sum += (v[1] / 10) * num--;
    });
  console.log(sum);
});
