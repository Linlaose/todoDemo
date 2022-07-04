const userName = document.querySelector('.todoInsert');
const accountLogOut = document.querySelector('.account-logOut');
const passwordLogOut = document.querySelector('.password-logOut');
const urlAPI = 'https://todoo.5xcamp.us';
const token = JSON.parse(localStorage.getItem('token'));

// 渲染畫面函式
function renderPage() {
  userName.textContent = `${JSON.parse(localStorage.getItem('userName'))} 的待辦`;
};

// 登出函式
function callLogOut() {
  // 定義 headers 資訊給出 token
  let obj = {
    headers: {
      Authorization: token
    }
  }
  axios.delete(`${urlAPI}/users/sign_out`, obj)
    .then (function (response) {
      // 登出成功後跳出登出視窗
      let timerInterval
      Swal.fire({
        icon: 'success',
        title: '登出成功!',
        html: '將於 <b></b> milliseconds 後轉換頁面',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          window.location.href = 'login.html';
        }
      })
    })
    // 登出失敗後跳出錯誤視窗
    .catch(function (err) {
      Swal.fire({
        icon: 'error',
        title: `${err.response.data.message}`,
      });
    });
}

// 判斷是否為 todo 頁面後，再進行畫面渲染
if (document.body.className === 'todoPage') {
  renderPage();
}

// 觸發登出功能
document.addEventListener('click', function (e) {
  if (e.target.className === 'logOut') {
    callLogOut();
    // 登出後清空欄位值
    accountLogOut.value = '';
    passwordLogOut.value = '';
    // 登出後清空 localStorage
    localStorage.clear();
  };
});