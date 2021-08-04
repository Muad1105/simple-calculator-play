// calculator buttons object array

const buttons = [
  { name: 'add', symbol: '+', operator: '+', type: 'operator' },
  { name: 'subtract', symbol: '-', operator: '-', type: 'operator' },
  { name: 'divide', symbol: '&#xf7;', operator: '/', type: 'operator' },
  { name: 'multiply', symbol: '&#x2715', operator: '*', type: 'operator' },
  { name: 'seven', symbol: '7', operator: '7', type: 'number' },
  { name: 'eight', symbol: '8', operator: '8', type: 'number' },
  { name: 'nine', symbol: '9', operator: '9', type: 'number' },
  { name: 'answer', symbol: 'ANS', operator: 'ans', type: 'ans' },
  { name: 'four', symbol: '4', operator: '4', type: 'number' },
  { name: 'five', symbol: '5', operator: '5', type: 'number' },
  { name: 'six', symbol: '6', operator: '6', type: 'number' },
  { name: 'clear', symbol: 'C', operator: 'clr', type: 'clr' },
  { name: 'one', symbol: '1', operator: '1', type: 'number' },
  { name: 'two', symbol: '2', operator: '2', type: 'number' },
  { name: 'three', symbol: '3', operator: '3', type: 'number' },
  { name: 'sqrt', symbol: '&#x221A;', operator: 'sqrt', type: 'sqrt' },
  { name: 'point', symbol: '.', operator: '.', type: 'number' },
  { name: 'zero', symbol: '0', operator: '0', type: 'number' },
  { name: 'equal', symbol: '=', operator: '=', type: 'equal' },
  //   { name: 'equal', symbol: '=', operator: '=' },
];

// console.log(buttons[5].name);

const body = document.body;
body.setAttribute('::after', 0);
body.setAttribute('::before', 0);
body.style.padding = '0';
body.style.margin = '0';

// calculator container
const container = document.createElement('div');
container.classList.add('container');
container.style.width = '550px';
container.style.height = '550px';
container.style.margin = 'auto';
container.style.padding = '20px';
container.style.background = 'skyblue';
container.style.borderRadius = '0 0 10% 10%';

// append calculator container to body
document.body.append(container);

// calculator

const calculator = document.createElement('div');
calculator.style.width = '90%';
calculator.style.height = '90%';
calculator.style.margin = '20px';
calculator.style.background = '#fff';
calculator.style.overflow = 'hidden';
calculator.style.border = '1px solid red';
calculator.style.borderRadius = '0 0 10% 10%';

// append calculator to contaier
container.appendChild(calculator);

// screen
const screen = document.createElement('div');
screen.style.background = 'black';
screen.style.width = '100%';
screen.style.height = '28%';
screen.style.color = '#fff';
// screen.style.padding = '40px 5px 0 5px';
calculator.appendChild(screen);

// two screens in the main screen
let display = [];
for (let i = 0; i < 2; i++) {
  display[i] = document.createElement('div');
  display[i].style.width = '100%';
  display[i].style.height = '50%';
  display[i].style.fontSize = '55px';
  display[i].style.textAlign = 'right';
  display[i].style.padding = '0 5px 0 0';
  //   display[i].style.justifyContent = 'center';
  // display[i].style.background = 'purple';
  screen.appendChild(display[i]);
}

// display[0].innerHTML = '222';
display[0].style.fontSize = '19px';
display[0].style.paddingTop = '25px';

// display[1].innerHTML = '222';
display[1].style.fontSize = '40px';
// display[1].style.paddingTop = 'px';

// calculatorKeys
const calculatorKeys = document.createElement('div');
calculatorKeys.style.width = '100%';
calculatorKeys.style.height = '72%';
calculatorKeys.style.display = 'flex';
calculatorKeys.style.flexWrap = 'wrap';
calculatorKeys.style.textAlign = 'center';
calculatorKeys.style.justifyContent = 'space-between';
calculatorKeys.style.background = 'rgba(230,230,230,1)';
calculatorKeys.style.alignItems = 'center';
calculatorKeys.classList.add('keysRow');
calculator.appendChild(calculatorKeys);

// keysRow.style.

// calculator keys row
// for (let i = 0; i < 5; i++) {
// const row = document.createElement('div');
// row.style.width = '100%';
// row.style.height = '20%';
// row.style.display = 'flex';

//   row.style.borderBottom = '1px solid black';
// calculatorKeys.appendChild(row);

//   insert columns of each row
for (let i = 0; i < 19; i++) {
  // if ((i + 1) * 4 <= i) break;
  // i = 0 ? j : (j += 4);
  const btn = document.createElement('div');
  btn.style.margin = '5px 10px';
  btn.style.width = '20%';
  btn.style.height = '17%';
  btn.style.color = 'rgba(0,0,0,.91)';
  btn.style.boxShadow =
    'inset 10px 10px 15px rgba(199, 199, 199, 0.9), inset -10px -10px 15px rgba(199, 199, 199, 0.8)';
  btn.style.border = '1px solid rgba(0, 0, 0,.19)';
  btn.style.display = 'flex';
  // btn.style.flexDirection = 'row';
  btn.style.borderRadius = '50%';

  btn.style.float = 'left';
  btn.style.alignItems = 'center';
  btn.style.cursor = 'pointer';
  btn.style.fontWeight = 'bold';
  btn.style.fontSize = '28px';

  btn.style.justifyContent = 'center';

  // btn class
  btn.setAttribute('class', 'btn');
  // const operator = buttons[`${j}`].operator;
  // console.log(operator);
  // if (/'+*-\/'/.test(operator)) console.log('hello', operator);
  if (
    buttons[`${i}`].operator == '*' ||
    buttons[`${i}`].operator == '-' ||
    buttons[`${i}`].operator == '+' ||
    buttons[`${i}`].operator == '/'
  ) {
    btn.classList.add('operator');
  } else if (buttons[`${i}`].operator == 'ans') {
    btn.classList.add('ans');
  } else if (buttons[`${i}`].operator == 'clr') {
    btn.classList.add('clr');
  } else if (buttons[`${i}`].operator == 'sqrt') {
    btn.classList.add('sqrt');
  } else if (buttons[`${i}`].operator == '=') {
    btn.classList.add('equal');
  } else {
    btn.classList.add('number');
  }
  if (buttons[`${i}`].type !== 'number') {
    btn.style.background = 'rgba(115,21,191,0.3)';
    // btn.style.boxShadow = '';
  } else {
    btn.style.background = 'rgba(255,255,255,.5)';
  }
  // adding id with button names
  btn.innerHTML = buttons[`${i}`].symbol;
  btn.setAttribute('id', buttons[`${i}`].name);
  // append to row
  calculatorKeys.appendChild(btn);
}

let btns = document.querySelectorAll('.btn');

// get btn class to add hover and actice
// console.log(btns[1]);
btns.forEach(e => {
  e.addEventListener('click', () => {
    console.log(e);
    e.style.transform = 'translateY(3px)';
    e.style.background = 'rgba(187, 187, 187, 1)';
    setTimeout(function btnActiveRecover() {
      console.log('enter');
      if (e.classList.contains('number')) {
        e.style.transform = 'translateY(0px)';
        e.style.background = 'rgba(255,255,255,.5)';
      } else if (e.classList.contains('equal')) {
        e.style.transform = 'translateY(0px)';
        e.style.background = 'rgba(16,66,166,.4)';
      } else {
        e.style.transform = 'translateY(0px)';
        e.style.background = 'rgba(16,66,166,.4)';
      }
    }, 150);
  });
});

// }
// adding id to buttons

// console.log(calculatorKeys.innerHTML);

// row last child border radius
// find!!!

// equal ranging two columns
calculatorKeys.lastChild.style.width = '44.3%';
calculatorKeys.lastChild.style.fontSize = '33px';
calculatorKeys.lastChild.style.background = 'rgba(16,66,166,.4)';
// functionality logic

function calculate(num1, num2, opr) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (opr == 'add') {
    return num1 + num2;
  }
  if (opr == 'subtract') {
    return num1 - num2;
  }
  if (opr == 'multiply') {
    return num1 * num2;
  }
  if (opr == 'divide') {
    return num1 / num2;
  }
}

let num,
  numbers = 0,
  operator = [],
  calculation = [],
  valueOnScreen = '',
  num1 = '',
  num2 = '',
  opr,
  result = '',
  input,
  val = false,
  displayOpr;
let saved;
container.addEventListener('click', function (e) {
  // console.log(e.target);
  // buttons.forEach(el => {
  if (e.target.classList.contains('number')) {
    // getting the first number when no values are present
    if (!num1 && !num2 && !opr) {
      display[1].innerHTML += e.target.innerText;
      // num1 = '';
    }
    // getting the second number when num1 and opr present
    else if (num1 && opr && !num2) {
      // value on the display
      let str = display[1].innerHTML;
      console.log(str[str.length - 1]);
      // checking if the last value is not a num
      if (!/[0-9]/.test(str[str.length - 1])) {
        // checking if changing the operand
        let newOpr = e.target.innerText;
        if (/[+][-][*]['&#xf7']/.test(str[str.length - 1])) {
          display[1].innerHTML = newOpr;
        }
        console.log('true');
        display[0].innerHTML += display[1].innerHTML;
        display[1].innerHTML = '';
        num2 = e.target.innerText;
        display[1].innerHTML = num2;
      } else {
        console.log('two');
        num2 += e.target.innerText;
        display[1].innerHTML += e.target.innerText;
      } // display[1].innerHTML;
    } else if (num2) {
      num2 += e.target.innerText;
      display[1].innerHTML += e.target.innerText;
    }
  } else if (e.target.classList.contains('operator')) {
    if (!num1 && !num2 && !opr) {
      if (display[1].innerHTML) {
        num1 = display[1].innerHTML;
        display[0].innerHTML += num1;
        display[1].innerHTML = '';
      }
    }

    // save the first num
    // if (!num1 && !num2 && !opr) {
    // num1 = display[1].innerHTML;
    // display[0].innerHTML += num1;
    // display[1].innerHTML = '';
    // }

    if (num1 && num2 && opr) {
      console.log(num1, num2, opr);
      num2 = display[1].innerHTML;
      display[1].innerHTML = '';
      console.log('ddd');
      console.log(num1, num2, opr);
      result = calculate(num1, num2, opr);
      display[0].innerHTML = result;
      num1 = result;
      num2 = '';
      console.log(result);
    }
    // entered operator

    if (e.target.id == 'add') {
      // add();
      opr = e.target.id;
      input = '+';
      display[1].innerHTML = input;
    } else if (e.target.id == 'subtract') {
      opr = e.target.id;
      input = '-';
      display[1].innerHTML = input;
    } else if (e.target.id == 'multiply') {
      opr = e.target.id;
      input = '*';
      display[1].innerHTML = input;
    } else if (e.target.id == 'divide') {
      opr = e.target.id;
      input = '&#xf7';
      display[1].innerHTML = input;
    }
    // display[1].innerHTML += input;
  } else if (e.target.classList.contains('ans')) {
    if (!saved) {
      if (!display[0].innerHTML) {
        saved = display[1].innerHTML;
      } else {
        saved = display[0].innerHTML;
      }
    } else {
      display[1].innerHTML = saved;
    }
    num1 = saved;
    display[0].innerHTML = num1;
    display[1].innerHTML = '';
  } else if (e.target.classList.contains('clr')) {
    let str = display[1].innerHTML;
    console.log('clr', str.length);
    let newStr = str.slice(0, str.length - 1);
    display[1].innerHTML = newStr;
    if (!display[1].innerHTML) {
      display[1].innerHTML = '';
    }
  } else if (e.target.classList.contains('sqrt')) {
    let num = display[1].innerHTML;
    let sqrt = Math.sqrt(num).toFixed(4);
    display[1].innerHTML = sqrt;
  } else if (e.target.classList.contains('equal')) {
    if (!num1 && !num2 && !opr) {
      if (!display[0].innerHTML) {
        let curDisp1 = display[1].innerHTML;
        display[0].innerHTML = curDisp1;
        display[1].innerHTML = '';
        num1 = curDisp1;
      }
      // let curDisp0 = display[0].innerHTML;
      // display[1].innerHTML = curDisp1;
    }
    if (num) console.log(num1, num2, opr);
    console.log('ddd');
    console.log(num1, num2, opr);
    if (num1 && num2 && opr) {
      num2 = display[1].innerHTML;
      display[1].innerHTML = '';
      result = calculate(num1, num2, opr);
      display[0].innerHTML = result;
      num1 = result;
      num2 = '';
    }
  } else input = '';
  // });

  // valueOnScreen = display[1].innerHTML;
});

// display[0].innerHTML = '11';
