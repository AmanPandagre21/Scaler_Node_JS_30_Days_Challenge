// Problem 1: File Reader
// Problem Statement: Create a function readFileContent(filePath) that takes the path
// to a file as input and reads its content asynchronously using the fs module.
// The function should print the content to the console.

const fs = require("fs");
const path = require("path");

async function readFileContent(filePath) {
  // Implementation
  const fileName = path.basename(filePath);

  await fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error(
          `Failed to read the file - ${fileName} \nError : \n${err.message} - File not Found`
        );
      } else {
        console.error(
          `Failed to read the file - ${fileName} \n Error : \n${err.message}`
        );
      }
      return;
    }

    console.log(`File Name: ${fileName}\nFile Content: \n${data}`);
  });
}

readFileContent("test-files/file1.txt");
readFileContent("test-files/empty-file.txt");
readFileContent("test-files/nonexistent-file.txt");
