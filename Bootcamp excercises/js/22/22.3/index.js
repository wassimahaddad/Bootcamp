// User guessed it right
//
// •Display a message that the user was right.
//
// •The message should be in the color green.
//
// •Show the right letter to the user.
//
// •Display a message if he wants to play again with a confirm button.
//
// •If the user wants to play again reset the DOM as it was in the beginning

// variables
const letters = "abcdefghijklmnopqrstuvwxyz";
const letter = letters[Math.floor(Math.random() * letters.length)];
const container = document.querySelector(".container");
const log = document.querySelector("body");
myLetter = document.querySelector("input");
const interactMsg = document.querySelector(".interaction");
const guessedMsg = document.querySelector(".guessed");
const logKey = document.querySelector(".key-log");
const failKeyArr = [];
const regExChar = /[a-zA-z]/g;
// helpful functions
const reload = () => self.location.reload();

// Event Listener
document.addEventListener("keypress", playGame);
const playGame = (event) => {
  if (!regExChar.test(event.key)) {
    console.log("wrong input");
    interactMsg.textContent = "Wrong input";
    interactMsg.style.color = "red";
  } else {
    if (event.key.toLowerCase() === letter) {
      console.log("success");
      myLetter.value = letter;
      interactMsg.textContent = "Right Letter!";
      interactMsg.style.color = "green";
      guessedMsg.textContent = "Would you like to play again?";
      logKey.remove();
      const againBtn = document.createElement("button");
      againBtn.textContent = "Yes!";
      container.appendChild(againBtn);
      againBtn.addEventListener("click", reload);
    } else {
      console.log("fail");
      interactMsg.style.color = "red";
      if (!failKeyArr.includes(event.key)) {
        interactMsg.textContent = "Wrong letter";
        failKeyArr.push(event.key);
        logKey.textContent = failKeyArr.join(",");
      } else {
        interactMsg.textContent = "Letter already tried ";
      }
    }
  }
};
