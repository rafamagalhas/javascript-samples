const intersection = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter(x => s.has(x));
};

const intersectionResult = intersection([1, 2, 3], [4, 3, 2]);
console.log(intersectionResult);