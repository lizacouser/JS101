/*
Write a function that will take a short line of text,
and write it to the console log within a box.

Examples:
logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

*/

function divideMessage(string, maxSize) {
  let charsPerLine = maxSize - 2;
  let numLines = Math.ceil((string.length) / (charsPerLine));
  let message = '';

  for (let lineNumber = 1; lineNumber <= numLines; lineNumber += 1) {
    let substringStartIndex = (lineNumber - 1) * charsPerLine;
    let substringEndIndex = lineNumber * charsPerLine;

    let lineText = string.slice(substringStartIndex, substringEndIndex);
    if (lineNumber < numLines) {
      message += `| ${lineText} |\n`;
    } else { //final line add extra whitespace
      message += `| ${lineText + " ".repeat(maxSize - (lineText.length + 1))}|`;
    }
  }
  return message;
}

function logInBox(string, maxSize = (string.length + 2)) {
  let horizontalRule = `+${"-".repeat(maxSize)}+`;
  let emptyLine = `|${" ".repeat(maxSize)}|`;
  let messageLines = divideMessage(string, maxSize);

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(messageLines);
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('To boldly go where no one has gone before.', 10);
logInBox('Four' , 4);

/*
//with String.prototype.repeat()!!!
function logInBox2(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}
*/
/*
Problem:
-input, line of text
-output, line of text within box
-implicit:
  -first line has (text.length + 2) '-' and a '+' on either side
  -second line has text.length + 2 ' ' and a | on either side
  -line 2 has '|' on either side, ' ', on either side, and the text
  -line 4 is like line 2
  -line 5 is like ilne 1

Examples:
-see above

Datatypes:
-all strings

Algorithm:
-given a string
-make lines 1 and 5 and save to 'lines'
-make lines 2 and 4 and save to 'space'
-make line 3 and save to 'banner'
-print all lines
*/


