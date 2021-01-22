const solution = (gems) => {
  let start = 0;
  let end = 0;
  let answer = [0, 100001];
  const cmp = [...new Set(gems)];
  const size = cmp.length;

  let list = [gems[0]];
  let has = {};
  has[gems[0]] = 1;

  const len = gems.length;
  while (start < len && end < len) {
    // const remain =
    //   cmp.filter((v) => !list.includes(v)).length > 0 ? true : false;
    const contain = Object.keys(has).length === size;
    console.log(start, end, contain);
    // console.log(contain);
    // console.log(has);
    if (!contain) {
      end++;
      if (has[gems[end]]) {
        has[gems[end]]++;
      } else {
        has[gems[end]] = 1;
      }
    } else {
      if (end - start < answer[1] - answer[0]) {
        answer = [start + 1, end + 1];
      }
      if (has[gems[start]] === 1) {
        console.log("hear");
        delete has[gems[start]];
      } else {
        console.log("or hear");
        has[gems[start]]--;
      }
      start++;
    }

    list = gems.slice(start, end + 1);
  }
  return answer;
};

console.log(
  solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
);
