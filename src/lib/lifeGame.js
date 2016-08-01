import range from 'prelude-es6/List/range';

function neighbors(n, arr, r = 1) {
  /* arr[n - r] ~ arr[n + r]までの要素を返す */
  if (arr.length === 0 || (arr.length - 1) / 2 <= r) return arr;
  const last = arr.length - 1;
  return [(n <= 0) ? last : n - 1, n, (n >= last) ? 0 : n + 1];
}

const neighborLives = (matrix, x, y) => {
  // 8つの近傍のセルの生きたセル数を返す
  const X = matrix[0].length;
  const Y = matrix.length;
  let sum = 0;

  for (const i of neighbors(x, range(X))) {
    for (const j of neighbors(y, range(Y))) {
      sum += matrix[j][i];
    }
  }

  return sum - matrix[y][x]; // 自分自身はカウントしない
};

const nextGenalation = (matrix, rule) => (
  // 次の世代を返す
  matrix.map((row, y) => (
    row.map((cell, x) => (
      rule(cell, neighborLives(matrix, x, y))
    ))
  ))
);

// function* genalations(matrix, rule) {
//   while (1)
//     yield nextGenalation(matrix, rule);
// }

const rule = (cell, neighborLives) => (
  (!cell && neighborLives === 3)
    || (cell && (neighborLives === 2 || neighborLives === 3))
);

export {
  neighborLives,
  nextGenalation,
  // genalations,
  rule
};
