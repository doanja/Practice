# 7.1 Solution

```javascript
var findDup = function (arr) {
	for (var i = 0; i < arr.length; i++){
		for (var j = 0; j < i; j++){
			if(arr[i] === arr[j]){
				return arr[i];
            }
        } 
    }
}
```
