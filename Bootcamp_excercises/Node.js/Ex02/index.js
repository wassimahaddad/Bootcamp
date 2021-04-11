// --------- 1-----------
const fs = require("fs");
fs.writeFileSync(
  "createdByNode.txt",
  "This file was created witha node.js command. "
);
// --------- 2-----------
fs.copyFileSync("createdByNode.txt", "copiedByNode.txt");
// --------- 3-----------
fs.renameSync("copiedByNode.txt", "renamedByNode.txt");
// --------- 4-----------
const filenames = fs.readdirSync(__dirname);
console.log(filenames);
// --------- 5-----------
fs.appendFileSync("createdByNode.txt", ` text added by "appendFile" method`);
