const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

//1. Loop over the array with the forEach method and dynamically create an ordered list of the first and last names from the objects.
const myOl = document.createElement("ol");
document.body.appendChild(myOl);
users.forEach((user) => {
  const myLi = document.createElement("li");
  myLi.textContent = `${user.firstName} ${user.lastName}`;
  myOl.appendChild(myLi);
});

// 2. Remove the bullet points of the ordered list with javaScript

const myLis = document.querySelectorAll("li");
myLis.forEach((li) => (li.style.listStyle = "none"));

// 3.Create a custom data attribute called “data-id” and attach the id value to each li.

myLis.forEach((li, index) => (li.dataset.id = users[index].id));
console.log(myOl);
