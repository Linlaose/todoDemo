const userName = document.querySelector('.todoInsert');

function renderPage() {
  userName.textContent = `${JSON.parse(localStorage.getItem('userName'))} 的待辦`;
};
renderPage();