# 12.2 Solution

```js
var map = function(arr, cb){
  var newArr = [];

  for (var i = 0; i < arr.length; i++){
    var newNum = cb(arr[i]);
    newArr.push(newNum);
  }
  
  return newArr;
}
```
