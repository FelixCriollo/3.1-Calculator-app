// screen of calculator
const screen = document.getElementById("screen-view");

// secondary display
const screenSd = document.getElementById("screen-full");

// pad with numbes {0 to 9}
const numPads = document.querySelectorAll(".btn-num");

// pad with operators {+, -, *, /}
const opertPads = document.querySelectorAll(".btn-op");

// pad with {,}
const btnFloat = document.querySelector(".btn-float");

// pad with result sign
const resultPad = document.querySelector(".btn-result");

// pad to delete
const delPad = document.querySelector(".btn-delete");

// pad to reselt
const resetPad = document.querySelector(".btn-reset");

let onOp = false;
let onFloat = false;

// ====================================================================
const calcResult = (num1 = 0, num2 = 0, op = "+") => {
  let result;
  let division = num1 / num2;
  let multiplication = num1 * num2;
  if (op === "+") {
    result = num1 + num2;
  } 
  if (op === "-") {
    result = num1 - num2;
  } 
  if (op === "x") {
    result = multiplication.toFixed(2);
  } 
  if (op === "/") {
    result = division.toFixed(2);
  } 
  return result;
};

// ====================================================================
numPads.forEach((n) =>
  n.addEventListener("click", () => {
    screen.innerHTML += n.innerHTML;

    btnFloat.addEventListener("click", () => {
      if (!onFloat) {
        screen.innerHTML += ".";
        onFloat = true;
      }
    });
  })
);

opertPads.forEach((o) =>
  o.addEventListener("click", () => {
    if (!onOp) {
      screen.innerHTML += ` ${o.innerHTML} `;
      onOp = true;
      onFloat = false;
    }
  })
);

resultPad.addEventListener("click", () => {
  let screenData = screen.innerHTML;
  screenData = screenData.split(" ");
  console.log(screenData);

  let result = calcResult(
    Number(screenData[0]),
    Number(screenData[2]),
    screenData[1]
  );
  console.log(result);
  screenSd.innerHTML = "";
  screenSd.innerHTML = screen.innerHTML;
  screen.innerHTML = "";
  screen.innerHTML = result;

  onOp = false;
  onFloat = false;
});

resetPad.addEventListener("click", () => {
  screen.innerHTML = "";
  onOp = false;
});

delPad.addEventListener("click", () => {
  let screenDel = [...screen.innerHTML];
  screenDel = screenDel.filter((e) => e !== " ");
  screenDel.pop();
  screen.innerHTML = screenDel.join(" ");
  onOp = false;
  onFloat = false;
});
