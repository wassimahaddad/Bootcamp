// Create a webpage that has a form (asks the user for its name, age and email address)
// and when the user clicks submit, open a text window that writes all the information and ask for his confirmation.
//If he clicks on the confirm button, tell him “congratulations you successfully sent this form” if he clicks on change information, give him the possibility to change the information and ask again for his confirmation.

//

const signupForm = document.querySelector('[name="signup"]');
const mySubmit = document.querySelector("button");

signupForm.addEventListener("submit", (event) => {
  const info = `name: ${event.currentTarget.name.value} |  age: ${event.currentTarget.age.value} | email: ${event.currentTarget.email.value} `;
  const submitOrEdit = confirm(info);

  if (!submitOrEdit) {
    event.preventDefault();
  } else {
    alert("Congraturlations");
  }
});
