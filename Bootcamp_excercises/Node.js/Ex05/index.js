const yargs = require("yargs");
const fs = require("fs");
const users = require("./users.js");

yargs.command({
  command: "create",
  describe: "Create a user",
  builder: {
    id: {
      describe: "User ID",
      demandOption: true,
      type: "number",
    },
    name: {
      describe: "Username",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email address",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    users.createUser(argv.id, argv.name, argv.email);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove user by id",
  bulider: {
    id: {
      describe: "User ID",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    users.removeUser(argv.id);
  },
});
yargs.command({
  command: "read",
  describe: "Read user data by id",
  bulider: {
    id: {
      describe: "User ID",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    users.readUser(argv.id);
  },
});
yargs.command({
  command: "update",
  describe: "update user data",
  bulider: {
    id: {
      describe: "User ID",
      demandOption: true,
      type: "number",
    },
    name: {
      describe: "User ID",
      type: "string",
    },
    email: {
      describe: "User ID",
      type: "string",
    },
  },
  handler: function (argv) {
    users.updateUser(argv.id, argv.name, argv.email);
  },
});

yargs.parse();
