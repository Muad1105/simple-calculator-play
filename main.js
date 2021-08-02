// calculator buttons object array

const buttons = [
  { name: 'add', symbol: '+', operator: '+', type: 'operator' },
  { name: 'subtract', symbol: '-', operator: '-', type: 'operator' },
  { name: 'divide', symbol: '&#xf7;', operator: '/', type: 'operator' },
  { name: 'multiply', symbol: 'x', operator: '*', type: 'operator' },
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
  display[i].style.background = 'purple';
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
calculatorKeys.style.background = 'rgba(104,204,22,.5)';
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
  // const operator = buttons[`${j}`].operator;
  // console.log(operator);
  // if (/'+*-\/'/.test(operator)) console.log('hello', operator);
  if (
    buttons[`${i}`].operator == '*' ||
    buttons[`${i}`].operator == '-' ||
    buttons[`${i}`].operator == '+' ||
    buttons[`${i}`].operator == '/'
  ) {
    btn.setAttribute('class', 'operator');
  } else if (buttons[`${i}`].operator == 'ans') {
    btn.setAttribute('class', 'ans');
  } else if (buttons[`${i}`].operator == 'clr') {
    btn.setAttribute('class', 'clr');
  } else if (buttons[`${i}`].operator == 'sqrt') {
    btn.setAttribute('class', 'sqrt');
  } else if (buttons[`${i}`].operator == '=') {
    btn.setAttribute('class', 'equal');
  } else {
    btn.setAttribute('class', 'number');
  }
  if (buttons[`${i}`].type !== 'number') {
    btn.style.background = 'rgba(251,21,21,0.3)';
    btn.style.boxShadow = '';
  } else {
    btn.style.background = 'rgba(243,243,243,0.3)';
  }
  btn.innerHTML = buttons[`${i}`].symbol;
  btn.setAttribute('id', buttons[`${i}`].name);
  // append to row
  calculatorKeys.appendChild(btn);
}
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

let num,
  numbers = 0,
  operator = [],
  calculation = [],
  valueOnScreen = '',
  num1 = '',
  num2 = '',
  opr = '',
  result = '',
  val = false;
let saved;
container.addEventListener('click', function (e) {
  // console.log(e.target);
  buttons.forEach(el => {
    if (e.target.classList.contains('number')) {
      val = true;
      if (opr == '') {
        // console.log(e.target.innerHTML);
        input = e.target.innerHTML;
      } else {
        console.log('2nd num');
        opr = display[1].innerHTML;
        display[0].innerHTML += ' ';
        display[0].innerHTML += opr;
        display[1].innerHTML = '';
        input = e.target.innerHTML;
      }
    } else if (e.target.classList.contains('operator')) {
      val = false;
      console.log('opr', display[0], num1);
      if (num1 == '') {
        num1 = display[1].innerHTML;
        display[0].innerHTML += num1;
        display[1].innerHTML = '';
      }
      console.log(valueOnScreen.charAt(valueOnScreen.length - 1));

      if (/[-+*/]/g.test('-')) {
        console.log('enter');
      }
      if (e.target.id == 'add') {
        // add();
        console.log('+');
        input = '+';
      } else if (e.target.id == 'subtract') {
        input = '-';
      } else if (e.target.id == 'multiply') {
        input = '*';
      } else if (e.target.id == 'divide') {
        input = '&#xf7';
      }
      if (num && num2 == '') {
        num2 = display[1].innerHTML;
        console.log(num1, opr, num2);
        result = calculate();
      }
    } else if (e.target.classList.contains('ans')) {
      saved = display[1].innerHTML;
    } else if (e.target.classList.contains('clr')) {
    } else if (e.target.classList.contains('sqrt')) {
    }
  });
  display[1].innerHTML += input;

  valueOnScreen = display[1].innerHTML;
});

// display[0].innerHTML = '11';
