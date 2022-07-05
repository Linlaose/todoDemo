const userName = document.querySelector('.todoInsert');
const token = JSON.parse(localStorage.getItem('token'));
const todoList = document.querySelector('ul');
const urlAPI = 'https://todoo.5xcamp.us';
let list = [];

// 渲染畫面函式
function renderPage() {
  let el = '';

  userName.textContent = `${JSON.parse(localStorage.getItem('userName'))} 的待辦`;

  list.forEach(function (item, index) {
    el += `<li data-id=${item.id}>${item.content} <input type='checkbox' value='yes' class='checkStatus'> <input type='button' data-num=${index} value='edit'> <input type='button' data-num=${index} value='delete'></li>`;
  });

  todoList.innerHTML = el;
  console.log('render');
};

export function getTodo(){
  let obj = {
    headers: {
      Authorization: token
    }
  };

  axios.get(`${urlAPI}/todos`, obj)
    .then(function(response) {
      localStorage.setItem('list', JSON.stringify(response.data.todos));
      list = JSON.parse(localStorage.getItem('list'));
      renderPage();
    })
    .catch(function (err) {
      console.log(err);
    });
};

// 判斷是否為 todo 頁面後，再進行畫面渲染
if (document.body.className === 'todoPage') {
  getTodo();
}