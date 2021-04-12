const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "add 2 numbers",
  builder: {
    n1: {
      describe: "1st number",
      demandOption: true,
      type: "number",
    },
    n2: {
      describe: "2nd number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.n1 + argv.n2);
  },
});
yargs.command({
  command: "sub",
  describe: "subtract 2 numbers",
  builder: {
    n1: {
      describe: "1st number",
      demandOption: true,
      type: "number",
    },
    n2: {
      describe: "2nd number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.n1 - argv.n2);
  },
});
yargs.command({
  command: "mult",
  describe: "multiply 2 numbers",
  builder: {
    n1: {
      describe: "1st number",
      demandOption: true,
      type: "number",
    },
    n2: {
      describe: "2nd number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.n1 * argv.n2);
  },
});
yargs.command({
  command: "pow",
  describe: "number a to power of number b",
  builder: {
    n1: {
      describe: "1st number",
      demandOption: true,
      type: "number",
    },
    n2: {
      describe: "2nd number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.n1 ** argv.n2);
  },
});

yargs.parse();
