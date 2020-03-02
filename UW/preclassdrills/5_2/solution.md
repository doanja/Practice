# 5.2 Solution

Pseudocode:
1. make a function expression.
2. loop through the string.
3. compare the first and last letters and return false if not equal.
4. compare the second and second from last letters and return false if not equal.
5. continue in this manner until all letters are checked. 
6. after all letters are checked, return true.

```javascript
var isPalindrome = function (str) {
	for (var i = 0; i < str.length; i++) {
		if (str[i] !== str[str.length - (i + 1)]) {
			return false;
		}
	}
	return true;
}
```
