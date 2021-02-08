console.log(
  "---------------------------------- 1 and 2 ------------------------------------ "
);

let teamJohn = [89, 120, 103];
let teamMike = [116, 94, 123];

const average = (a, b, c) => (a + b + c) / 3;

let teamJohnAv = average(teamJohn[0], teamJohn[1], teamJohn[2]);
let teamMikeAv = average(teamMike[0], teamMike[1], teamMike[2]);

if (teamJohnAv > teamMikeAv) {
  console.log(
    "John's Team wins, the average scores are: John's team: " +
      teamJohnAv +
      " Mike's team: " +
      teamMikeAv
  );
} else {
  console.log(
    "Mike's Team wins, the average scores are: John's team: " +
      teamJohnAv +
      " Mike's team: " +
      teamMikeAv
  );
}

console.log(
  "---------------------------------- 3 ------------------------------------ "
);

teamJohn = [130, 120, 103];
teamMike = [116, 94, 123];

teamJohnAv = average(teamJohn[0], teamJohn[1], teamJohn[2]);
teamMikeAv = average(teamMike[0], teamMike[1], teamMike[2]);

if (teamJohnAv > teamMikeAv) {
  console.log(
    "John's Team wins, the average scores are: John's team: " +
      teamJohnAv +
      " Mike's team: " +
      teamMikeAv
  );
} else {
  console.log(
    "Mike's Team wins, the average scores are: John's team: " +
      teamJohnAv +
      " Mike's team: " +
      teamMikeAv
  );
}

console.log(
  "---------------------------------- 4 ------------------------------------ "
);

teamJohn = [130, 120, 103];
teamMike = [116, 94, 123];
let teamMary = [129, 105, 123];

teamJohnAv = average(teamJohn[0], teamJohn[1], teamJohn[2]);
teamMikeAv = average(teamMike[0], teamMike[1], teamMike[2]);
let teamMaryAv = average(teamMary[0], teamMary[1], teamMary[2]);

console.log(teamJohnAv, teamMikeAv, teamMaryAv);

if (teamJohnAv > teamMikeAv && teamJohnAv > teamMaryAv) {
  console.log(
    "John's Team wins, the average scores are: John's team: " +
      teamJohnAv +
      " Mike's team: " +
      teamMikeAv +
      " Mary's team: " +
      teamMaryAv
  );
} else if (teamMaryAv > teamJohnAv && teamMaryAv > teamMikeAv) {
  console.log(
    "Mary's Team wins, the average scores are: John's team: " +
      teamJohnAv +
      " Mike's team: " +
      teamMikeAv +
      " Mary's team: " +
      teamMaryAv
  );
} else {
  console.log(
    "Mike's Team wins, the average scores are: John's team: " +
      teamJohnAv +
      " Mike's team: " +
      teamMikeAv +
      " Mary's team: " +
      teamMaryAv
  );
}

console.log(
  "---------------------------------- 5 ------------------------------------ "
);

teamJohn = [130, 120, 103];
teamMike = [116, 124, 123];
teamMary = [129, 105, 123];

teamJohnAv = average(teamJohn[0], teamJohn[1], teamJohn[2]);
teamMikeAv = average(teamMike[0], teamMike[1], teamMike[2]);
teamMaryAv = average(teamMary[0], teamMary[1], teamMary[2]);

console.log(teamJohnAv, teamMikeAv, teamMaryAv);

if (teamJohnAv > teamMikeAv && teamJohnAv > teamMaryAv) {
  console.log(
    "John's Team wins, the average scores are: John's team: " +
      teamJohnAv +
      " Mike's team: " +
      teamMikeAv +
      " Mary's team: " +
      teamMaryAv
  );
} else if (teamMaryAv > teamJohnAv && teamMaryAv > teamMikeAv) {
  console.log(
    "Mary's Team wins, the average scores are: John's team: " +
      teamJohnAv +
      " Mike's team: " +
      teamMikeAv +
      " Mary's team: " +
      teamMaryAv
  );
} else {
  console.log(
    "Mike's Team wins, the average scores are: John's team: " +
      teamJohnAv +
      " Mike's team: " +
      teamMikeAv +
      " Mary's team: " +
      teamMaryAv
  );
}
