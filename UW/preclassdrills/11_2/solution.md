# 11.2 Solution

```
var getNegative = function (numString){
  var negNum = numString * -1;

  if (isNaN(negNum)){
    throw 'input must be coercible to a number'
  }

  return negNum
}
```