/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _modules_scrollToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _modules_burgerToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.




 // When DOM is ready

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  return jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    Object(_modules_carousel__WEBPACK_IMPORTED_MODULE_1__["carousel"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
    Object(_modules_filters__WEBPACK_IMPORTED_MODULE_2__["filters"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, 'photography');
    Object(_modules_scrollToTop__WEBPACK_IMPORTED_MODULE_3__["scrollToTop"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
    Object(_modules_burgerToggle__WEBPACK_IMPORTED_MODULE_4__["burgerToggle"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
  });
});

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carousel", function() { return carousel; });
/* harmony import */ var slick_carousel_slick_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var slick_carousel_slick_slick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick__WEBPACK_IMPORTED_MODULE_0__);
 // eslint-disable-next-line import/prefer-default-export

var carousel = function carousel($) {
  $('.hero-slider').slick({
    prevArrow: '<button id="prev" type="button" class="arrow-btn "><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button id="next" type="button" class="arrow-btn arrow-btn--right "><i class="fa fa-chevron-left" aria-hidden="true"></i></button>'
  });
  $('.content-slider').slick({
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }]
  });
  $('.study-slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    speed: 800,
    touchThreshold: 500
  });
};

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
// eslint-disable-next-line import/prefer-default-export
var filters = function filters($, defaultValue) {
  var $works = $('[data-filter-type]');
  var $filters = $('[data-filter-nav-type]'); // CALLBACK THAT WILL BE FIRED ON CLICK ON ELEMENT NAV

  var setCurrentClass = function setCurrentClass(item, event) {
    event.preventDefault();
    $works.hide();
    $filters.removeClass('current');
    $(item).addClass('current');
  }; // SET CLASS 'CURRENT' ON ELEMENT NAVIGATION BY DEFAULT


  var setDefaultCurrentClass = function setDefaultCurrentClass(dataAttrDefault) {
    var defaultElementActive = function defaultElementActive() {
      return $('[data-filter-nav-type=all]').addClass('current');
    };

    if (dataAttrDefault) {
      var $element = $("[data-filter-nav-type=".concat(dataAttrDefault, "]"));

      if (!dataAttrDefault || $element.length === 0) {
        return defaultElementActive();
      }

      $element.addClass('current');
      $element.click();
      return null;
    }

    return defaultElementActive();
  }; // GET CARD SHOWN BY CONDITION


  var showBlock = function showBlock(item) {
    if (item.dataset.filterNavType !== 'all') {
      return $works.each(function (_$works, elem) {
        var $element = $(elem);

        if (elem.dataset.filterType === item.dataset.filterNavType) {
          return $element.fadeIn(400);
        }

        return $element.hide();
      });
    }

    return $works.fadeIn(400);
  }; // ATTACHING FUNCTIONALITY ON CLICK TO ELEMENT NAVIGATION


  if ($works.length && $filters.length) {
    $filters.each(function (_index, item) {
      $(item).on('click touch', function (e) {
        setCurrentClass(item, e);
        showBlock(item);
      });
    });
    setDefaultCurrentClass(defaultValue);
    return null;
  }

  return null;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
// eslint-disable-next-line import/prefer-default-export
var scrollToTop = function scrollToTop($) {
  $('.go-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
  });
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "burgerToggle", function() { return burgerToggle; });
// eslint-disable-next-line import/prefer-default-export
var burgerToggle = function burgerToggle($) {
  var $body = $('body');
  var $burgerButton = $('.burger');
  var ACTIVE_CLASS = 'nav-open';
  $burgerButton.click(function (e) {
    e.preventDefault();
    $body.toggleClass(ACTIVE_CLASS);
  });
};

/***/ })
/******/ ]);