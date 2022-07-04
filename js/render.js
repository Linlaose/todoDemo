const userName = document.querySelector('.todoInsert');
const token = JSON.parse(localStorage.getItem('token'));
const todoList = document.querySelector('ul');
const urlAPI = 'https://todoo.5xcamp.us';


// 渲染畫面函式
export function renderPage() {
  let el = '';
  let list = JSON.parse(localStorage.getItem('list'));

  userName.textContent = `${JSON.parse(localStorage.getItem('userName'))} 的待辦`;
  getTodo();

  list.forEach(function (item, index) {
    el += `<li data-id=${item.id}>${item.content} <input type='button' data-num=${index} value='delete'></li>`;
  });

  todoList.innerHTML = el;
  console.log('render');
};

function getTodo(){
  let obj = {
    headers: {
      Authorization: token
    }
  };

  axios.get(`${urlAPI}/todos`, obj)
    .then(function(response) {
      localStorage.setItem('list', JSON.stringify(response.data.todos));
    })
    .catch(function (err) {
      console.log(err);
    });
};

// 判斷是否為 todo 頁面後，再進行畫面渲染
if (document.body.className === 'todoPage') {
  renderPage();
}