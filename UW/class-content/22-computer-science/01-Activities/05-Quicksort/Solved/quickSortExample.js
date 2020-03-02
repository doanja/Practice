// modified from https://gist.github.com/ttezel/3124434
var unsorted = [];
for (var index = 0, t = 400000; index < t; index++) {
  unsorted.push(Math.round(Math.random() * t));
}

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  // create left array (elements <= pivot), and right array (elements > pivot)
  var left = [];
  var right = [];

  // loop through array and create left/right
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    }
    else {
      right.push(array[i]);
    }
  }

  // get the result of recursively sorting the left array (using quicksort), then join that with the pivot and the
  // result of recursively sorting the right array (using quicksort).
  // equivalent of `return quicksort(left) + pivot + quicksort (right);` in the pseudocode
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log("Pre Sort:", unsorted.join(" "));
var sorted = quickSort(unsorted);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
