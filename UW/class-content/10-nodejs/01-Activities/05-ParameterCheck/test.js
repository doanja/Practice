const isParamEqual = (one, two) => {
  return one === two;
};

console.log(isParamEqual(process.argv[2], process.argv[3]));
