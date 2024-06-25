import {
  diceAnimation,
  getNodes,
  getNode,
  attr,
  insertLast,
  endScroll,
  clearContents,
} from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

let count = 0;
let total = 0;

function createItem(value) {
  const template = /* html */ `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${(total += value)}</td>
  </tr>
  `;

  return template;
}

function renderRecordItem() {
  const diceValue = Number(attr(getNode('#cube'), 'dice'));
  const template = createItem(diceValue);

  insertLast('.recordList tbody', template);
  endScroll(recordListWrapper);
}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
  count = 0;
  total = 0;
  clearContents('tbody');
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
