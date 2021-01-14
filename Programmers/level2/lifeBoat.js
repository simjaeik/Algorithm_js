const solution = (people, limit) => {
  let answer = 0;
  people.sort((a, b) => b - a);

  let end = people.length - 1;
  for (let i = 0; i <= end; i++, answer++) {
    if (people[i] + people[end] <= limit) {
      end--;
    }
  }

  return answer;
};

console.log(solution([10, 20, 30, 40, 50, 60, 70, 80, 90], 100));
