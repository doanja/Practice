const compareArguments = args => {
  return process.argv[2] === process.argv[3];
};

console.log(compareArguments(process.argv));

console.log(process.argv);
