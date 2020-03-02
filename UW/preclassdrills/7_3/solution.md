# 7.3 Solution

- The output will be NaN.
- Inside `inner` we have declared a variable a with the `var` keyword, so when we reference `a` inside of `inner`, it will always look to that a - not the one declared in `outer` or globally.
- We are referencing `a` twice before it is declared, but that does not give us a reference error.
- In JavaScript, variable declarations are hoisted, meaning `var a` is essentially moved to the top line of the function, but the assignment `= 5` is not. So a is declared but has a value of `undefined` until the line `var a = 5;` is run.
- `undefined` is not a number so performing a mathematical operation on it, like the post-increment operation `++`, will result in a value of `NaN`.
