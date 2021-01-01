const solution = (number, k) => {
  let num = [...number];
  let st = [];

  st.push(num.shift());

  num.forEach((v) => {
    while (k > 0 && st.length > 0 && st[st.length - 1] < v) {
      st.pop();
      k--;
    }
    st.push(v);
  });

  st = [...st].join("");
  if (k > 0) {
    st = st.substring(0, st.length - k);
  }
  return st;
};

console.log(solution("4177252841", 4));
