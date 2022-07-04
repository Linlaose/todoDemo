const userName = document.querySelector('.todoInsert');
const accountLogOut = document.querySelector('.account-logOut');
const passwordLogOut = document.querySelector('.password-logOut');
const urlAPI = 'https://todoo.5xcamp.us';
const token = JSON.parse(localStorage.getItem('token'));

function renderPage() {
  userName.textContent = `${JSON.parse(localStorage.getItem('userName'))} 的待辦`;
};

function callLogOut() {
  let obj = {
    headers: {
      Authorization: token
    }
  }
  axios.delete(`${urlAPI}/users/sign_out`, obj)
    .then (function (response) {
      let timerInterval
      Swal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <b></b> milliseconds.',
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
          console.log('轉換')
        }
      })
    })
    .catch(function (err) {
      Swal.fire({
        icon: 'error',
        title: `${err.response.data.message}`,
      });
    });
}

if (document.body.className === 'todoPage') {
  renderPage();
}

document.addEventListener('click', function (e) {
  if (e.target.className === 'logOut') {
    callLogOut();
    accountLogOut.value = '';
    passwordLogOut.value = '';
  };
});