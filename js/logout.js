const userName = document.querySelector('.todoInsert');

if (document.body.className === 'todoPage') {
  function renderPage() {
    userName.textContent = `${JSON.parse(localStorage.getItem('userName'))} 的待辦`;
  };
  renderPage();
}