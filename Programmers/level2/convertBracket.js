const solution = (p) => {
  let answer = "";
  let stack = [];
  let list = [...p];

  // stack.push(list.shift());
  list.forEach((input) => {
    if (stack.length === 0) {
      stack.push(input);
      if (input === ")") answer += "(";
      else answer += "(";
      return;
    }
    if (input !== stack[stack.length - 1]) {
      stack.pop();
      answer += ")";
      return;
    }
    stack.push(input);
    answer += "(";
    return;
  });

  return answer;
};
console.log("()))((()");
console.log(solution("(()())()"));
