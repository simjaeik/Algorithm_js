// My Solution
const solution = (priorities, location) => {
  let answer = 0;
  let array = priorities.slice();
  let maxPrioity = Math.max(...array);

  while (true) {
    if (array[0] === maxPrioity) {
      if (location === 0) {
        return answer + 1;
      }
      array.splice(0, 1);
      maxPrioity = Math.max(...array);
      location--;
      answer++;
      continue;
    }
    // console.log(array[0]);
    array.push(array[0]);
    array.splice(0, 1);
    location = location === 0 ? array.length - 1 : location - 1;
  }
};

// other people solution
const solution = (priorities, location) => {
  let list = priorities.map((val, idx) => {
    return {
      target: location === idx,
      val,
    };
  });

  while (true) {
    const cur = list.shift();
    if (list.some((v) => v.val > cur.val)) {
      list.push(cur);
      continue;
    }
    answer++;
    if (cur.target) {
      return answer;
    }
  }
};
