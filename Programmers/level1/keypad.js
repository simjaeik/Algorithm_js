const key = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["*", "0", "#"],
];

const R = ["3", "6", "9", "#"];
const L = ["1", "4", "7", "*"];

const solution = (numbers, hand) => {
  numbers = numbers.map((v) => v + "");
  let left = [3, 0];
  let right = [3, 2];

  const calcRange = (input, target) => {
    return Math.abs(target[0] - input[0]) + Math.abs(target[1] - input[1]);
  };

  const getHand = (k) => {
    const leftLen = calcRange(left, k);
    const rigthLen = calcRange(right, k);

    if (leftLen === rigthLen) {
      const h = hand[0].toUpperCase();
      if (h === "R") {
        right = k;
      } else {
        left = k;
      }
      return h;
    }
    if (leftLen > rigthLen) {
      right = k;
      return "R";
    } else {
      left = k;
      return "L";
    }
  };

  const searchKey = (target) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (target === key[i][j]) {
          return [i, j];
        }
      }
    }
  };

  return numbers.reduce((res, val) => {
    const k = searchKey(val);
    if (R.includes(val)) {
      right = k;
      return res + "R";
    } else if (L.includes(val)) {
      left = k;
      return res + "L";
    }
    return res + getHand(k);
  }, "");
};

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));

