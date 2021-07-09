const difference = (a, b) => {
  const s = new Set(b);
  return Array.from(new Set(a.filter(x => !s.has(x))));
};

const differenceResult = difference([1,2,3,3], [1,2]);
console.log(differenceResult);

const stringDifferenceResult = difference(['a', 'b', 'c', 'c'], ['a', 'b']);
console.log(stringDifferenceResult);