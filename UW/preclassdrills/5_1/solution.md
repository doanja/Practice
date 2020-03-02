# 5.1 Solution

```javascript
var countVowels = function(str){
	var count = 0;
	var input = str.toLowerCase();
	for (var i = 0; i < input.length; i++){
	  if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"){
		  count++;
    }
	}
}

// alt
var countVowels = function(str){
	var count = 0;
	var input = str.toLowerCase();
	var vowelArr = [“a”, “e”, “i”, “o”, “u”];
	for (var i = 0; i < input.length; i++){
	  if(vowelArr.includes(input[i])){
		  count++;
    }
	}
	return count;
}
```
