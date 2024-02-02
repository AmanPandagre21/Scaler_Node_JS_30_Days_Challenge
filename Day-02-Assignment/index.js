// Problem 2: File Writer
// Problem Statement: Create a function writeToFile(filePath, content) that takes
// the path to a file and user input content as input.The function should write the
// content to the specified file using the fs module.

const fs = require("fs");
const path = require("path");

function writeToFile(filePath, content) {
  // Implementation
  const fileName = path.basename(filePath);
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error(
          `\nFailed to Write the file - ${fileName} \nError : \n${err.message} - File not Found`
        );
      } else {
        `\nFailed to read the file - ${fileName} \n\n Error : ${err.message}`;
      }
      return;
    }

    console.log(`\nData written to File ${fileName}\n`);
  });
}

//  test Cases
writeToFile("test-files/output1.txt", "Sample content.");
writeToFile(
  "test-files/nonexistent-folder/output.txt",
  "Content in a non-existent folder."
);
