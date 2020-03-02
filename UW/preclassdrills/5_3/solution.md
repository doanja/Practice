# 5.3 Solution

```javascript
function firstNonRepeatChar(str) {
	for (var i = 0; i < str.length; i++) {
		var char = str[i];
		var count = 0;
		
		for (var j = 0; j < str.length; j++) {
			if (str[j] === char) {
				count++;
			}
		}

		if (count === 1) {
			return char;
		}
	}
}
```
