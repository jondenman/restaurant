/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = () => {\n    const contact = document.createElement('div');\n    contact.className = 'body';\n    contact.textContent = 'CONTACT';\n\n    return contact;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () => {\n    const header = document.createElement('div');\n    header.className = 'header';\n\n    const homeBtn = document.createElement('button');\n    homeBtn.id = 'home';\n    homeBtn.textContent = 'Home';\n    header.appendChild(homeBtn);\n\n    const menuBtn = document.createElement('button');\n    menuBtn.id = 'menu';\n    menuBtn.textContent = 'Menu';\n    header.appendChild(menuBtn);\n\n    const contactBtn = document.createElement('button');\n    contactBtn.id = 'contact';\n    contactBtn.textContent = 'Contact';\n    header.appendChild(contactBtn);\n\n    return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hours_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hours.js */ \"./src/hours.js\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.js */ \"./src/location.js\");\n\n\n\nconst home = () => {\n    const body = document.createElement('div');\n    body.className = 'body';\n    \n    const title = document.createElement('h1');\n    title.textContent = 'Eat up!';\n    body.appendChild(title);\n\n    const mainImage = document.createElement('div');\n    mainImage.className = 'main_image';\n    mainImage.textContent = 'IMAGE GOES HERE';\n    body.appendChild(mainImage);\n\n    const message = document.createElement('div');\n    message.textContent = 'Welcome to Eat Up!';\n    body.appendChild(message);\n\n    body.appendChild((0,_hours_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    body.appendChild((0,_location_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n    return body;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/hours.js":
/*!**********************!*\
  !*** ./src/hours.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst times = [\n    'Mon: 9AM - 10PM',\n    'Tues: 9AM - 10PM',\n    'Wed: 9AM - 10PM',\n    'Thurs: 9AM - 10PM',\n    'Fri: 9AM - 10PM',\n    'Sat: 9AM - 10PM',\n    'Sun: 10AM - 6PM',\n]\n\nconst hours = () => {\n    const hours = document.createElement('div');\n    hours.className = 'hours';\n    hours.textContent = 'Hours';\n\n    for (const time of times) {\n        let timeDiv = document.createElement('p');\n        timeDiv.textContent = time;\n        hours.appendChild(timeDiv);\n    }\n    \n    return hours;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hours);\n\n//# sourceURL=webpack://restaurant/./src/hours.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst contentDiv = document.getElementById('content');\n\ncontentDiv.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\ncontentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\nconst homeBtn = document.getElementById('home');\nconst menuBtn = document.getElementById('menu');\nconst contactBtn = document.getElementById('contact');\n\nfunction homeOnClick (e) {\n    clearContent();\n    contentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n}\n\nfunction menuOnClick (e) {\n    clearContent();\n    contentDiv.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n}\n\nfunction contactOnClick (e) {\n    clearContent();\n    contentDiv.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n}\n\nhomeBtn.addEventListener('click', homeOnClick);\nmenuBtn.addEventListener('click', menuOnClick);\ncontactBtn.addEventListener('click', contactOnClick);\n\nfunction clearContent () {\n    const bodyDiv = document.querySelector('.body');\n    contentDiv.removeChild(bodyDiv);\n\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst location = () => {\n    const location = document.createElement('div');\n    location.className = 'location';\n    location.textContent = 'Location';\n\n    const address = document.createElement('p');\n    address.textContent = '123 Around Corner, City, State';\n\n    location.appendChild(address);\n\n    return location;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (location);\n\n//# sourceURL=webpack://restaurant/./src/location.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menu = document.createElement('div');\n    menu.classList = 'body';\n    menu.textContent = 'MENU';\n\n    return menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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