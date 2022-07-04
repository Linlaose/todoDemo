/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/login.js":
/*!*********************!*\
  !*** ./js/login.js ***!
  \*********************/
/***/ (() => {

eval("const accountLogIn = document.querySelector('.account-login');\r\nconst passwordLogIn = document.querySelector('.password-login');\r\nconst login = document.querySelector('.login');\r\nconst urlAPI = 'https://todoo.5xcamp.us';\r\nlet obj = {};\r\n\r\n// 建立登入函式\r\nfunction callLogIn() {\r\n  const email = accountLogIn.value;\r\n  const password = passwordLogIn.value;\r\n  obj = {\r\n    \"user\": {\r\n      \"email\": email,\r\n      \"password\": password\r\n    }\r\n  }\r\n\r\n  axios.post(`${urlAPI}/users/sign_in`, obj)\r\n    .then(function(response) {\r\n      localStorage.setItem('token', JSON.stringify(response.headers.authorization))\r\n      Swal.fire({\r\n        title: '登入成功',\r\n        icon: 'success',\r\n        confirmButtonColor: '#3085d6',\r\n        confirmButtonText: 'ok'\r\n      }).then((result) => {\r\n        if (result.isConfirmed) {\r\n          window.location.href = 'todo.html';\r\n        }\r\n      });\r\n    })\r\n    .catch(function(err) {\r\n      Swal.fire({\r\n        icon: 'error',\r\n        title: `${err.response.data.message}`,\r\n      });\r\n    });\r\n}\r\n\r\ndocument.addEventListener('click', function(e) {\r\n  // 觸發登入\r\n  if (e.target.className === 'login'){\r\n    // 判斷欄位必須輸入值\r\n    if (accountLogIn.value === '' || passwordLogIn.value === ''){\r\n      return Swal.fire('請輸入值')\r\n    }\r\n    // 進行登入\r\n    callLogIn();\r\n    // 登入後清空欄位值\r\n    accountLogIn.value = '';\r\n    passwordLogIn.value = '';\r\n  }\r\n});\n\n//# sourceURL=webpack://tododemo/./js/login.js?");

/***/ }),

/***/ "./js/logout.js":
/*!**********************!*\
  !*** ./js/logout.js ***!
  \**********************/
/***/ (() => {

eval("const userName = document.querySelector('.todoInsert');\r\nconst accountLogOut = document.querySelector('.account-logOut');\r\nconst passwordLogOut = document.querySelector('.password-logOut');\r\nconst urlAPI = 'https://todoo.5xcamp.us';\r\nconst token = JSON.parse(localStorage.getItem('token'));\r\n\r\n// 渲染畫面函式\r\nfunction renderPage() {\r\n  userName.textContent = `${JSON.parse(localStorage.getItem('userName'))} 的待辦`;\r\n};\r\n\r\n// 登出函式\r\nfunction callLogOut() {\r\n  // 定義 headers 資訊給出 token\r\n  let obj = {\r\n    headers: {\r\n      Authorization: token\r\n    }\r\n  }\r\n  axios.delete(`${urlAPI}/users/sign_out`, obj)\r\n    .then (function (response) {\r\n      // 登出成功後跳出登出視窗\r\n      let timerInterval\r\n      Swal.fire({\r\n        icon: 'success',\r\n        title: '登出成功!',\r\n        html: '將於 <b></b> milliseconds 後轉換頁面',\r\n        timer: 2000,\r\n        timerProgressBar: true,\r\n        didOpen: () => {\r\n          Swal.showLoading()\r\n          const b = Swal.getHtmlContainer().querySelector('b')\r\n          timerInterval = setInterval(() => {\r\n            b.textContent = Swal.getTimerLeft()\r\n          }, 100)\r\n        },\r\n        willClose: () => {\r\n          clearInterval(timerInterval)\r\n        }\r\n      }).then((result) => {\r\n        /* Read more about handling dismissals below */\r\n        if (result.dismiss === Swal.DismissReason.timer) {\r\n          window.location.href = 'login.html';\r\n        }\r\n      })\r\n    })\r\n    // 登出失敗後跳出錯誤視窗\r\n    .catch(function (err) {\r\n      Swal.fire({\r\n        icon: 'error',\r\n        title: `${err.response.data.message}`,\r\n      });\r\n    });\r\n}\r\n\r\n// 判斷是否為 todo 頁面後，再進行畫面渲染\r\nif (document.body.className === 'todoPage') {\r\n  renderPage();\r\n}\r\n\r\n// 觸發登出功能\r\ndocument.addEventListener('click', function (e) {\r\n  if (e.target.className === 'logOut') {\r\n    callLogOut();\r\n    // 登出後清空欄位值\r\n    accountLogOut.value = '';\r\n    passwordLogOut.value = '';\r\n    // 登出後清空 localStorage\r\n    localStorage.clear();\r\n  };\r\n});\n\n//# sourceURL=webpack://tododemo/./js/logout.js?");

/***/ }),

/***/ "./js/signup.js":
/*!**********************!*\
  !*** ./js/signup.js ***!
  \**********************/
/***/ (() => {

eval("const accountSignUp = document.querySelector('.account-signup');\r\nconst passwordSignUp = document.querySelector('.password-signup');\r\nconst nicknameSignUp = document.querySelector('.nickname-signup');\r\nconst signUp = document.querySelector('.signup');\r\nconst urlAPI = \"https://todoo.5xcamp.us\";\r\nlet obj = {};\r\n\r\n// 宣告註冊函式\r\nfunction callSignUp() {\r\n  const email = accountSignUp.value;\r\n  const nickname = nicknameSignUp.value;\r\n  const password = passwordSignUp.value;\r\n  obj = {\r\n    \"user\": {\r\n      \"email\": email,\r\n      \"nickname\": nickname,\r\n      \"password\": password\r\n    }\r\n  };\r\n\r\n  axios.post(`${urlAPI}/users`, obj)\r\n    .then(function (response) {\r\n      Swal.fire({\r\n        title: '註冊成功',\r\n        icon: 'success',\r\n        confirmButtonColor: '#3085d6',\r\n        confirmButtonText: 'ok'\r\n      }).then((result) => {\r\n        if (result.isConfirmed) {\r\n          window.location.href = 'login.html';\r\n        }\r\n      });\r\n      // 將暱稱儲存為使用者名稱，以便渲染在 todo 頁面\r\n      localStorage.setItem('userName', JSON.stringify(nickname));\r\n    })\r\n    .catch(function (err) {\r\n      Swal.fire({\r\n        icon: 'error',\r\n        title: `${err.response.data.message}`,\r\n      });\r\n    });\r\n};\r\ndocument.addEventListener('click', function (e) {\r\n  // 觸發註冊\r\n  if (e.target.className === 'signup'){\r\n    // 判斷輸入不得空值\r\n    if (accountSignUp.value === '' || nicknameSignUp.value === '' || passwordSignUp.value === ''){\r\n      return Swal.fire('請輸入值')\r\n    }\r\n    // 進行註冊\r\n    callSignUp();\r\n    // 註冊後欄位清除\r\n    accountSignUp.value = '';\r\n    nicknameSignUp.value = '';\r\n    passwordSignUp.value = '';\r\n  }\r\n});\n\n//# sourceURL=webpack://tododemo/./js/signup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/login.js */ \"./js/login.js\");\n/* harmony import */ var _js_login_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_login_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_logout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/logout.js */ \"./js/logout.js\");\n/* harmony import */ var _js_logout_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_logout_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_signup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/signup.js */ \"./js/signup.js\");\n/* harmony import */ var _js_signup_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_signup_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\n\n//# sourceURL=webpack://tododemo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;