# 12.1 Solution

```js
var double = function(arr){
  var newArr = [];

  for (var i = 0; i < arr.length; i++){
    const newNum = arr[i] * 2;
    newArr.push(newNum);
  }

  return newArr;
}
```
