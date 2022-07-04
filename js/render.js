const userName = document.querySelector('.todoInsert');
const token = JSON.parse(localStorage.getItem('token'));
const urlAPI = 'https://todoo.5xcamp.us';


// 渲染畫面函式
function renderPage() {
  userName.textContent = `${JSON.parse(localStorage.getItem('userName'))} 的待辦`;
  getTodo();
};

function getTodo(){
  let obj = {
    headers: {
      Authorization: token
    }
  };

  axios.get(`${urlAPI}/todos`, obj)
    .then(function(response) {
      console.log(response);
      localStorage.setItem('list', JSON.stringify(response.data.todos));
    })
    .catch(function (err) {
      console.log(err);
    });
}

// 判斷是否為 todo 頁面後，再進行畫面渲染
if (document.body.className === 'todoPage') {
  renderPage();
}