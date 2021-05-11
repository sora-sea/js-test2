'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {

    const elemFizzNum = document.getElementById('fizz');
    const fizzNum = elemFizzNum.value;
    const elemBuzzNum = document.getElementById('buzz');
    const buzzNum = elemBuzzNum.value;

    const outputArea = document.getElementById('output');
    outputArea.innerHTML = '';
    const ptag = document.createElement('p');
    ptag.textContent = '【出力】';
    outputArea.appendChild(ptag);

    function error() {
      const message = document.createElement('p');
      message.textContent = '整数値を入力してください';
      const div = document.querySelector('div');
      outputArea.appendChild(message);
    }

    if (isNaN(fizzNum) || isNaN(buzzNum)) {
      return error();
    }

    if (fizzNum.match(/^-?[0-9]+\.[0-9]+$/) || buzzNum.match(/^-?[0-9]+\.[0-9]+$/)) {
      return error();
    }

    if ((fizzNum == 0) || (buzzNum == 0)) {
      return error();
    }
    
    for (let i = 1; i < 100; i++) {
      let value = '';
      if (i % fizzNum === 0 && i % buzzNum === 0) {
        value = 'FizzBuzz' + ' ' + i;
      } else if (i % fizzNum === 0) {
        value = 'Fizz' + ' ' + i;
      } else if (i % buzzNum === 0) {
        value = 'Buzz' + ' ' + i;
      } else {
        value = '';
      }
      
      const fizzbuzz = document.createElement('p');
      fizzbuzz.textContent = value;
      const div = document.querySelector('div')
      outputArea.appendChild(fizzbuzz);
    }
  });
}