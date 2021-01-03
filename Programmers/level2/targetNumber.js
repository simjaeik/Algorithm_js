const recur = (numbers, target, sum, cur) => {
  if (cur === numbers.length - 1) {
    if (sum === target) {
      return 1;
    }
    return 0;
  }

  return (
    recur(numbers, target, sum + numbers[cur+1], cur + 1) +
    recur(numbers, target, sum - numbers[cur+1], cur + 1)
  );
};

const solution = (numbers, target) => {
  let answer =
  recur(numbers, target, numbers[0], 0) +
  recur(numbers, target, -numbers[0], 0);

  console.log(answer);
  return answer;
};
