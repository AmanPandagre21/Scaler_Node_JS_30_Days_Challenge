// Problem 5: File Extension Checker
// Problem Statement: Create a function checkFileExtension(filePath, expectedExtension) that takes
// a file path and an expected file extension as input.The function should check if the file has the
// expected extension using the path module and print the result to the console.

const path = require("path");

function checkFileExtension(filePath, expectedExtension) {
  // Implementation

  const extension = path.extname(filePath);

  if (extension !== expectedExtension) {
    console.log(
      `\nFile does not have the expected extension. 
      Expected: ${expectedExtension}, Actual: ${extension}\n`
    );
    return;
  }

  console.log(`\nFile has the expected extension: ${extension}`);
}

checkFileExtension("test-files/file1.txt", ".txt");
checkFileExtension("test-files/image.png", ".jpg");
