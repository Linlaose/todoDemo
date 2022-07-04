const userName = document.querySelector('.todoInsert');

// 渲染畫面函式
function renderPage() {
  userName.textContent = `${JSON.parse(localStorage.getItem('userName'))} 的待辦`;
};

// 判斷是否為 todo 頁面後，再進行畫面渲染
if (document.body.className === 'todoPage') {
  renderPage();
}