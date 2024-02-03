// Problem 3: Execute Command
// Problem Statement: Create a function executeCommand(command) that takes a
// shell command as input and executes it using the child_process module.
// The function should print the output of the command to the console.

const cp = require("child_process");

function executeCommand(command) {
  // Implementation
  cp.exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }

    console.log(`stdout: \n${stdout}`);
  });
}

executeCommand("dir /a /b");
executeCommand('echo "Hello, Node.js!"');
