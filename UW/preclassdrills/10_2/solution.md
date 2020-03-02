# 10.2 Solution

```javascript
var deduper = function (numArr){
  var newArr = [];
  for (var i = 0; i < numArr.length; i++){
    if(!newArr.includes(numArr[i])){
      newArr.push(numArr[i]);
    }
  }
}
```
