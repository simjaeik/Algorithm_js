const kakaoSort = (a, b) => {
  const reg = /([a-zA-Z -.]*)([0-9]*)/;
  const parse = (str) => {
    const [, string, num] = reg.exec(str);
    return [string, num];
  };

  let [str1, num1] = parse(a);
  let [str2, num2] = parse(b);

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  num1 = Number(num1);
  num2 = Number(num2);

  if (str1 === str2) {
    return num1 < num2 ? -1 : num1 > num2 ? 1 : 0;
  }
  return str1 < str2 ? -1 : str1 > str2 ? 1 : 0;
};

const solution = (files) => {
  return files.sort(kakaoSort);
};

console.log(
  solution([
    "img09eezzz.png",
    "img9asdfadf.png",
    "img000001ee.png",
    "IMG 031ffa.GIF",
    "imG00009zdfzs.png",
    "img014sd.JPG",
  ])
);
