// ---------------- 1 ------------------------
function isString(str, callback) {
  if (typeof str == "string") {
    callback(str);
  }
}

function strLog(s) {
  console.log(s);
}

isString("one", strLog);

// ---------------- 2 ------------------------

function firstWordUpperCase(str, callback) {
  const arr = str.split(" ");
  arr[0] = arr[0].toUpperCase();
  str = arr.toString();
  str = callback(str);
  return str;
}

function dash(str) {
  for (let i = 0; i < str.length; i++) {
    str = str.replace(",", "-");
  }
  return str;
}

firstWordUpperCase("we will rock you", dash);

// ---------------- 3 ------------------------

firstWordUpperCase(str, star);

function star(str) {
  for (let i = 0; i < str.length; i++) {
    str = str.replace(",", "*");
  }
  return str;
}

firstWordUpperCase("we will rock you", star);

// ---------------- 4 ------------------------

function aPowerB(a, b) {
  return a ** b;
}

function selfPower(a, callback) {
  callback(a, a);
}

selfPower(a, aPowerB);
