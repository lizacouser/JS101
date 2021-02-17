/* eslint-disable max-lines-per-function */
/*
-input string with program instructions
-output number
-rules
  -for div and mod, all operations are integer operations
  - assume all inputs are valid
  - initialize stack to [], and register to 0
  - print value if command print, otherwise do nothing (no return value)

there's a stack and a register
you can pop a stack value to the register
you can pop a stack value, transform it, and store to register
you can push a register value to the stack
you can't operate on an empty register?

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

data:
-input string
-output number (whatever is in register at end of print call)
-internal, array of commands?
  -switch statement, if it's a word do the command associate
  -if not a word, it's a number

algorithm:
given a string
initialize stack [] and register 0
split into array of strings (delim: " ")
iterate through array
  switch statement taking the element as switch expression
  case command: do command
  default:
    convert to number
    reassign to variable register
*/

function minilang(programString) {
  let stack = [];
  let register = 0;

  let instructions = programString.split(" ");

  instructions.forEach(command => {
    switch (command) {
      case "PUSH":
        stack.push(register);
        break;
      case "ADD":
        register += stack.pop();
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "DIV":
        register = Math.round(register / stack.pop());
        break;
      case "MOD":
        register %= stack.pop();
        break;
      case "POP":
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        register = Number(command);
    }
  });
  return register;
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
// (nothing is printed because the `program` argument has no `PRINT` commands)