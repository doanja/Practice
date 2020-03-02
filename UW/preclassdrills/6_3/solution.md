# 6.3 Solution

```javascript
var isInt = function (input) {
	return parseInt(input) === input;
}

// Preferred
var isInt = function (input) {
	return Math.floor(input) === input;
}
```
