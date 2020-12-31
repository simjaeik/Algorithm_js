const mySplit = (i, s) => {
  let splits = [];
  let start = 0;
  while (start < s.length) {
    const token = s.substr(start, i);
    splits.push(token);
    start += i;
  }
  return splits;
};

const solution = (s) => {
  let max = s.length;
  const range = [...Array(s.length)];

  console.log(range);
  for (let i = 1; i <= s.length / 2; i++) {
    let arr = mySplit(i, s);
    let answer = "";
    let count = 1;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] === arr[j]) {
        count++;
      } else {
        answer += arr[j - 1];
        answer = count > 1 ? answer + count : answer;
        count = 1;
      }
    }
    answer += arr[arr.length - 1];
    answer = count > 1 ? answer + count : answer;

    if (max > answer.length) {
      max = answer.length;
    }
  }
  return max;
};

console.log(solution("abcabcabcabcdededededede"));
