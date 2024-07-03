import { clearContents, deleteStorage, getNode, getStorage, setStorage } from './lib/index.js';

const textField = getNode('#textField');
const clearButton = getNode('button[data-name="clear"]');

getStorage('text').then((res) => {
  textField.value = res;
});

function handleTextField() {
  const value = this.value;

  setStorage('text', value);
}

function handleClear() {
  clearContents(textField);
  deleteStorage();
}

textField.addEventListener('input', handleTextField);
clearButton.addEventListener('click', handleClear);
