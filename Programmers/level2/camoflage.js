const solution = (clothes) => {
  let list = {};

  clothes.forEach(([val, type]) => {
    if (!list[type]) {
      list[type] = [val];
      return;
    }
    list[type].push(val);
  });

  let answer = 1;
  Object.values(list).forEach((v) => {
    answer *= v.length + 1;
  });

  console.log(answer);

  return list;
};

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
