const fs = require("fs");
const chalk = require("chalk");

const createUser = (id, name, email) => {
  const users = loadUsers();
  const duplicateUsers = users.filter((user) => user.id === id);
  if (duplicateUsers.length === 0) {
    users.push({ id, name, email });
    saveUsers(users);
    console.log(chalk.green.inverse("User created"));
  } else {
    console.log(chalk.red.inverse("ID already exists"));
  }
};

const removeUser = (id) => {
  const users = loadUsers();
  const filtered = users.filter((user) => user.id !== id);
  if (users.length > filtered.length) {
    saveUsers(filtered);
    console.log(chalk.green.inverse(`User with ID ${id} was removed`));
  } else {
    console.log(chalk.red.inverse("User not found"));
  }
};

const readUser = (id) => {
  const users = loadUsers();
  const filteredUser = users.filter((user) => user.id === id);

  if (filteredUser.length === 1) {
    console.log(
      chalk.green.inverse(
        `User ID: ${filteredUser[0].id}, username: ${filteredUser[0].name}, email: ${filteredUser[0].email}`
      )
    );
  } else {
    console.log(chalk.red.inverse("User not found"));
  }
};

const updateUser = (id, name, email) => {
  const users = loadUsers();
  const filteredUser = users.filter((user) => user.id === id);
  if (filteredUser.length === 1) {
    name ? (filteredUser[0].name = name) : null;
    email ? (filteredUser[0].email = email) : null;
    const fileteredData = users.filter((user) => user.id !== id);
    fileteredData.push(filteredUser[0]);
    saveUsers(fileteredData);
    console.log(chalk.green.inverse("user updated"));
  } else {
    console.log(chalk.red.inverse("user not found"));
  }
};

const loadUsers = () => {
  try {
    return JSON.parse(fs.readFileSync("users.json").toString());
  } catch (e) {
    return [];
  }
};

const saveUsers = (users) => {
  fs.writeFileSync("users.json", JSON.stringify(users));
};
module.exports = {
  createUser,
  removeUser,
  readUser,
  updateUser,
};
