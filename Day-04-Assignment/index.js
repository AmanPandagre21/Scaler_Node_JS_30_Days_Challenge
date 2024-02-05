// Problem 4: Resolve Path
// Problem Statement: Create a function resolvePath(relativePath) that takes a relative
// path as input and resolves it to an absolute path using the path module.
// The function should print the resolved path to the console.

const path = require("path");

function resolvePath(relativePath) {
  // Implementation
  const absolutePath = path.resolve(`\n ${relativePath} \n`);

  console.log(absolutePath);
}

resolvePath("../project/folder/file.txt");
resolvePath("nonexistent-folder/file.txt");
