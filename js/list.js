import { getTodo } from "./render.js";

const add = document.querySelector('.todoList');
const token = JSON.parse(localStorage.getItem('token'));
const urlAPI = 'https://todoo.5xcamp.us';
let list = [];
let delID = '';
let editID = '';
let editContent = '';

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

// 觸發增加待辦事項
document.addEventListener('click', function (e) {
  if (e.target.className === 'addItem'){
    addTodo();
    add.value = '';
    getTodo();
  }
  else if (e.target.value === 'delete'){
    delID = (e.target.closest(':not(input)').getAttribute('data-id'));
    delTodo(delID);
  }
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
});