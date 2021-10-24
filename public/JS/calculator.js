// screen of calculator
const screen = document.getElementById("screen-view");
// secondary display
const screenSd = document.getElementById("screen-full");
// pad with numbes {0 to 9}
const numPads = document.querySelectorAll(".btn-num");
// pad with operators {+, -, *, /}
const opertPads = document.querySelectorAll(".btn-op");
// pad with result sign
const resultPad = document.querySelector(".btn-result");
// pad to delete
const delPad = document.querySelector(".btn-delete");
// pad to reselt
const resetPad = document.querySelector(".btn-reset");

let arrAllArg = [];
let firstOp = "";
let SecndOp;
let operatr;
let validScndOp = false;
// ====================================================================
const operations = (num1, num2, op) => {
  let divisionOp = num1 / num2;
  if (op === "+") return num1 + num2;
  if (op === "-") return num1 - num2;
  if (op === "*") return num1 * num2;
  if (op === "/") return divisionOp.toFixed(6);
  operatr = "";
};

const printtOps = () => {
  console.log(`First term  : ${firstOp}`);
  console.log(`Second term : ${SecndOp}`);
  console.log(`Operator    : ${operatr}`);
};

// function capFirstOp(n) {
//   firstOp += n.value;
//   screen.innerText = firstOp
// }

// ====================================================================
numPads.forEach((n) =>
  n.addEventListener("click", () => {
    !validScndOp
      ? ((firstOp += n.value), (screen.innerText = firstOp))
      : ((SecndOp += n.value), (screen.innerText = SecndOp));
  })
);
opertPads.forEach((o) =>
  o.addEventListener("click", () => {
    operatr = o.value;
    screen.innerText = operatr;
    validScndOp = true;
  })
);
resultPad.addEventListener("click", () => {
  screen.innerText = operations(Number(firstOp), Number(SecndOp), operatr);
  firstOp = operations(Number(firstOp), Number(SecndOp), operatr);
  printtOps();
  validScndOp = false;
});
resetPad.addEventListener("click", () => {
  firstOp = '';
  SecndOp = '';
  operatr = "";
  screen.innerText = "";
  printtOps();
});
