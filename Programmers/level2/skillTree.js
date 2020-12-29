// const solution = (skill, skillTrees) => {
//   let answer = skillTrees.length;

//   skillTrees.forEach((sk) => {
//     const reg = new RegExp(`[^${skill}]`, "g");

//     const token = sk.replace(reg, "");

//     for (let i = 0; i < token.length; i++) {
//       if (token[i] !== skill[i]) {
//         answer--;
//         break;
//       }
//     }
//   });
//   return answer;
// };

function solution(skill, skill_trees) {
  var regex = new RegExp(`[^${skill}]`, "g");

  return skill_trees
    .map((x) => x.replace(regex, ""))
    .filter((x) => {
      console.log(skill.indexOf(x));
      return skill.indexOf(x) === 0 || x === "";
    }).length;
}
console.log("zz", solution("CBD", ["FE", "ERZ", "ASDF", "CAERBD"]));
