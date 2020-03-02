# 13_1 Solution

```js
function warmup(arr, func) {
  let newArr = [];

  arr.forEach(function(item) {
    if (func(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

function filter(arr, func) {
  return arr.filter(func);
};
```
