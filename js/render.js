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

// 判斷已完成和未完成項目(未完成含項目數)
// ================================================================
// let completed = [];
// let unCompleted = [];
// let count = 0;
// list = JSON.parse(localStorage.getItem('list'));

// list.forEach(function (item) {
//   if (item.completed_at !== null) {
//     unCompleted.push(item.id);
//     count++;
//   }else{
//     completed.push(item.id);
//   }
// });
// console.log(count);
// console.log(completed);
// ================================================================

// 清除已完成項目
// ================================================================
// completed.forEach(function (item) {
//   let url = `https://todoo.5xcamp.us/todos/${item}`
//   axios.delete(url)
// })
// 藉由 for 迴圈持續代入不同 ID 去發送 delete 請求
// 但還要再寫個 deleteAll 函式 專門代入 此處重組過後的 url
// ================================================================

// 觸發未完成按鈕
// ================================================================
// 1. 觸發'未完成'按鈕時， completed 陣列開始跑迴圈，抓取已完成的 ID
// 2. 將全部 li 的 data-id 判斷是否相符，相符者加上 hide 的 class 屬性
// 3. hide 的 class 屬性為 display: none;

// 或是直接從 li 跑迴圈，判斷 checkbox 的 checked 屬性是否不是空值
// 是的話即完成項目，加上 hide 的 class 屬性隱藏起來
// ================================================================

// 觸發已完成按鈕
// ================================================================
// 直接從 li 跑迴圈，判斷 checkbox 的 checked 屬性是否為空值
// 是的話即未完成項目，加上 hide 的 class 屬性
// ================================================================

// 觸發全部按鈕
// ================================================================
// 移除所有 li 的 class 屬性
// ================================================================