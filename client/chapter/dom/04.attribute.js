/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

const first = getNode('.first');
first.dataset.name = 'hyeonho';
console.log(first.dataset);

getAttr('.first', 'sayHi'); // 'hola'

setAttr('.second', 'id', 'bye');

/* 
html에 작성한 attribute는 JS 엔진에 의해 파싱될 때 DOM 객체를 생성합니다.  이때! html에 작
성한 속성의 표준이 dom객체의 1: 1매핑이 되어 프로퍼티를 생성하게 됩니다.
하지만, 모든 속성이 1:1 매핑이 되는건 아닙니다. 비표준 속성은 dom객체가 생성을 하지 않고, 
getAttributre 메서드를 통해 접근이 가능하지만, 이는 위험할 수 있습니다. 이유는 HTML이라는 
언어 자체가 Living Standard 하기 때문입니다. 새로운 표준이 등장 할 경우 기존에 사용된 속성은 
반영이 되지 않을 수 있으므로 우리는 안전한 data-* 접근자를 사용합니다. data-접근자를 사용할 
경우 DOM에서 객체를 생성해 컬렉션을 모아주는데, 이는 DOMStringMap이라는 자료안에 모이
게 됩니다. 접근하는 방법은 elem.dataset을 통해 접근이 가능합니다. */
