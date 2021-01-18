const formula = {
  "+": (num1, num2) => {
    return num1 + num2;
  },
  "-": (num1, num2) => {
    return num1 - num2;
  },
  "*": (num1, num2) => {
    return num1 * num2;
  },
};
const exp = [
  ["+", "-", "*"],
  ["+", "*", "-"],
  ["-", "+", "*"],
  ["-", "*", "+"],
  ["*", "+", "-"],
  ["*", "-", "+"],
];

const solution = (expression) => {
  const nums = expression.match(/\d+/g).map((v) => v - 0);
  const exps = expression.match(/\D/g);
  let max = 0;

  exp.forEach((turn) => {
    let curNums = [...nums];
    let curExps = [...exps];
    turn.forEach((v) => {
      for (let i = 0; i < curExps.length; ) {
        if (curExps[i] === v) {
          const result = formula[v](curNums[i], curNums[i + 1]);
          curNums.splice(i, 2, result);
          curExps.splice(i, 1);
          continue;
        }
        i++;
      }
    });
    let [sum] = curNums;
    sum = Math.abs(sum);
    max = sum > max ? sum : max;
  });

  return max;
};

console.log(solution("100-200*300-500+20"));
