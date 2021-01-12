const solution = (str1, str2) => {
  const splice2 = (str) => {
    return [...str]
      .map((v, i) => {
        if (i === str.length - 1) return " ";

        return str.substr(i, 2).toUpperCase();
      })
      .filter((v) => v.search(/[^a-zA-Z]/) === -1);
  };

  str1 = splice2(str1);
  str2 = splice2(str2);

  if (str1.length > str2.length) {
    [str1, str2] = [str2, str1];
  }

  let intersection = [];
  str1.forEach((v) => {
    const index = str2.indexOf(v);
    if (index !== -1) {
      intersection.push(v);
      str2.splice(str2.indexOf(v), 1);
    }
  });
  intersection = intersection.length * 65536;
  let union = [...str1, ...str2].length;

  if (intersection === 0 && union === 0) return 65536;

  return Math.floor(intersection / union);
};
