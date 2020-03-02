# 6.1 Solution

```javascript
var average = function (numArr) {
	var sum = 0;
	for (var i = 0; i < numArr.length; i++){
	 	sum += numArr[i];
	}
	return sum / numArr.length;
}
```
