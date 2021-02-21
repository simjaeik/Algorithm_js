const getLife = (list) => {
  let cnt = 0;
  let ans = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] <= 0) {
      cnt++;
      continue;
    }
    if (cnt > ans) {
      ans = cnt;
    }
    cnt = 0;
  }
  return ans;
};

const solution = (stones, k) => {
  let min = Math.min(...stones);
  let life = 0;
  let ans = 0;

  while (life < k) {
    min = Math.min(...stones.filter((v) => v > 0));
    stones = stones.map((v) => v - min);
    life = getLife(stones, k);
    ans += min;
  }
  return ans;
};

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
