module.exports = math => {
  const triangle = math.getTriangle("p18");
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      triangle[i][j] += math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};
