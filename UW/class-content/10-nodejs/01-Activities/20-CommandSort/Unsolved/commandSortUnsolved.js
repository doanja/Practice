// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

const sortArgs = (arr = process.argv) => {
  const copyArr = [...arr]; // dupe arr
  copyArr.splice(0, 2); // remove first two elements

  // return sorted array in ascending order
  return copyArr.sort((a, b) => {
    return a - b;
  });
};

console.log(sortArgs());
