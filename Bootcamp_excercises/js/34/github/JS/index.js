const baseEndpoint = "https://api.github.com/users";
let username = "";
const gitUser = [];
const search = document.querySelector("button");
const inputField = document.querySelector("input");
const searchDB = [];

search.addEventListener("click", () => {
  username = inputField.value;
  clicked = 1;
  console.log(username);
  console.log(username.length);
  document.querySelector(".error-message").textContent = "";
  if (username.length != 0 && !searchDB.includes(username.toLowerCase())) {
    searchDB.push(username.toLowerCase());
    gitUsers(username);
  } else {
    document.querySelector(".error-message").textContent =
      "This username has already been searched";
  }
});
const myObj = {};

async function gitUsers(username) {
  const result = await fetch(`${baseEndpoint}/${username}`);
  const data = await result.json();
  const image = await fetch(data.avatar_url);
  myObj.name = data.name || data.login;
  myObj.repos = data.public_repos;
  myObj.image = image.url;
  myObj.gitPage = data.html_url;
  gitUser.push(myObj);
  if (myObj.name != null) {
    createCard();
  } else {
    document.querySelector(".error-message").textContent =
      "user does not exist, try another";
  }
}

const createCard = () => {
  const cards = document.querySelector(".cards");
  const link = document.createElement("a");
  link.href = myObj.gitPage;
  link.target = "_blank";
  cards.appendChild(link);
  const card = document.createElement("div");
  card.className = "card";
  link.appendChild(card);
  const userImage = document.createElement("img");
  userImage.src = myObj.image;
  card.appendChild(userImage);
  const cardName = document.createElement("p");
  cardName.textContent = `Name: ${myObj.name}`;
  cardName.className = "user-info";
  card.appendChild(cardName);
  const cardRepos = document.createElement("p");
  cardRepos.textContent = `Repos: ${myObj.repos}`;
  cardRepos.className = "user-info";
  card.appendChild(cardRepos);
};
