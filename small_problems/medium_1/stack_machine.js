/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/*
Stack Machine Interpretation

Problem:
-Stack = LIFO, push pop
-stack-and-register
  -takes val at top of stack
  -operates on val using 'register' value
  -updates register value to result of operation
  -[3, 6, 4] stack & 7 register => [3, 6] stack & 28 register

-write a function that implements a minaiature stack-and-register language
  -n : Place a value, n, in the register. Do not modify the stack.
  -PUSH : Push the register value onto the stack. Leave the value in the register.
  -ADD : Pop a value from the stack and add it to the register value, storing the result .
  -SUB : Pop a value from the stack and subtract it from the register value, storing the result .
  -MULT : Pop a value from the stack and multiply it by the register value, storing the result .
  -DIV : Pop a value from the stack and divide it into the register value, storing the integer result .
  -MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division .
  -POP : Remove the topmost item from the stack and place it in the register.
  -PRINT : Print the register value.

rules
  -integer operations
  -input is string with language function
  -assume everything works
  -initialize the stack and register to the values [] and 0 respectively

Examples
minilang('PRINT');
// 0
// register 0, no changes

minilang('5 PUSH 3 MULT PRINT');
// 15
// five in register
// [5] in stack as well
// 3 in register
// 3 * 5 in register
// print 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8
// five in register
// print 5
// [5] in stack
// 3 in register
// print register (3)
// pop 5 from stack and add to 3, save 8 to register
// print 8

minilang('5 PUSH POP PRINT');
// 5
// 5 reg
// [5]
// []
// print 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

Data:
-input string
-output printing ints
-internal
  -array of commands (if number converted to number)
  -object containing what each function does, look up by key word?
  OR
  -switch case

Algorithm:
given a series of commands in a string
split the string into words by ' '
initalize variable register to 0
initialize variable stack to []
iterate through words
if the word is a number, reassign register to number
make a switch  statement
if the word is PUSH, push register onto stack
if the word is ADD/SUB/MULT/DIV/MOD, reassign register to pop + register 
if the word is POP, pop and reassign register to popped val
if the word is Print, console.log
*/
function minilang(commandString) {
  let register = 0;
  let stack = [];

  let commands = commandString.split(' ');
  for (let index = 0; index < commands.length; index += 1) {

    let word = commands[index];

    let commandsUsingPop = ['ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'];
    if (commandsUsingPop.includes(word) && isEmpty(stack)) {
      console.log('Error: Command called on empty stack');
      return;
    }

    switch (word) {
      case 'ADD' :
        register += stack.pop();
        break;
      case 'SUB' :
        register -= stack.pop();
        break;
      case 'MULT' :
        register *= stack.pop();
        break;
      case 'DIV' :
        register = Math.floor(register / stack.pop());
        break;
      case 'MOD' :
        register %= stack.pop();
        break;
      case 'POP' :
        register = stack.pop();
        break;
      case 'PRINT' :
        console.log(register);
        break;
      case 'PUSH' :
        stack.push(register);
        break;
      default:
        if (word && !Number.isNaN(Number(word))) {
          register = Number(word);
        } else {
          console.log('Error: Invalid Token');
          return;
        }
    }
  }
}

function isEmpty(stack) {
  return stack.length === 0;
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed

minilang('POP');

minilang('PULL');