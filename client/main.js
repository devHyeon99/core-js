import { attr, getNode, clearContents, insertLast } from './lib/index.js';
console.log(attr);

function phase1() {
  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const clear = getNode('#clear');
  const result = getNode('.result');
  function handleInput() {
    const firstValue = +first.value;
    const secondeValue = +second.value;
    const total = `${firstValue + secondeValue}`;

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();

    clearContents(first);
    clearContents(second);
    clearContents(result);
  }
  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

/* -------------------------------------------------------------------------- */
/*                                   이벤트 위임                                   */
/* -------------------------------------------------------------------------- */
function phase2() {
  const calculator = getNode('.calculator');
  const result = getNode('.result');
  const clear = getNode('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);

  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }
}
