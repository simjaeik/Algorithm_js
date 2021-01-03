// const solution = (triangle) => {
//   const len = triangle.length;
//   const dp = new Array(len);

//   for (let i = 0; i < dp.length; i++) {
//     dp[i] = new Array(i + 1);
//   }

//   dp[0][0] = triangle[0][0];
//   for (let n = 1; n < len; n++) {
//     for (let k = 0; k <= n; k++) {
//       if (k === 0) {
//         dp[n][k] = dp[n - 1][k] + triangle[n][k];
//         continue;
//       } else if (k === n) {
//         dp[n][k] = dp[n - 1][k - 1] + triangle[n][k];
//         continue;
//       }
//       dp[n][k] = Math.max(dp[n - 1][k], dp[n - 1][k - 1]) + triangle[n][k];
//     }
//   }

//   const answer = Math.max(...dp[len - 1]);

//   return answer;
// };

function solution(triangle) {
  return Math.max(
    ...triangle.reduce((cost, line) => {
      return line.map((v, index) => {
        return (
          v +
          Math.max(
            index < cost.length ? cost[index] : 0,
            index > 0 ? cost[index - 1] : 0
          )
        );
      });
    }, [])
  );
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
