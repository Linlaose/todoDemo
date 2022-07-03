const accountLogIn = document.querySelector('.account-login');
const passwordLogIn = document.querySelector('.password-login');
const login = document.querySelector('.login');
const urlAPI = 'https://todoo.5xcamp.us';
let obj = {};

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
      Swal.fire({
        title: '登入成功',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'ok'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('轉換')
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
  if (e.target.className === 'login'){
    if (accountLogIn.value === '' || passwordLogIn.value === ''){
      return Swal.fire('請輸入值')
    }
    callLogIn();
    accountLogIn.value = '';
    passwordLogIn.value = '';
  }
});