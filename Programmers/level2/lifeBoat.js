const solution = (people, limit) => {
  let answer = 0;
  people.sort((a, b) => a - b);

  let boat = limit;
  while (people.length > 0) {
    if (boat < people[1] + people[0]) {
      console.log("hi");
      for (let i = people.length - 1; i >= 0; i--) {
        if (boat > people[i]) {
          people.splice(i, 1);
          break;
        }
      }
      answer++;
      boat = limit;
      continue;
    }
    boat -= people.shift();
  }

  return answer;
};

console.log(solution([10, 20, 30, 40, 50, 60, 70, 80, 90], 100));
