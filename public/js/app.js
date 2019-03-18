/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_domready_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/domready.js */ "./src/js/utils/domready.js");
/* harmony import */ var _components_example_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/example.js */ "./src/js/components/example.js");
// Import the domReady Utility.
 // Import components.

 // Initialize your components on DOM Ready.

Object(_utils_domready_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  _components_example_js__WEBPACK_IMPORTED_MODULE_1__["default"].init({
    setting: 'New setting'
  });
});

/***/ }),

/***/ "./src/js/components/example.js":
/*!**************************************!*\
  !*** ./src/js/components/example.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Example = {
  settings: {
    setting: 'Initial value'
  },
  init: function init(options) {
    // Do some init stuff like process settings.
    this.settings.setting = options.setting; // Run your custom code.

    this.startRunningYourCode();
  },
  startRunningYourCode: function startRunningYourCode() {
    // Your custom code goes here.
    console.log(this.settings.setting);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Example);

/***/ }),

/***/ "./src/js/utils/domready.js":
/*!**********************************!*\
  !*** ./src/js/utils/domready.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return domReady; });
var functions = [];
function domReady(callback) {
  functions.push(callback);

  if (document.readyState != 'loading') {
    load();
  } else if (document.addEventListener) {
    addEvent(document, 'DOMContentLoaded', function loadedEvent() {
      removeEvent(document, 'DOMContentLoaded', loadedEvent);
      load();
    });
  } else {
    addEvent(document, 'onreadystatechange', function readyListner() {
      if (document.readyState != 'loading') {
        removeEvent(document, 'onreadystatechange', readyListner);
        load();
      }
    });
  }
}

var load = function load() {
  functions.forEach(function (callback) {
    functions.splice(functions.indexOf(callback), 1);
    callback();
  });
};

var addEvent = function addEvent(ellement, type, callback) {
  if (ellement.attachEvent) {
    ellement.attachEvent('on' + type, callback);
  } else {
    ellement.addEventListener(type, callback);
  }
};

var removeEvent = function removeEvent(ellement, type, callback) {
  if (ellement.detachEvent) {
    ellement.detachEvent('on' + type, callback);
  } else {
    ellement.removeEventListener(type, callback);
  }
};

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/saskia/Documents/repos/websites/mixtut/wp-content/themes/mixtut/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/saskia/Documents/repos/websites/mixtut/wp-content/themes/mixtut/src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });