# 7.2 Solution

```javascript
var isPangram = function (str) {
  str = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < alphabet.length; i++) {
	  if (!str.includes(alphabet[i])){
		  return false;
	  }
  }
  return true;
}
```
