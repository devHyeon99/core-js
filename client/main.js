// 'TodoList'와 'TodoItem' 클래스를 './components/TodoList/TodoList.js'와 './components/TodoItem/TodoItem.js'에서 가져옵니다.
// 이 클래스들은 각각 Todo 리스트와 Todo 항목을 나타내는 커스텀 HTML 요소를 정의합니다.
import { TodoList } from './components/TodoList/TodoList.js';
import { TodoItem } from './components/TodoItem/TodoItem.js';

// 'app' 변수에 HTML 문서에서 id가 'app'인 요소를 가져옵니다. 이 요소는 우리가 만든 컴포넌트를 추가할 컨테이너입니다.
const app = document.getElementById('app');

// defineElements 함수는 커스텀 HTML 요소를 정의합니다.
// customElements.define 함수를 사용하여 'todo-app'과 'todo-item'이라는 이름의 커스텀 요소를 등록합니다.
// 'todo-app'은 TodoList 클래스와 연결되고, 'todo-item'은 TodoItem 클래스와 연결됩니다.
const defineElements = () => {
  customElements.define('todo-app', TodoList);
  customElements.define('todo-item', TodoItem);
};

// defineElements 함수를 호출하여 커스텀 요소들을 정의합니다.
defineElements();

// 'todo-app' 커스텀 요소를 생성합니다.
// customElements.define을 통해 정의된 'todo-app' 요소는 TodoList 클래스의 인스턴스가 됩니다.
const todoElement = document.createElement('todo-app');

// 생성된 'todo-app' 요소를 'app' 요소에 추가합니다.
// 이로 인해 'app' 요소 안에 'todo-app' 커스텀 요소가 삽입되고, 이 커스텀 요소는 TodoList 클래스의 정의에 따라 렌더링됩니다.
app.append(todoElement);
