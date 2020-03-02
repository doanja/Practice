```js
var singleWord = function (str){

  var newStr = '';

  for (var i = 0; i < str.length; i++){
    if (str[i] !== ' ' ){
      newStr += str[i];
    }
  }

  return newStr.toLowerCase();
}
```

```js
var singleWord = function (str){

  var newStr = str.toLowerCase().replace(/\s/g,'')

  return newStr;
}
```