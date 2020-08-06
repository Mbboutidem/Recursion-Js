## Recursion

# Main Objectives
* Define recursion
* List the pros and cons of recursion
* Convert from recursive to looping definitions
* Convert from looping to recursive definitions

#What is recursion?
* Recursion in computer science is a method where the solution to a problem depends on solutions to smaller instances of the same problem (unlike iteration). Such problems can generally be solved by iteration, but this needs to identify and index the smaller instances at programming time. Recursion solves such recursive problems by using functions that call themselves from within their own code. The approach can be applied to many types of problems, and recursion is one of the central ideas of computer science. <a href="https://en.wikipedia.org/wiki/Recursion_(computer_science)">Recursion - (computer science)</a>

#### The factorial of `n` is the product of all positive integers less than or equal to n.

When recursively solving a problem we want to take 4 steps ([see brilliant.org for more detail](https://brilliant.org/wiki/recursion-problem-solving/)).

1. Create and analyze smaller cases of the problem
  - **fac(1)**: 1 = 1
  - **fac(2)**: 2 &ast; 1 = 2
  - **fac(3)**: 3 &ast; 2 &ast; 1 = 6
  - **fac(4)**: 4 &ast; 3 &ast; 2 &ast; 1 = 24
2. Try to construct larger cases using smaller cases
  - **fac(4)**: 4 &ast; ~~3 &ast; 2 &ast; 1~~ fib(3) = 4 &ast; 6 = 24
  - **fac(3)**: 3 &ast; ~~2 &ast; 1~~ fib(2) = 3 &ast; 2 = 6
  - **fac(2)**: 2 &ast; ~~1~~ fib(1) = 2 * 1 = 2
  - **fac(1)**: 1 = 1
3. Make a conjecture about how smaller cases relate to large cases
  - Looking at the above, from our base case of fac(1) = 1, any subsequent factorial can be found my multiplying `n` by the factorial of `n - 1`
4. Prove your conjecture and translate it into a generally related case
  - fac(1) = 1
  - fac(n) = n * fac(n - 1)
  - **test:**
    - fac(5) == 5 &ast; fac(4) == 5 &ast; 4 &ast; 3 &ast; 2 &ast; 1
    - fac(5) == 5 * 24 == 120 :+1:
5. Use formula to step 4 to find the solution for any case.

### Pros of Recursion

- **Elegance**: Frequently (as in the case of factorial above); the recursive definition of an algorithm in code is very similar to the mathematical definition.
- **Practicality**: Many problems like path finding, tree climing, and sorting are fundementally recursive problems.

### Cons of Recursion

- **Abstract**: Without a foundation in formal mathematics, we may not already have an intuition around recursive definitions.
- **Memory intensive**: Frequently, especially if the language is not optimize to support recurion, a recursive solution will be slower/more memory intensive than a looping definition. See [this article](https://medium.com/@williambdale/recursion-the-pros-and-cons-76d32d75973a) for more consideration of the memory implications of recursion in JavaScript.

### Practice Recursion

In JavaScript, a function is available within its own scope. That sounds abstract but it is simple when demonstrated:

```javascript
// Be careful not to write a function like this that will loop forever:
function loop () {
  loop()
}

loop() // Error: excess Recursion

// We always want to provide a base case to our function that will break the cycle

function doTimes (cb, n) {
  cb(n)
  if (n > 1) doTimes(cb, n - 1)
}

doTimes((count) => console.log(`${count}: Yes, its working! :D`), 5)

```

#### Factorial

Implement the definition of factorial from above in JavaScript

#### Refactor `reverse`

```javascript
function reverse(string) {
  let newStr = "";
  for(let i = string.length-1; i > -1; i--) {
    newStr += string[i];
  }
  return newStr;
}
```

#### Refactor `isPalendrome`

```javascript
function isPalindrome(s) {
  var s = s.toString().toLowerCase();
  let arr = s.split(' ').join('').split('');
  for (let i = 0; i < arr.length / 2; i += 1) {
    if (arr[i] !== arr[arr.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

```

#### [More Exercises](https://javascript.info/task/factorial/)

## Resources

- [Brilliant.org](https://brilliant.org/wiki/recursion-problem-solving/)
- [Eloquent JavaScript](https://eloquentjavascript.net/03_functions.html#h_jxl1p970Fy)
- [Meaning of Recursion](https://www.youtube.com/watch?v=LteNqj4DFD8)

## Contact
Repo created by <a href="https://github.com/Mbboutidem">Mbuotidem</a>

