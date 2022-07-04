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

eval("const accountLogIn = document.querySelector('.account-login');\r\nconst passwordLogIn = document.querySelector('.password-login');\r\nconst login = document.querySelector('.login');\r\nconst urlAPI = 'https://todoo.5xcamp.us';\r\nlet obj = {};\r\n\r\n// 建立登入函式\r\nfunction callLogIn() {\r\n  const email = accountLogIn.value;\r\n  const password = passwordLogIn.value;\r\n  obj = {\r\n    \"user\": {\r\n      \"email\": email,\r\n      \"password\": password\r\n    }\r\n  }\r\n\r\n  axios.post(`${urlAPI}/users/sign_in`, obj)\r\n    .then(function(response) {\r\n      Swal.fire({\r\n        title: '登入成功',\r\n        icon: 'success',\r\n        confirmButtonColor: '#3085d6',\r\n        confirmButtonText: 'ok'\r\n      }).then((result) => {\r\n        if (result.isConfirmed) {\r\n          console.log('轉換')\r\n        }\r\n      });\r\n    })\r\n    .catch(function(err) {\r\n      Swal.fire({\r\n        icon: 'error',\r\n        title: `${err.response.data.message}`,\r\n      });\r\n    });\r\n}\r\n\r\ndocument.addEventListener('click', function(e) {\r\n  // 觸發登入\r\n  if (e.target.className === 'login'){\r\n    // 判斷欄位必須輸入值\r\n    if (accountLogIn.value === '' || passwordLogIn.value === ''){\r\n      return Swal.fire('請輸入值')\r\n    }\r\n    // 進行登入\r\n    callLogIn();\r\n    // 登入後清空欄位值\r\n    accountLogIn.value = '';\r\n    passwordLogIn.value = '';\r\n  }\r\n});\n\n//# sourceURL=webpack://tododemo/./js/login.js?");

/***/ }),

/***/ "./js/logout.js":
/*!**********************!*\
  !*** ./js/logout.js ***!
  \**********************/
/***/ (() => {

eval("const userName = document.querySelector('.todoInsert');\r\n\r\nif (document.body.className === 'todoPage') {\r\n  function renderPage() {\r\n    userName.textContent = `${JSON.parse(localStorage.getItem('userName'))} 的待辦`;\r\n  };\r\n  renderPage();\r\n}\n\n//# sourceURL=webpack://tododemo/./js/logout.js?");

/***/ }),

/***/ "./js/signup.js":
/*!**********************!*\
  !*** ./js/signup.js ***!
  \**********************/
/***/ (() => {

eval("const accountSignUp = document.querySelector('.account-signup');\r\nconst passwordSignUp = document.querySelector('.password-signup');\r\nconst nicknameSignUp = document.querySelector('.nickname-signup');\r\nconst signUp = document.querySelector('.signup');\r\nconst urlAPI = \"https://todoo.5xcamp.us\";\r\nlet obj = {};\r\n\r\n// 宣告註冊函式\r\nfunction callSignUp() {\r\n  const email = accountSignUp.value;\r\n  const nickname = nicknameSignUp.value;\r\n  const password = passwordSignUp.value;\r\n  obj = {\r\n    \"user\": {\r\n      \"email\": email,\r\n      \"nickname\": nickname,\r\n      \"password\": password\r\n    }\r\n  };\r\n\r\n  axios.post(`${urlAPI}/users`, obj)\r\n    .then(function (response) {\r\n      Swal.fire({\r\n        title: '註冊成功',\r\n        icon: 'success',\r\n        confirmButtonColor: '#3085d6',\r\n        confirmButtonText: 'ok'\r\n      }).then((result) => {\r\n        if (result.isConfirmed) {\r\n          console.log('轉換')\r\n        }\r\n      });\r\n      // 將暱稱儲存為使用者名稱，以便渲染在 todo 頁面\r\n      localStorage.setItem('userName', JSON.stringify(nickname));\r\n    })\r\n    .catch(function (err) {\r\n      Swal.fire({\r\n        icon: 'error',\r\n        title: `${err.response.data.message}`,\r\n      });\r\n    });\r\n};\r\ndocument.addEventListener('click', function (e) {\r\n  // 觸發註冊\r\n  if (e.target.className === 'signup'){\r\n    // 判斷輸入不得空值\r\n    if (accountSignUp.value === '' || nicknameSignUp.value === '' || passwordSignUp.value === ''){\r\n      return Swal.fire('請輸入值')\r\n    }\r\n    // 進行註冊\r\n    callSignUp();\r\n    // 註冊後欄位清除\r\n    accountSignUp.value = '';\r\n    nicknameSignUp.value = '';\r\n    passwordSignUp.value = '';\r\n  }\r\n});\n\n//# sourceURL=webpack://tododemo/./js/signup.js?");

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