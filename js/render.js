const userName = document.querySelector('.todoInsert');
const token = JSON.parse(localStorage.getItem('token'));
const todoList = document.querySelector('ul');
const pendingCount = document.querySelector('.pendingItem');
const urlAPI = 'https://todoo.5xcamp.us';
let list = [];

// 渲染畫面函式
function renderPage() {
  let el = '';

  userName.textContent = `${JSON.parse(localStorage.getItem('userName'))} 的待辦`;

  list = JSON.parse(localStorage.getItem('list'));
  list.forEach(function (item, index) {
    el += `<li data-id=${item.id}><span>${item.content}</span> <input type='checkbox' value='yes' class='checkStatus'> <input type='button' data-num=${index} value='edit'> <input type='button' data-num=${index} value='delete'></li>`;
  });
  // 判斷項目是否完成並且將已完成和未完成項目以物件形式分開推入新的儲存陣列
  // 未完成項目的陣列
  const unCompleted = list.filter((item) => {
    return item.completed_at === null
  });
  // 已完成項目的陣列
  const completed = list.filter((item) => {
    return item.completed_at !== null
  })
  // 從已完成項目陣列中取出 ID 另存新陣列
  const completedID = completed.map((item) => {
    return item.id;
  });
  localStorage.setItem('completedID', JSON.stringify(completedID));
  todoList.innerHTML = el;
  // console.log(unCompleted.length); // 未完成數
  pendingCount.textContent = `${unCompleted.length} 個待完成項目`
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

//TODO: 觸發 checkbox 後要渲染 checkbox 的 ckecked 屬性為 true
//TODO: 觸發 checkbox 後 li 的 textContent 要上 line-through