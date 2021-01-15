const compOne = (target, list) => {
  const diffOne = (str1, str2) => {
    return [...str1].filter((v, i) => v !== str2[i]).length === 1;
  };

  return [
    list.filter((v) => diffOne(target, v)),
    list.filter((v) => !diffOne(target, v)),
  ];
};

const solution = (begin, target, words) => {
  let answer = 0;

  if (!words.includes(target)) {
    return 0;
  }

  let isTarget = false;
  let cur = begin;
  let list = [];
  list.push(compOne(cur, words));
  while (!isTarget) {
    const [words, curList] = list.pop();
    words.forEach((v) => {
      list.push(compOne(v, curList));
      if (v === target) {
        isTarget = true;
      }
    });
    answer++;
    if (isTarget) break;
  }

  return answer;
};

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
