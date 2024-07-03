class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <button type="button">btn</button>
    `;
    this.button = this.shadowRoot.querySelector('button');
  }

  connectedCallback() {
    this.button.addEventListener('click', () => this.clickMe());
  }

  clickMe() {
    console.log(this);
  }
}

customElements.define('user-card', UserCard);

// console.log( document.querySelector('user-card').shadowRoot.querySelector('button') );

// function sum(){
//   console.log(this);
// }

// sum() // undefined
// sum.call({}) // {} => 실행
// sum.apply({}) // {} => 실행
// const n = sum.bind({}) // {} => 실행 x

// n()

/* -------------------------------------------------------------------------- */
/*                             lifeCycle (생명주기)                            */
/* -------------------------------------------------------------------------- */

// class MyElement extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     console.log('탄생');
//   }

//   disconnectedCallback() {
//     console.log('죽음');
//   }

//   static get observedAttributes() {
//     return [
//       /* 변경 사항을 모니터링할 속성 이름의 배열 */
//     ];
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//     // 위에 나열된 속성 중 하나가 수정될 때 호출됩니다. 다시 재랜더링 할때 필요 리액트랑 비슷
//   }
// }

// customElements.define('c-element', MyElement);

// const elem = document.createElement('c-element');

// const app = document.getElementById('app');

// app.appendChild(elem);

/* -------------------------------------------------------------------------- */
/*                                  Button 예제                                 */
/* -------------------------------------------------------------------------- */

// class Button extends HTMLElement {
//   constructor() {
//     super();

//     this.button = document.querySelector('button');
//   }

//   connectedCallback() {
//     this._render();
//   }

//   disconnectedCallback() {}

//   static get observedAttributes() {
//     return ['id'];
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//     console.log(name, oldValue, newValue);

//     if (oldValue != newValue) {
//       this._render();
//     }
//   }

//   _render() {
//     this.button.textContent = this.id;
//   }
// }

// customElements.define('c-button', Button);

// const c = document.querySelector('c-button');

// let count = 0;

// c.addEventListener('click', () => {
//   c.setAttribute('id', ++count);
// });

/* -------------------------------------------------------------------------- */
/*                        customized builtin - element                       */
/* -------------------------------------------------------------------------- */

// class Button extends HTMLButtonElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {}

//   disconnectedCallback() {}
// }

// customElements.define('c-button', Button, { extends: 'button' });

/* -------------------------------------------------------------------------- */
/*                                 Shadow Dom                                 */
/* -------------------------------------------------------------------------- */

// class Button extends HTMLElement {
//   constructor() {
//     super();

//     this.attachShadow({ mode: 'open' });

//     this.shadowRoot.innerHTML = `
//       <button>hello</button>
//     `;

//     // c-button의 쉐도우 돔을 열어라. 그리고 그 안에 원하는 태그를 넣는다.
//   }

//   connectedCallback() {}

//   disconnectedCallback() {}
// }

// customElements.define('c-button', Button);

/* -------------------------------------------------------------------------- */
/*                                  template                                  */
/* -------------------------------------------------------------------------- */

// const template = document.createElement('template');

// template.innerHTML = `
//   <div>bye</div>
//   <div>javascript</div>
// `;

// console.log(template);

// const app = document.querySelector('#app');
// const temp = document.querySelector('#temp');

// const clone = temp.content.cloneNode(true);

// console.log(clone);

// app.appendChild(clone);

/* -------------------------------------------------------------------------- */
/*                              event, shadowRoot                             */
/* -------------------------------------------------------------------------- */
// class UserCard extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: 'open' });
//     this.shadowRoot.innerHTML = /* html */ `
//       <button type="button">btn</button>
//     `;
//     this.button = this.shadowRoot.querySelector('button');
//   }

//   connectedCallback() {
//     this.button.addEventListener('click', this.clickMe.bind(this));
//   }

//   clickMe() {
//     console.log(this);
//   }
// }

// customElements.define('user-card', UserCard);

// bind 실행 x, (call, apply 실행 O)
