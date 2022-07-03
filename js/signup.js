const accountSignUp = document.querySelector('.account-signup');
const passwordSignUp = document.querySelector('.password-signup');
const nicknameSignUp = document.querySelector('.nickname-signup');
const signUp = document.querySelector('.signup');
const urlAPI = "https://todoo.5xcamp.us";
let obj = {};

function callSignUp() {
  const email = accountSignUp.value;
  const nickname = nicknameSignUp.value;
  const password = passwordSignUp.value;
  obj = {
    "user": {
      "email": email,
      "nickname": nickname,
      "password": password
    }
  };

  axios.post(`${urlAPI}/users`, obj)
    .then(function (response) {
      Swal.fire({
        title: '註冊成功',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'ok'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('轉換')
        }
      });
    })
    .catch(function (err) {
      Swal.fire({
        icon: 'error',
        title: `${err.response.data.message}`,
      });
    });
};
document.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.className === 'signup'){
    if (accountSignUp.value === '' || nicknameSignUp.value === '' || passwordSignUp.value === ''){
      return Swal.fire('請輸入值')
    }
    callSignUp();
    accountSignUp.value = '';
    nicknameSignUp.value = '';
    passwordSignUp.value = '';
  }
});