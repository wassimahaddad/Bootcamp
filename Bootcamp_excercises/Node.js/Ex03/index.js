// 1) What is the difference between import and require?
// import is supported under ES6, ES6 is not supported yet in Node.js so we use require

// 2) How can you enable using the import syntax using node js
// You need to either:
// Save the file with .mjs extension, or
// Add { "type": "module" } in the nearest package.json.

// 3) Give 2 node.js environment variables that are not available when using the import syntax.
// __filename, __dirname
// 4) Create 3 functions using the export/import syntax.
// see funcs.js
// 5) Import the file system module using the import syntax.

import { func1, func2, func3 } from "./funcs.js";

func1();
func2();
func3();
