import { renderPage } from "./render.js";

const add = document.querySelector('.todoList');
const token = JSON.parse(localStorage.getItem('token'));
const urlAPI = 'https://todoo.5xcamp.us';

function addTodo() {
  const addContent = add.value;

  // 用 obj 儲存格式變數不能用在這裡的 post 很怪
  // let obj = {
  //   "todo": {
  //     "content": addContent
  //   },
  //   headers: {
  //     Authorization: token
  //   }
  // };

  axios.post(`${urlAPI}/todos`, {
    "todo": {
      "content": addContent
    }
  }, {
    headers: {
      Authorization: token
    }
  })
    .then(function (response) {
      console.log(response);
      renderPage();
    })
    .catch(function (err) {
      console.log(err);
    });
}

document.addEventListener('click', function (e) {
  if (e.target.className === 'addItem'){
    addTodo();
    addTodo.value = '';
  }
})