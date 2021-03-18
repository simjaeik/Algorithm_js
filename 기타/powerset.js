const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입력받은 문자 자르기 ( 한 줄을 공백문자로 자른 다음 숫자로 변환 )
const getLine = () => {
  return [
    ...input
      .shift()
      .split(" ")
      .map((v) => Number(v)),
  ];
};

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const set = getLine();
  const len = set.length;

  let ans = [];

  // 재귀를 통해 멱집합을 구하는 함수
  const getPowerSet = (ary, cur) => {
    if (cur === len) {
      ans.push(ary);
      return;
    }

    getPowerSet(ary, cur + 1); // 포함 시키지 않는 경우
    getPowerSet([...ary, set[cur]], cur + 1); // 포함 시키는 경우
  };

  getPowerSet([], 0);

  console.log(ans);
});
