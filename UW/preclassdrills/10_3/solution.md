# 10.3 Solution

```javascript
var isValidPass = function (password){
  var hasLower = false;
  var hasUpper = false;

  if (password.length < 8){
    return false;
  }

  for (var i = 0; i < password.length; i++){
    if (password[i].toLowerCase() === password[i]){
      hasLower = true;
    }
    if (password[i].toUpperCase() === password[i]){
      hasUpper = true;
    }
  }

  return hasLower && hasUpper;
}
```
