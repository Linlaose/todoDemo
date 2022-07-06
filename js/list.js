import { getTodo } from "./render.js";

const add = document.querySelector('.todoList');
const token = JSON.parse(localStorage.getItem('token'));
const urlAPI = 'https://todoo.5xcamp.us';

let delID = '';
let editID = '';
let toggleID = '';
let editContent = '';
let completedItem = [];


// 增加待辦事項函式
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
      getTodo();
    })
    .catch(function (err) {
      console.log(err);
    });
}

// 刪除待辦事項函式
function delTodo() {
  axios.delete(`${urlAPI}/todos/${delID}`, {
    headers: {
      Authorization: token
    }
  })
    .then(function (response) {
      getTodo();
    })
    .catch(function (err) {
      console.log(err)});
}

// 刪除全部已完成之事項
function delAll(){
  const completedAll = JSON.parse(localStorage.getItem('completedID'))
  completedAll.forEach((item) => {
    axios.delete(`${urlAPI}/todos/${item}`, {
      headers: {
        Authorization: token
      }
    })
      .then (function (response) {
        delAll();
        getTodo();
      })
      .catch (function (err) {
        console.log(err);
      });
  });
};

// 編輯待辦事項函式
function editTodo() {
  axios.put(`${urlAPI}/todos/${editID}`, {
    "todo": {
      "content": editContent
    }
  }, {
    headers: {
      Authorization: token
    }
  })
    .then(function (response) {
      console.log(response);
      getTodo();
    })
    .catch(function (err) {
      console.log(err)
    });
}

// 更新待辦事項狀態，第一個物件為空值很重要！！
function toggleTodo() {
  axios.patch(`${urlAPI}/todos/${toggleID}/toggle`, {}, {
    headers: {
      Authorization: token
    }
  })
    .then(function (response) {
      console.log(response)
      getTodo();
    })
    .catch(function (err) {
      console.log(err)
    });
}

// 觸發待辦事項
document.addEventListener('click', function (e) {
  // 新增待辦事項
  if (e.target.className === 'addItem'){
    addTodo();
    add.value = '';
  }
  // 刪除待辦事項
  else if (e.target.value === 'delete'){
    delID = (e.target.closest(':not(input)').getAttribute('data-id'));
    delTodo(delID);
  }
  // 編輯待辦事項
  else if (e.target.value === 'edit') {
    editID = (e.target.closest(':not(input)').getAttribute('data-id'));
    (async () => {
      const { value: content } = await Swal.fire({
        title: '編輯內容為：',
        input: 'text',
        inputValidator: (value) => {
          if (!value) {
            return '不得為空值'
          }
        }
      })
      if (content) {
        Swal.fire(`變更成功`)
        editContent = content
        editTodo(editContent, editID);
      }
    })()
  }
  // 更新待辦事項狀態
  else if (e.target.className === 'checkStatus') {
    toggleID = (e.target.closest(':not(input)').getAttribute('data-id'));
    toggleTodo(toggleID);
  }
  // 刪除所有已完成項目
  else if (e.target.className === 'clearAll') {
    delAll();
  }
  // 顯現全部項目
  else if (e.target.className === 'showAll') {
    const li = document.querySelectorAll('li');
    li.forEach((item) => {
      item.removeAttribute('class');
    })
  }
  // 顯現未完成項目
  else if (e.target.className === 'pending') {
    // 抓取目前已完成項目ID之陣列並存為新的儲存陣列 (completedItem)
    completedItem = JSON.parse(localStorage.getItem('completedID'));
    const li = document.querySelectorAll('li');

    // 將所有 li 標籤賦予 show 屬性值顯現出來，方便後面巢狀迴圈邏輯走向 (直接給 hide 屬性值而不用做其他操作)
    li.forEach((item) => {
      item.setAttribute('class', 'show');
    })

    // 將取出的新儲存陣列做巢狀迴圈進行資料比對
    // li 標籤的 data-id 只要符合目前儲存 id 的陣列資料，表示其為已完成項目，即賦予 hide 屬性值隱藏
    completedItem.forEach((completed) => {
      li.forEach((item) => {
        if (item.getAttribute('data-id') === completed){
          item.setAttribute('class', 'hide');
        }
      })
    });
  }
  // 顯現已完成項目 (邏輯與顯現未完成項目相同)
  else if (e.target.className === 'achieved') {
    completedItem = JSON.parse(localStorage.getItem('completedID'));
    const li = document.querySelectorAll('li');
    li.forEach((item) => {
      item.setAttribute('class', 'hide');
    })

    completedItem.forEach((completed) => {
      li.forEach((item) => {
        if (item.getAttribute('data-id') === completed){
          item.setAttribute('class', 'show');
        }
      })
    })
  }
});