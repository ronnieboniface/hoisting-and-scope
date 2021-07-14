# Scope

  ![](https://media.giphy.com/media/3oGRFn6oi7cg3xKh68/giphy.gif)

  ## What is Scope?
Scope refers to where we are able to access the functions and variables that we have defined.

  ### Scope in the Real World:
  - The scope of your family's deepest, darkest secret is your family.
  - The scope of Rite Aid is the US.
  - The scope of Starbucks is global.
    
 ### Scope in Ruby:
- Local: available only within the scope that it is defined.
- Instance: available only within a specific object and it’s instance methods
- Class: available within the class itself, class methods and instance methods
  
 ### Scope in JavaScript:
- Global:
    - Variables and functions in the global scope are available EVERYWHERE within your code.
- Function Scope:
    - Variables and functions defined inside of a function are only available within that function.
- Block Scope: 
    - Variables and functions defined inside of a code block are only available within that code block.
    
### What Determines Scope in JavaScript?
Two Factors:
- WHERE it is defined
- HOW it is defined

### Scope Chain:
We have access to JavaScript variables and functions in the scope that they are defined AND in any child scope. This is called the scope chain.

REAL WORLD EXAMPLE: 


JAVASCRIPT EXAMPLE:
```
```

- When JavaScript is executed, it will always start to look for a variable or function declaration in its current scope whenever that variable or function is called.

- If it doesn't find that variable or function, it will keeping moving up to the next scope in the chain until it finds that variable or function.

### Lexical Scope:
- JavaScript uses lexical scoping.
- Lexical scope means that the scope that a variable or a function has is determined during COMPILATION, not execution.
- This means that the scope chain is determined based on where a variable or function is defined, not where it is executed. 
    
### Global Scope -- Ahhh, nope! 
- Variables defined without a keyword are globally scoped.
- THIS IS NOT GOOD.
- A global variable is accessible AND mutable within ANY scope.
- Which means that we can unintentially change the value somewhere in our code and that value will change EVERYWHERE. 😬

### var:
- Variables defined with `var` are function scoped.
- If we define a variable with `var`:
    - inside of a function, it will be accessible and mutabled inside of that function and in any child scope.
    - in the inner scope of a function, we have access to it in the outer scope of the function as well. 
- We will NOT have access to a variable declared with `var` outside of the function it is defined in.
- If we redeclare a variable defined with `var` inside of a child scope, it will override the initial value.
- PLEASE don't use it. 

    ![](var.png)

# Hoisting 🙈🙉🙊

  ![](https://media.giphy.com/media/l0G17ZBjOyX7y7wfm/giphy.gif)


## JavaScript: A Love Story in Two Parts:
When JavaScript is executed, it always runs TWICE.
- The first time it runs is the COMPILATION phase:
- All variables and function declarations are hoisted to the top of their scope and stored in memory.
*** Only the DECLARATIONS are hoisted, NOT their assignments ***
- The second time it runs is the EXECUTION phase:
- Functions and variables are executed.

  ## Hoisting & Function Declarations:
    - Functions are always hoisted during the compilation phase and stored in memory.
    - This means that we can invoke functions ABOVE where we defined them.
    - We should still ALWAYS define our variables and functions at the top of their scope.
    *** This only applies to function declarations, NOT function expressions *** 
  
  ## Hoisting and Variables:
    - All variable declarations are hoisted to the top of their scope during compilation and store in memory.
    - The value of those variables are NOT hoisted. 😱
    - We will never be able to accesss a variable's value above it's definition.

  ### How Can We Possibly Prevent These Nasty Errors?
    - ALWAYS DECLARE YOUR VARIABLES AT THE TOP OF THEIR SCOPE.

  ## let/const vs. var
  🔔🔔🔔 🥊 🔔🔔🔔
    
    The way `let`/`const` variables and `var` variables behave during the execution phase is slightly different.
    - Variables declared with `var` will be initialized with a value of `undefined` at the start of the execution phase. (If we try to access the variable above it's definition, it will return undefined.)

    - Variables declared with `let` and `const` are NOT initialized until JavaScript runs the line where they are declared. (If we try to access the variable above it's definition, it will return an error saying that the variable has not been initialized.)

# Bottom Line?
  ## DECLARE ALL OF YOUR VARIABLES AT THE TOP OF THEIR SCOPE.
  ![](https://media.giphy.com/media/l396GDVdFycbmiZDG/giphy.gif)
  ## NEVER USE GLOBAL VARIABLES OR VAR.


Resources:
- [Understanding Closures in JavaScript](https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4)
- [More on Closures](https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda)
- [Understand Scope & Scope Chain](https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53)
- [Hoisting in Modern JS](https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda)
- [MDN Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [MDN Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [MDN Global Scope](https://developer.mozilla.org/en-US/docs/Glossary/Global_scope)
- [MDN Local Scope](https://developer.mozilla.org/en-US/docs/Glossary/Local_scope)
