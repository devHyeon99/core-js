/* 
비동기 통신 : 프론트엔드 개발자라면 꼭 할 줄 알아야한다. 이거 못하면 퍼블리셔나 마찬가지이다.
Asynchoronous Javascript And XML : AJAX

*/

import {
  ehh,
  delayP,
  getNode,
  renderUserCard,
  changeColor,
  renderSpinner,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';

const ENDPOINT = 'http://localhost:3000/users';

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);
  // await delayP(2000);

  try {
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        // this._targets[0].remove();
        getNode('.loadingSpinner').remove();
      },
    });
    const userData = await ehh.get(ENDPOINT);
    userData.data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      y: -100,
      opacity: 0,
      stagger: {
        amount: 1,
        from: 'start',
      },
    });
  } catch {
    renderEmptyCard(userCardInner);
  }
}
renderUserList();

function handleDeleteCard(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const index = button.closest('article').dataset.index;

  ehh.delete(`${ENDPOINT}/${index}`).then(() => {
    // 삭제가 된 후 GET 요청 보내고 렌더링하기 업데이트를 위해서.
    clearContents(userCardInner);
    renderUserList();
  });
}
userCardInner.addEventListener('click', handleDeleteCard);

const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

function handleCreate() {
  gsap.to('.pop', { autoAlpha: 1 });
  // createButton.classList.add('open');
}

function handleCancel(e) {
  e.stopPropagation();
  gsap.to('.pop', { autoAlpha: 0 });
  // createButton.classList.remove('open');
}

function handleDone(e) {
  e.preventDefault();

  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  ehh.post(ENDPOINT, { name, email, website }).then(() => {
    // createButton.classList.remove('open');
    gsap.to('.pop', { autoAlpha: 0 });
    clearContents(userCardInner);
    renderUserList();
  });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);
