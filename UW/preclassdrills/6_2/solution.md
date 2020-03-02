# 6.2 Solution

- `var a = b = 3` is equivalent to writing:
  `b = 3;`
  `var a = b;`
- This means that `b` is created globally (unless you use strict mode) because there is no `var` keyword in the variable definition.
- After `b` is created globally, `b` is assigned the value 3. Then a is created locally inside the function and assigned the value of `b`, which is 3.
- Because `a` is created locally, it doesn’t exist outside the function.
