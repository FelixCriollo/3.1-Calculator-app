const screen = document.querySelector('#screen-view');
const btnsNum = document.querySelectorAll('.btn-num');
const btnDelete = document.querySelector('.btn-delete');
const btnReset = document.querySelector('.btn-reset');
const btnsOperators = document.querySelectorAll('.btn-op');
const btnResult = document.querySelector('.btn-result')
let firstTerm;
let operator = '';
let secondTerm;
let controlSeconTerm = true;
// FUNCTIONS
const ResetOps = () => {
  firstTerm = 0
  secondTerm = 0
  operator = ''
  screen.value = ''
}
const sum = () => {
  screen.value = ''
  screen.value = firstTerm + secondTerm
  return firstTerm + secondTerm
}
const subtraction = () => {
  screen.value = ''
  screen.value = firstTerm - secondTerm;
  return firstTerm - secondTerm
}
const multiply = () => {
  screen.value = ''
  screen.value = firstTerm * secondTerm;
  return firstTerm * secondTerm
}
const division = () => {
  let res = firstTerm / secondTerm
  screen.value = ''
  screen.value = res.toFixed(4);
  return firstTerm / secondTerm
}
const switchOps = () => {
  switch (operator) {
    case '+':
      firstTerm = sum();
      break;
    case '-':
      firstTerm = subtraction();
      break;
    case '*':
      firstTerm = multiply();
      break;
    case '/':
      firstTerm = division();
      break;
    default:
      break;
  }
}


// EVENT LISTENER
btnsNum.forEach(b => b.addEventListener('click', () => {
  if (controlSeconTerm === true) {
    screen.value += b.value
  } else {
    operator += screen.value
    screen.value = '';
    screen.value += b.value
  }
}))
btnsOperators.forEach(b => b.addEventListener('click', () => {
  firstTerm = Number(screen.value)
  screen.value = '';
  screen.value += b.value
  controlSeconTerm = false;
}))
btnResult.addEventListener('click', () => {
  secondTerm = Number(screen.value)
  screen.value = '';
  switchOps();
  operator = ''
  secondTerm = ''
})
btnReset.addEventListener('click', ResetOps)