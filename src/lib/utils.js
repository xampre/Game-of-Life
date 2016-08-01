const randomBool = (truePercentage) => Math.random() <= truePercentage;

const makeMatrix = (n, m, valueCallback = () => false) =>
  Array(m).fill(0).map(() =>
    Array(n).fill(0).map(() => valueCallback()));

const toggledMatrix = (matrix, x, y) => [
  // matrix[y][x] のブール値を反転した新しい配列を返す
  ...matrix.slice(0, y),
  [...matrix[y].slice(0, x), !matrix[y][x], ...matrix[y].slice(x + 1)],
  ...matrix.slice(y + 1)
];

export { randomBool, makeMatrix, toggledMatrix };
