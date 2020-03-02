const sumOfMultiples = (target, num) => {
  if (target < num) {
    console.log('equals');
    return num;
  }
  console.log('calc');
  return num + sumOfMultiples(target, num + num);
};

console.log(sumOfMultiples(process.argv[2], process.argv[3]));
