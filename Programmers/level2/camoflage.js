// const solution = (clothes) => {
//   let list = {};

//   clothes.forEach(([val, type]) => {
//     if (!list[type]) {
//       list[type] = [val];
//       return;
//     }
//     list[type].push(val);
//   });

//   let answer = 1;
//   Object.values(list).forEach((v) => {
//     answer *= v.length + 1;
//   });

//   return answer - 1;
// };

const solution = (clothes) => {
  return (
    Object.values(
      clothes.reduce((res, val) => {
        res[val[1]] = res[val[1]] ? res[val] + 1 : 1;
        return res;
      }, {})
    ).reduce((res, val) => res * (val + 1), 1) - 1
  );
};

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
