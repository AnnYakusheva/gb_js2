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

/***/ "./src/ApiHandler.js":
/*!***************************!*\
  !*** ./src/ApiHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiHandler)\n/* harmony export */ });\nclass ApiHandler {\n  constructor(apiUrl) {\n    this.apiUrl = apiUrl;\n  }\n\n  getCatalog(onSuccess, onError) {\n    this.send(onError, onSuccess, `${this.apiUrl}/catalog`);\n  }\n\n  getCart(onSuccess, onError) {\n    this.send(onError, onSuccess, `${this.apiUrl}/cart`);\n  }\n\n  addToCart(onSuccess, onError, data) {\n    this.send(onError, onSuccess, `${this.apiUrl}/cart`, 'POST', JSON.stringify(data), {\n      \"Content-Type\": \"application/json\"\n    });\n  }\n\n  removeFromCart(onSuccess, onError, data) {\n    this.send(onError, onSuccess, `${this.apiUrl}/cart`, 'DELETE', JSON.stringify(data), {\n      \"Content-Type\": \"application/json\"\n    });\n  }\n\n  send(onError, onSuccess, url, method = 'GET', data = '', headers = {}, timeout = 60000) {\n    let xhr;\n\n    if (window.XMLHttpRequest) {\n      // Chrome, Mozilla, Opera, Safari\n      xhr = new XMLHttpRequest();\n    } else if (window.ActiveXObject) {\n      // Internet Explorer\n      xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\n    }\n\n    xhr.timeout = timeout;\n    xhr.ontimeout = onError;\n\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState === 4) {\n        if (xhr.status < 400) {\n          onSuccess(xhr.responseText);\n        } else if (xhr.status >= 400) {\n          onError(xhr.status);\n        }\n      }\n    };\n\n    xhr.open(method, url, true);\n\n    for (const [key, value] of Object.entries(headers)) {\n      xhr.setRequestHeader(key, value);\n    }\n\n    xhr.send(data);\n  }\n\n}\n\n//# sourceURL=webpack://lesson1/./src/ApiHandler.js?");

/***/ }),

/***/ "./src/ShowcaseModel.js":
/*!******************************!*\
  !*** ./src/ShowcaseModel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShowcaseModel)\n/* harmony export */ });\n/* harmony import */ var _ProductList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList.mjs */ \"./src/ProductList.mjs\");\n\nclass ShowcaseModel extends _ProductList_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(apiHandler, eventEmitter, cart) {\n    super([]);\n    this.list = [];\n    this.api = apiHandler;\n    this.cart = cart;\n    this.eventEmitter = eventEmitter;\n  }\n\n  fetch(onError) {\n    this.api.getCatalog(data => {\n      this.list = JSON.parse(data);\n      this.eventEmitter.emit('showcaseFetched', this.list);\n    }, onError);\n  }\n\n  buy(id, onError) {\n    const product = this.find(id);\n    if (product) this.cart.add(product, onError);\n  }\n\n}\n\n//# sourceURL=webpack://lesson1/./src/ShowcaseModel.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ApiHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiHandler */ \"./src/ApiHandler.js\");\n/* harmony import */ var _CartModel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartModel.mjs */ \"./src/CartModel.mjs\");\n/* harmony import */ var _ShowcaseModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowcaseModel */ \"./src/ShowcaseModel.js\");\n/* harmony import */ var _EventEmitter_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventEmitter.mjs */ \"./src/EventEmitter.mjs\");\n\n\n\n\nconst API_URL = '/api/v1';\nconst api = new _ApiHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"](API_URL);\nconst eventEmitter = new _EventEmitter_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst cart = new _CartModel_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"](api, eventEmitter);\nconst showcase = new _ShowcaseModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"](api, eventEmitter, cart);\neventEmitter.subscribe('showcaseFetched', data => {\n  console.log(data);\n});\neventEmitter.subscribe('cartFetched', data => {\n  console.log(data);\n});\nshowcase.fetch();\ncart.fetch();\n\n//# sourceURL=webpack://lesson1/./src/index.js?");

/***/ }),

/***/ "./src/CartModel.mjs":
/*!***************************!*\
  !*** ./src/CartModel.mjs ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CartModel)\n/* harmony export */ });\n/* harmony import */ var _ProductList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList.mjs */ \"./src/ProductList.mjs\");\n\n\nclass CartModel extends _ProductList_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(apiHandler, eventEmitter) {\n        super([])\n        this.api = apiHandler\n        this.eventEmitter = eventEmitter\n    }\n\n    fetch(onError) {\n        this.api.getCart(\n            (data) => {\n                this.list = JSON.parse(data)\n                this.eventEmitter.emit('cartFetched', this.list)\n            },\n            onError\n        )\n    }\n\n    add(product, onError) {\n        this.api.addToCart(\n            () => {\n                this.list.push(product)\n            },\n            onError,\n            product\n        )\n    }\n\n    remove(id, onError) {\n        if(this.find(id)) {\n            this.api.removeFromCart(\n                () => {\n                    this.remove(id)\n                },\n                onError,\n                this.list[index]\n            )\n        }\n    }\n}\n\n//# sourceURL=webpack://lesson1/./src/CartModel.mjs?");

/***/ }),

/***/ "./src/EventEmitter.mjs":
/*!******************************!*\
  !*** ./src/EventEmitter.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventEmitter)\n/* harmony export */ });\nclass EventEmitter {\r\n  constructor() {\r\n    this.callbacks = {}\r\n  }\r\n\r\n  subscribe(eventName, callback) {\r\n    if(!this.callbacks[eventName]) {\r\n      this.callbacks[eventName] = []\r\n    }\r\n    this.callbacks[eventName].push(callback)\r\n  }\r\n\r\n  emit(eventName, payload) {\r\n    if(this.callbacks[eventName]) {\r\n      this.callbacks[eventName].forEach((callback)  => {\r\n        callback(payload)\r\n      })\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://lesson1/./src/EventEmitter.mjs?");

/***/ }),

/***/ "./src/ProductList.mjs":
/*!*****************************!*\
  !*** ./src/ProductList.mjs ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductList)\n/* harmony export */ });\nclass ProductList {\n    constructor(list) {\n        this.list = list\n    }\n\n    getList() {\n        return this.list\n    }\n\n    find(id) {\n        const index = this.list.findIndex((item) => item.id === id)\n\n        if(index >=0) {\n            return this.list[index]\n        }\n\n        return false\n    }\n\n    remove(id) {\n        const index = this.list.findIndex((item) => item.id === id)\n\n        if(index >=0) {\n            this.list = [...this.list.slice(0,index), ...this.list.slice(index+1)]\n            return true\n        }\n\n        return false\n    }\n}\n\n//# sourceURL=webpack://lesson1/./src/ProductList.mjs?");

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