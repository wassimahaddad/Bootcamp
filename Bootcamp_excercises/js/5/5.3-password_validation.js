// ------------------ expression -------------
// const checkPwd1 = (pwd) => {
//   if (pwd.length > 7) {
//     return `strong`;
//   } else {
//     return `weak`;
//   }
// };

// Pini's version

const checkPwd1 = (pwd) => {
  (pwd.length > 7 && `strong`) || `weak`;
};

// ------------------ ternary --------------------

const checkPwd2 = (pwd) => (pwd.length > 7 ? "strong" : "weak");

// ------------------ && -------------------------

function checkPwd3(pwd) {
  let msg = "weak";
  pwd.length > 7 && (msg = "strong");
  return msg;
}

// -------------- advanced ------------------------

// function checkStrongPwd(pwd) {
//   let arr = pwd.toString().split("");
//   let c = 0;
//   let upperCase = 0;
//   while (c < pwd.length) {
//     if (arr[c] != arr[c].toLowerCase()) {
//       upperCase = 1;
//     }
//     c = c + 1;
//   }

//   let msg = "weak";
//   if (pwd.length > 7 && upperCase === 1) {
//     msg = "Very strong";
//   } else if (pwd.length > 7) {
//     msg = "strong";
//   }
//   return msg;
// }

// Pini's version 

const checkStrongPwd = (pwd) => {
if (pwd.length>7 && /[A-Z]/.test(pwd)) {
    return 'very strong'
    else if (pwd.length > 7) {
        return 'strong'
    }
    else { return 'weak'}
    }
//  missing the abused version - look it up




}