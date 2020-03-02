# 11.3 Solution

```javascript
var includes = function(arr, elem){
  for (var i = 0; i < arr.length; i++){
    if(elem === arr[i]){
      return true;
    }
  }
  
  return false;
}
```
