const union = (a, b) => Array.from(new Set([...a, ...b]));

const unionResult = union([1,2,5], [2,3,4]);
console.log(unionResult);