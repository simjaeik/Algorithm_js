const solution = (numbers) => {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");

  return answer === 0 ? "0" : answer;
};

solution([3, 30, 34, 5, 9]);
