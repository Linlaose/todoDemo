const accountLogIn = document.querySelector('.account-login');
const passwordLogIn = document.querySelector('.password-login');
const login = document.querySelector('.login');
const urlAPI = 'https://todoo.5xcamp.us';
let obj = {};

// 建立登入函式
function callLogIn() {
  const email = accountLogIn.value;
  const password = passwordLogIn.value;
  obj = {
    "user": {
      "email": email,
      "password": password
    }
  }

  axios.post(`${urlAPI}/users/sign_in`, obj)
    .then(function(response) {
      localStorage.setItem('token', JSON.stringify(response.headers.authorization))
      localStorage.setItem('userName', JSON.stringify(response.data.nickname))
      Swal.fire({
        title: '登入成功',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'ok'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'todo.html';
        }
      });
    })
    .catch(function(err) {
      Swal.fire({
        icon: 'error',
        title: `${err.response.data.message}`,
      });
    });
}

document.addEventListener('click', function(e) {
  // 觸發登入
  if (e.target.className === 'login'){
    // 判斷欄位必須輸入值
    if (accountLogIn.value === '' || passwordLogIn.value === ''){
      return Swal.fire('請輸入值')
    }
    // 進行登入
    callLogIn();
    // 登入後清空欄位值
    accountLogIn.value = '';
    passwordLogIn.value = '';
  }
});