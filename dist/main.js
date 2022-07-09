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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.png */ \"./src/icon.png\");\n/* harmony import */ var _banner_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.jpg */ \"./src/banner.jpg\");\n\n\n\nconst header = () => {\n    const header = document.createElement('div');\n    header.className = 'header';\n\n    const topRow = document.createElement('div');\n    topRow.classList.add('top_row');\n\n    // const myIcon = new Image();\n    // myIcon.src = Icon;\n    // myIcon.id = 'header_icon';\n    // topRow.appendChild(myIcon);\n\n    const banner = new Image();\n    banner.src = _banner_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    banner.id = 'banner';\n    topRow.appendChild(banner);\n\n    const navRow = document.createElement('div');\n    navRow.classList.add('nav_row');\n\n    const homeBtn = document.createElement('button');\n    homeBtn.id = 'home';\n    homeBtn.textContent = 'Home';\n    navRow.appendChild(homeBtn);\n\n    const menuBtn = document.createElement('button');\n    menuBtn.id = 'menu';\n    menuBtn.textContent = 'Menu';\n    navRow.appendChild(menuBtn);\n\n    const contactBtn = document.createElement('button');\n    contactBtn.id = 'contact';\n    contactBtn.textContent = 'Contact';\n    navRow.appendChild(contactBtn);\n\n    header.appendChild(topRow);\n    header.appendChild(navRow);\n    return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst contentDiv = document.getElementById('content');\n\ncontentDiv.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\ncontentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\nconst homeBtn = document.getElementById('home');\nhomeBtn.classList.add('active');\nconst menuBtn = document.getElementById('menu');\nconst contactBtn = document.getElementById('contact');\n\nfunction homeOnClick (e) {\n    clearContent();\n    e.target.className = 'active';\n    contentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n}\n\nfunction menuOnClick (e) {\n    clearContent();\n    e.target.className = 'active';\n    contentDiv.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n}\n\nfunction contactOnClick (e) {\n    clearContent();\n    e.target.className = 'active';\n    contentDiv.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n}\n\nhomeBtn.addEventListener('click', homeOnClick);\nmenuBtn.addEventListener('click', menuOnClick);\ncontactBtn.addEventListener('click', contactOnClick);\n\nfunction clearContent () {\n    const bodyDiv = document.querySelector('.body');\n    let header = document.querySelector('.header');\n    let headerButtons = header.querySelectorAll('button');\n\n    headerButtons.forEach(btn => {\n        btn.classList.remove('active');\n    });\n    contentDiv.removeChild(bodyDiv);\n\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menu = document.createElement('div');\n    menu.classList = 'body';\n\n    const menuTitle = document.createElement('h1');\n    menuTitle.textContent = 'MENU';\n    menu.appendChild(menuTitle);\n\n    return menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/banner.jpg":
/*!************************!*\
  !*** ./src/banner.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fe9d356f4ee80bac0811.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/banner.jpg?");

/***/ }),

/***/ "./src/icon.png":
/*!**********************!*\
  !*** ./src/icon.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea9170142fcf7b5179c4.png\";\n\n//# sourceURL=webpack://restaurant/./src/icon.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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