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
    const contain = Object.keys(has).length === size;
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
        delete has[gems[start]];
      } else {
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
