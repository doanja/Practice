# 12.3 Solution

Solution 1:  

```js
var any = function(arr, cb){
  var isTrue = false;

  for (var i = 0; i < arr.length; i++){
    var cbOutput = cb(arr[i]);
    if(cbOutput){
      isTrue = cbOutput;
    }
  }
  
  return isTrue;
}
```

Solution 2:  

```js
function process(arr, func) {
  return arr.filter(func).length > 0;
}
```

Solution 3:  

```js
function process(arr, func) {
  return arr.some(func);
}
```
