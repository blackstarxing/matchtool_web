/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(64);

	var _vue2 = _interopRequireDefault(_vue);

	var _matchtool = __webpack_require__(56);

	var _matchtool2 = _interopRequireDefault(_matchtool);

	var _createquickmatch = __webpack_require__(58);

	var _createquickmatch2 = _interopRequireDefault(_createquickmatch);

	var _quickmatchformat = __webpack_require__(61);

	var _quickmatchformat2 = _interopRequireDefault(_quickmatchformat);

	var _createLeaguematch = __webpack_require__(57);

	var _createLeaguematch2 = _interopRequireDefault(_createLeaguematch);

	var _landRegister = __webpack_require__(59);

	var _landRegister2 = _interopRequireDefault(_landRegister);

	var _matchDetails = __webpack_require__(60);

	var _matchDetails2 = _interopRequireDefault(_matchDetails);

	var _vueRouter = __webpack_require__(63);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _vueResource = __webpack_require__(62);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueResource2.default);
	_vue2.default.use(_vueRouter2.default);

	_vue2.default.http.options.root = 'http://172.16.2.63:8088/';

	_vue2.default.http.options.emulateJSON = true;
	var router = new _vueRouter2.default({
	    hashbang: false
	});

	router.map({
	    '/quickmatch': {
	        component: _createquickmatch2.default
	    },
	    '/createLeaguematch': {
	        component: _createLeaguematch2.default
	    },
	    '/quickformat': {
	        component: _quickmatchformat2.default
	    },
	    '/landRegister': {
	        component: _landRegister2.default
	    },
	    '/matchDetails': {
	        component: _matchDetails2.default
	    }
	});

	router.redirect({
	    '*': '/landRegister'
	});

	router.start(_matchtool2.default, '#app');

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA35pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzMxQzFERjA1NTYwMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzMxQzFERUY1NTYwMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcwOTU3RjcwNDEyMDY4MTE4MjJBRTE0REZBMTdGMTc0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MTIwYjZkYjMtNTgwNC0xMWU2LWJkYTMtZGI5YjM0NTliYjM2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+fkA1BwAAANlJREFUeNpi/LtTigEK2IA4A4gjgVgHKnYFiJcD8Qwg/gUSYIRqkAbiLUBsAFX4BkqLQOkLQOwDxE+ZoCYjK/4GxOpArAFlM0DltgIxOwuQSEdSDAL/gfgdEhsG9IE4DaQhigEVcCM5hRtNLgqkwYgBE8ijmQ4DhiwM2IEcDvHfIA3ngNgCTaIfh4YroFBahkXiMBAfwSK+HBQP7EDGSWgowN0Kpc8jiV0CYjOQDT+B2BsaOTCwF4ph4CIQe4HUMkEFngKxORAXAPEZUARB8RmomBlUDQNAgAEATPAr1DKZUh4AAAAASUVORK5CYII="

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(16)
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(17)
	__vue_template__ = __webpack_require__(47)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(18)
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(19)
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MThGQTE2Qjg1MjMxMTFFNjg4RTlDNzc1RTAxNDU5OUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MThGQTE2Qjc1MjMxMTFFNjg4RTlDNzc1RTAxNDU5OUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDMxN2ZlNmYtYThjMi04YzRmLWFkZWUtNDg2NDNhNmNkZWIxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MWQ0NzVlMDAtOWEyOS0xMTc5LTkyZDgt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"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(26), __esModule: true };

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAYAAACAa1QyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGQkU3RkU3RDU2RUExMUU2QUIwNUEwMkNGNDhEOTA4MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGQkU3RkU3RTU2RUExMUU2QUIwNUEwMkNGNDhEOTA4MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZCRTdGRTdCNTZFQTExRTZBQjA1QTAyQ0Y0OEQ5MDgxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZCRTdGRTdDNTZFQTExRTZBQjA1QTAyQ0Y0OEQ5MDgxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lv7w2QAAAF1JREFUeNpiNLF29WZgYJgLxOIMhMFLIE5mAhKzidTAAFU3kwVISDGQCECa/pOqiYmBDDCqaRhrAiUjRrqlvddYxBWgLpDHlqdAmtKB+A2axAOoCx6iiYPUZQEEGAAfFw4jOqSLqQAAAABJRU5ErkJggg=="

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAABQCAYAAACEYZ66AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDA5NDY3NzQ1MzI1MTFFNkJCQjNBRkI2ODU2RUVDODAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDA5NDY3NzM1MzI1MTFFNkJCQjNBRkI2ODU2RUVDODAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ0NmVjM2Y3LTdkYmQtNDQyNi1hYTA2LTZmZGZjMWI3ZDZiZCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM0MmU2MDA5LTU5NzQtMTFlNi1iMGQzLWFm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"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAhCAYAAAAI2Y9jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RDYyMjVGRDUyMzAxMUU2ODhFOUM3NzVFMDE0NTk5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RDYyMjVGRTUyMzAxMUU2ODhFOUM3NzVFMDE0NTk5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVENjIyNUZCNTIzMDExRTY4OEU5Qzc3NUUwMTQ1OTlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVENjIyNUZDNTIzMDExRTY4OEU5Qzc3NUUwMTQ1OTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++DAaUgAACPpJREFUeNrsW3uU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"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOTYxREM4RjUyMzExMUU2ODhFOUM3NzVFMDE0NTk5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxOTYxREM5MDUyMzExMUU2ODhFOUM3NzVFMDE0NTk5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5NjFEQzhENTIzMTExRTY4OEU5Qzc3NUUwMTQ1OTlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5NjFEQzhFNTIzMTExRTY4OEU5Qzc3NUUwMTQ1OTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rkexDQAAAuJJREFUeNq0l0loFEEUhjs9GVxCSOLCiAiCElFEBEVEQY/OwXgykRxURESRmDEHd1TEBbwpMSMeRBE8xDGeTNBRlKggiCh4cKJEBDc0rhNXVEb9n/wNj6K7pnsmefBNdVVNvb+r+1XV64pCdqITwuJgCZkHpoBa9uXBU3AXXCG/izmsKCIszlNgExjvhLO3IA3aeVORhZs4eIJTmr3hTZ/363R92mKgA2TKEHU4NkNfsWLC8odO0OIMnbXQZ8wmfBQ0OkNvjfTtK9zEIBouE98rTOFaBtJwW7u3DD3hzQyGV2AjeBIw8AH4W4Lge/AaJKj1XziugukAOAFmgl3gqxp8CSxkoES1/eCQCra4rOOluOgGnznrH2pAHZjNNfmIbQvA7YjC88FDzroaNMiMk+zsNkTFPoFeJSp2h7tTFBO/38BF1pMiPIcVPYupoBWsA5MMJ3/4OqLYL5Y3Wc6txM80VnIsl4OzYCTr38EycF052seDIaVu3GYvWT5mWS8zrmHlA8s9SlRsNDhlrHmJ7DM8qS4UEX3Bxyz2kWWNazxCefHTfQZPBrN82mXM3iLCveq6oDeQQV7LsbcNjAhwUB/QnlOP0s/06TSG5aAI97OyEuywOLCdx7mA9j7Qo+ozWPaL8D1W1oJKi/NqS99znzaJg618HZ4tYnlfhLMhl8QXS98zn7YjxmwlYBt4fdlljvQuhHDe0nfLqMvhv8VoW8UDQrSuukzM0hHWop/dAAfBNbCam48+TKrAbl4flw3Fy7lquS0mLLOVffxnicfhMZ7HA1yueVc5brUM7CxDdI1KMFLeK3ON9dYRsMEfLkP0pHrvmaCcqw10GW07A6LWZlUUOs0kr4u+A5M92dKajWDbDjaAUSEE5T/ruaF4yUWaPgthE/pmZoYJFQc9jOA+pjMym7EMmMVcp96hM8A051ypnzBtvPtxEfKrNG+6pE8Y86MtaXy01aksRX+0ZcN8tP0TYACrcq4Q9QjEuAAAAABJRU5ErkJggg=="

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzM0ODk5QTUyM0MxMUU2ODhFOUM3NzVFMDE0NTk5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzM0ODk5QjUyM0MxMUU2ODhFOUM3NzVFMDE0NTk5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5NjFEQzkxNTIzMTExRTY4OEU5Qzc3NUUwMTQ1OTlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5NjFEQzkyNTIzMTExRTY4OEU5Qzc3NUUwMTQ1OTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qKNn0wAAAnFJREFUeNrslk1IVFEUx8fR3JgJgpCRQl+UYtJG2rSJENy1KConDMMPUGgnuElwYYkoJFKB2Vg5REUFQUQbUdyIBIqWipGkqDgUoRUikUT9D/wHLpcz792ZsZ0Hfsx95557zn1nzrn3pb0dGQ0ochk8BBmB5GSLPp7bE8E4C0pSCCayC5RqE+L0FLgB9hv63EDq0ghCxvMSuC4Bn1jBXOQjN3vIwybX2vhBEJGUZlNRaRhd8QnYATp9bC4Z/qqp2y0BX/FB3nKdzHk4WgaPwSMQ9bCbN/wVUPdCAg7w4ZpRKEvW4h/gKjgJjoPf4Bcopq4O/FQ2FquTeo7DEnAYfAKF4BwnvjBITHJABRi39N/BBOf2GHoJ/pXj83zDSVkvAf+CXk62gnSjMEy5CG4rqbtnbDQmn422a+H4vtmHvcz1MVBF3QfFuVbN+xTdLH9DTPs38MAMuAF6OL7J9LxTHM3wP5Eeq+V4VrGbZPW38/kW2LRPmi5WXT7HY4oj+Z/fgzugD0yBvYrdmHGYSAF2a0ebvGUzx7L7w2DVciS9WmQ8F1NnV3QWsxCgz814Z2kEvARpoN8o7URkga2WzlPsqd/hXc+mzWGPJSonQB59NLrcFmugnAuSFTmpTrNPna6nRVDGtP5JIJDYhpmZFc0g6LFYdlfDU6LNIVgbbWuVY84pYEyicVpEa4Won1HQMVUbDjbrLo5cA46wkJri3OxnwKiLo0S+WwZ5i9jyRrnOUn7DbZOdgNptYcuB/xHwKHgGXitzQ/yoOrIdATP5CTENLvAW0XyEeBHf9at8v4CV/CLLcGyxBnA2lYD5SdSFZ2r/CTAARK58etlVOscAAAAASUVORK5CYII="

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzM0ODk5RTUyM0MxMUU2ODhFOUM3NzVFMDE0NTk5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzM0ODk5RjUyM0MxMUU2ODhFOUM3NzVFMDE0NTk5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI3MzQ4OTlDNTIzQzExRTY4OEU5Qzc3NUUwMTQ1OTlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI3MzQ4OTlENTIzQzExRTY4OEU5Qzc3NUUwMTQ1OTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++NrygAAAAdpJREFUeNrMlr1KA0EUhXeTWKSyECFiobW1RrEQBH8QtbESbFVMIZgyRYh5AivxN4gR8wSClUZF1EIshfgAajAEQVMpxjNwImHZ2d1x1sQLH7vcmXvPzN2Z2TGPz68MTWsD22AdnHoNCmmKtoMz0ANaVYQDmsJ7FL0DiyqBOjMeA5OgCKbBo0qwzoxX+FxVFdUVHuHz8DfBOsItfL41WljLQpKZDIFeDiwPbhTzDoBh8AVuwQX4kAmbYAGkQcSSKM1F5MVEv5TF90zfDqjWlzoIcmDLRtRg0AYIOwiG2Sdl0xZh7hy1fma8BmZdZrIEJsBR3cIymFCUcQp0ueQQGiWwbOKs7sfLNUvdCBOlHgzwu1pFTZ8GYkpyzwvh0SbspnEh3NkE4Y5QbZVJSmtavo3X8tb6VyX+4L84uWSja9iR6cd2cSt7834SAYdRy8p8CaLiECBR+v601C+85rxa/ML3wMuf4WUnqJT6EyRsRA36Euzj20XgCcRAN8g49MvwJxFjjFapRanmeBnwYuLStwkK4MTpvHeb8a6CaL3lGetY6pKk7R7ENXZMnDnsrCSEszYN4pI+AyoawhXmKNq0ZYVwEuyDd1AGB9ybBR/OCZGjjznL1BBayW8BBgDhImGylbsmQQAAAABJRU5ErkJggg=="

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QTgwQkFBMjU2RkQxMUU2QUIwNUEwMkNGNDhEOTA4MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QTgwQkFBMzU2RkQxMUU2QUIwNUEwMkNGNDhEOTA4MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdBODBCQUEwNTZGRDExRTZBQjA1QTAyQ0Y0OEQ5MDgxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdBODBCQUExNTZGRDExRTZBQjA1QTAyQ0Y0OEQ5MDgxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lFF8MwAAAONJREFUeNpiNLF2ZUADIkBcCMQ+QKwMFbsLxFuAuB+I3yArZkHTbAJVKI4mrgfFyVCDz8AkmJAUCQHxRqjmg0DsBMTcUOwEFQPJbYKqxTAgG4ilgPgoELsA8X4g/gbF+6FiIDlJqFoMA3yhdCMQ/2HABH+gcshqUQxQg9KnGHCDU2hqUQzgh9If8RjwEU0tigFkAZABIUD8DknsPwEMAyA9ISADpgGxIBmWg/RMBRkgSoEPxAiFgS0U4wQsBAw4QkwgUgQIucAGLeRJNuAwMV54TYEPXoMMyALiD2RoBunJAggwANOyLTpcrHW6AAAAAElFTkSuQmCC"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAABcCAYAAAAYlOXCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkI2NTJEQTU1MzI4MTFFNkJCQjNBRkI2ODU2RUVDODAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkI2NTJEQTQ1MzI4MTFFNkJCQjNBRkI2ODU2RUVDODAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ0NmVjM2Y3LTdkYmQtNDQyNi1hYTA2LTZmZGZjMWI3ZDZiZCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM0MmU2MDA5LTU5NzQtMTFlNi1iMGQzLWFm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"

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {};
		},

		ready: function ready() {
			var _this = this;
		},
		methods: {
			closePop: function closePop(e) {
				e.preventDefault();
				$('.createPop').hide();
			}
		}
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {};
		},

		ready: function ready() {
			var _this = this;
		},
		methods: {
			showPop: function showPop(e) {
				e.preventDefault();
				$('.createPop').show();
			}
		}
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {};
		},

		ready: function ready() {
			var _this = this;
		},
		methods: {
			slideout: function slideout(e) {
				e.preventDefault();
				$('.m-slideInto').animate({ left: "-230px" }, 200);
			},
			showPop: function showPop(e) {
				e.preventDefault();
				$('.createPop').show();
			}
		}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {};
		},

		ready: function ready() {
			var _this = this;
		},
		methods: {
			slidein: function slidein(e) {
				e.preventDefault();
				$('.m-slideInto').animate({ left: "0px" }, 200);
			}
		}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {};
	  },

	  components: {}
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(7);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _topHead = __webpack_require__(5);

	var _topHead2 = _interopRequireDefault(_topHead);

	var _sideBar = __webpack_require__(3);

	var _sideBar2 = _interopRequireDefault(_sideBar);

	var _slideBar = __webpack_require__(4);

	var _slideBar2 = _interopRequireDefault(_slideBar);

	var _createPop = __webpack_require__(2);

	var _createPop2 = _interopRequireDefault(_createPop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      name: "",
	      sponsorId: "",
	      itemId: "",
	      mode: ""
	    };
	  },

	  ready: function ready() {
	    var _this = this;
	  },
	  methods: {
	    nextStep: function nextStep(e) {
	      e.preventDefault();
	      var _this = this;
	      var parm = {};
	      parm.jsonInfo = (0, _stringify2.default)();
	    }
	  },
	  components: {
	    topHead: _topHead2.default,
	    sideBar: _sideBar2.default,
	    slideBar: _slideBar2.default,
	    createPop: _createPop2.default
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _stringify = __webpack_require__(7);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _topHead = __webpack_require__(5);

	var _topHead2 = _interopRequireDefault(_topHead);

	var _sideBar = __webpack_require__(3);

	var _sideBar2 = _interopRequireDefault(_sideBar);

	var _slideBar = __webpack_require__(4);

	var _slideBar2 = _interopRequireDefault(_slideBar);

	var _createPop = __webpack_require__(2);

	var _createPop2 = _interopRequireDefault(_createPop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				username: "",
				formdata: {
					name: "",
					sponsorType: 1,
					itemId: "",
					addreass: "",
					detailAddreass: "",
					maxNum: "",
					mode: "",
					allowApply: "",
					applyType: "",
					nicknameRequired: "",
					nameRequired: "",
					idcardRequired: "",
					qqRequired: "",
					wechatRequired: "",
					telephoneRequired: "",
					otherRequired: "",
					otherDescribe: "",
					activityBegin: "",
					applyBegin: "",
					applyEnd: "",
					needSign: "",
					needSignMinu: ""
				}
			};
		},

		components: {
			topHead: _topHead2.default,
			sideBar: _sideBar2.default,
			slideBar: _slideBar2.default,
			createPop: _createPop2.default
		},
		ready: function ready() {
			function getLength(str) {
				return str.replace(/[^ -~]/g, 'AA').length;
			}

			function limitMaxLength(str, maxLength) {
				var result = [];
				for (var i = 0; i < maxLength; i++) {
					var char = str[i];
					if (/[^ -~]/.test(char)) maxLength--;
					result.push(char);
				}
				return result.join('');
			}

			var maxLength = 52;

			function onInput() {
				if (getLength(this.value) > maxLength) this.value = limitMaxLength(this.value, maxLength);
			}

			window.onInput = onInput;

			$('.form_datetime').datetimepicker({
				format: "Y-m-d H:i",
				yearStart: 2000,
				yearEnd: 2050,
				onShow: function onShow(ct) {
					this.setOptions({
						minDate: true,
						minTime: true
					});
				},
				step: 10
			});
			var _this = this;
			$('#applyEnd').on('change', function () {
				var t = _this.formdata.applyEnd;
				if (t != "") {
					$('#activityBegin').datetimepicker({
						format: "Y-m-d H:i",
						yearStart: 2000,
						yearEnd: 2050,
						onShow: function onShow(ct) {
							this.setOptions({
								minDate: t,
								minTime: false
							});
						},
						step: 10
					});
					$('#applyBegin').datetimepicker({
						format: "Y-m-d H:i",
						yearStart: 2000,
						yearEnd: 2050,
						onShow: function onShow(ct) {
							this.setOptions({
								maxDate: t,
								minTime: false
							});
						},
						step: 10
					});
				}
			});
			$('#applyBegin').on('change', function () {
				var t = _this.formdata.applyBegin;
				if (t != "") {
					$('#activityBegin').datetimepicker({
						format: "Y-m-d H:i",
						yearStart: 2000,
						yearEnd: 2050,
						onShow: function onShow(ct) {
							this.setOptions({
								minDate: t,
								minTime: false
							});
						},
						step: 10
					});
					$('#applyEnd').datetimepicker({
						format: "Y-m-d H:i",
						yearStart: 2000,
						yearEnd: 2050,
						onShow: function onShow(ct) {
							this.setOptions({
								minDate: t,
								minTime: false
							});
						},
						step: 10
					});
				}
			});
			$('#activityBegin').on('change', function (event) {
				var t = _this.formdata.activityBegin;
				if (t != "") {
					$('#applyBegin').datetimepicker({
						format: "Y-m-d H:i",
						yearStart: 2000,
						yearEnd: 2050,
						onShow: function onShow(ct) {
							this.setOptions({
								maxDate: t,
								minTime: false
							});
						},
						step: 10
					});
					$('#applyEnd').datetimepicker({
						format: "Y-m-d H:i",
						yearStart: 2000,
						yearEnd: 2050,
						onShow: function onShow(ct) {
							this.setOptions({
								maxDate: t,
								minTime: false
							});
						},
						step: 10
					});
				}
			});
			$.datetimepicker.setLocale('ch');


			_this.$http.get('http://172.16.2.21:8080/event/league/queryActivityItem').then(function (response) {
				var gameList = response.data.object.itemsList;
				var content = '';
				for (var i = 0; i < gameList.length; i++) {
					content += '<option value="' + gameList[i].id + '">' + gameList[i].name + '</option>';
				}
				$('#gameList').append(content);
			}, function (response) {
				console.log(22);
			});
		},
		methods: {

			showotherinfo: function showotherinfo() {
				if (this.formdata.allowApply == 1) {
					if ($('#another').is(':checked')) {
						$('#otherinfocherk').slideUp();
					} else {
						$('#otherinfocherk').slideDown();
					}
				}
			},

			numberChange: function numberChange(e) {
				if (this.formdata.maxNum == 512) {
					$('.plus').attr('disabled', true);
				}
				if (this.formdata.maxNum > 4) {
					$('.minus').attr('disabled', false);
				} else {
					$('.minus').attr('disabled', true);
				}
			},
			plus: function plus(e) {
				if (this.formdata.maxNum == "") {
					this.formdata.maxNum = 0;
				}
				this.formdata.maxNum = parseInt(this.formdata.maxNum) + 1;
				$('#number').val(this.formdata.maxNum);
				if (this.formdata.maxNum > 0) {
					$('.minus').attr('disabled', false);
				}
				if (this.formdata.maxNum == 512) {
					$('.plus').attr('disabled', true);
				}
			},
			minus: function minus(e) {
				this.formdata.maxNum = parseInt(this.formdata.maxNum) - 1;
				$('#number').val(this.formdata.maxNum);
				if (this.formdata.maxNum <= 4) {
					$('.minus').attr('disabled', true);
				} else {
					$('.minus').attr('disabled', false);
				}
				$('.plus').attr('disabled', false);
			},

			isapply: function isapply(e) {
				if ($('#checkboxThreeInput').is(':checked')) {
					$('[name="baoming"]').attr('disabled', true);
					$('[name="bminfo"]').attr('disabled', true);
					$('[name="baoming"]').siblings('.u-c-per').find('span').addClass('col8f');
					$('[name="bminfo"]').siblings('.u-c-ck').addClass('col8f');
					$('#applyBegin').attr('disabled', true);
					$('#applyEnd').attr('disabled', true);
					$('#signtime').attr('disabled', true);
					$('#signtime').parents('.g-c-qd').find('.u-c-ck').addClass('col8f');
				} else {
					$('[name="baoming"]').attr('disabled', false);
					$('[name="bminfo"]').attr('disabled', false);
					$('[name="baoming"]').siblings('.u-c-per').find('span').removeClass('col8f');
					$('[name="bminfo"]').siblings('.u-c-ck').removeClass('col8f');
					$('#applyBegin').attr('disabled', false);
					$('#applyEnd').attr('disabled', false);
					$('#signtime').attr('disabled', false);
					$('#signtime').parents('.g-c-qd').find('.u-c-ck').removeClass('col8f');
				}
			},
			signtime: function signtime() {
				if ($('#signtime').is(':disabled')) {
					return;
				} else {
					if ($('#signtime').is(':checked')) {
						$('[name="needSignMinu"]').attr('disabled', true).addClass('col8f');
					} else {
						$('[name="needSignMinu"]').attr('disabled', false).removeClass('col8f');
					}
				}
			},
			slidedown: function slidedown() {
				$('.m-c-xx').slideDown();
			},
			slideup: function slideup() {
				$('.m-c-xx').slideUp();
			},
			goToSetformat: function goToSetformat(e) {
				var _this = this;
				e.preventDefault();
				function errorPlacement(mes, element) {
					var errorTips = element.parents(".f-c").find('.f-tip');
					if (mes != "") {
						errorTips.css("display", "inline-block").html(mes);
					} else {
						errorTips.css("display", "none");
					}
				}
				function formValidate() {
					var valid = true,
					    valid2 = true;
					$('.g-z [required]').each(function () {
						var $this = $(this);
						var value = $this.val(),
						    name = $this.attr('title');
						var message = "";
						if (value == null || value == '') {
							message = name + '不能为空！';
							valid = false;
						}
						errorPlacement(message, $this);
					});
					if (_this.formdata.itemId == "") {
						valid = false;
						var $this = $('#gameList'),
						    message = "必须选择一个比赛项目!";
						errorPlacement(message, $this);
					}
					if (_this.formdata.mode == 2 || _this.formdata.mode == 3) {
						$('.m-c-xx [req]').each(function () {
							var $this = $(this);
							var value = $this.val(),
							    name = $this.attr('title');
							var message = "";
							if (value == null || value == '') {
								message = name + '不能为空！';
								valid = false;
							}
							errorPlacement(message, $this);
						});
					}
					if (_this.formdata.maxNum < 4 || _this.formdata.maxNum > 512) {
						valid = false;
						var $this = $('#personnum'),
						    message = "人数/队伍范围必须在4 ~ 512之间!";
						errorPlacement(message, $this);
					}
					if (_this.formdata.allowApply == 1) {
						if (_this.formdata.nicknameRequired == 0 && _this.formdata.nameRequired == 0 && _this.formdata.wechatRequired == 0 && _this.formdata.telephoneRequired == 0 && _this.formdata.qqRequired == 0 && _this.formdata.idcardRequired == 0 && _this.formdata.otherRequired == 0) {
							valid2 = false;
							var $this = $('#gamenickname'),
							    message = "至少选择一个需要收集的报名信息!";
							errorPlacement(message, $this);
						} else {
							if (_this.formdata.otherRequired == 1) {
								if (_this.formdata.otherDescribe == "") {
									valid2 = false;
									var $this = $('#gamenickname'),
									    message = "其他报名信息不能为空！";
									errorPlacement(message, $this);
								} else {
									var $this = $('#gamenickname'),
									    message = "";
									errorPlacement(message, $this);
									valid2 = true;
								}
							} else {
								var $this = $('#gamenickname'),
								    message = "";
								errorPlacement(message, $this);
								valid2 = true;
							}
						}
						if (_this.formdata.applyBegin) {
							if (_this.formdata.applyEnd) {
								if (_this.formdata.applyBegin >= _this.formdata.applyEnd) {
									valid2 = false;
									var $this = $('#applyBegin'),
									    message = "报名开始时间不能晚于报名结束时间!";
									errorPlacement(message, $this);
								} else if (_this.formdata.activityBegin != "" && _this.formdata.applyEnd >= _this.formdata.activityBegin) {
									valid2 = false;
									var $this = $('#activityBegin'),
									    message = "赛事开始时间不能早于报名结束时间!";
									errorPlacement(message, $this);
								} else {
									valid2 = true;
									var $this = $('#applyBegin'),
									    message = "";
									errorPlacement(message, $this);
								}
							} else {
								valid2 = false;
								var $this = $('#applyBegin'),
								    message = "报名结束时间不能为空!";
								errorPlacement(message, $this);
							}
						} else {
							if (_this.formdata.applyEnd) {
								valid2 = false;
								var $this = $('#applyBegin'),
								    message = "报名开始时间不能为空!";
								errorPlacement(message, $this);
							} else {
								valid2 = false;
								var $this = $('#applyBegin'),
								    message = "报名时间不能为空!";
								errorPlacement(message, $this);
							}
						}
					}
					if (valid && valid2) {
						return true;
					}
				}
				if (formValidate()) {
					var newsobj = _this.formdata;
					var jsonInfo = (0, _stringify2.default)(newsobj);
					var parm = new Object();
					parm.jsonInfo = jsonInfo;
					_this.$http.post('http://172.16.2.21:8080/event/saveBaseInfo', parm).then(function (response) {
						console.log("成功");
					}, function (response) {
						console.log(22);
					});
				}
			}
		},
		events: {}
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _topHead = __webpack_require__(5);

	var _topHead2 = _interopRequireDefault(_topHead);

	var _sideBar = __webpack_require__(3);

	var _sideBar2 = _interopRequireDefault(_sideBar);

	var _slideBar = __webpack_require__(4);

	var _slideBar2 = _interopRequireDefault(_slideBar);

	var _createPop = __webpack_require__(2);

	var _createPop2 = _interopRequireDefault(_createPop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				landReg: true,
				checked: '',
				account: '',
				password: '',
				ident: '',
				nickname: '',
				errorTip: true,
				allowReg: false,
				allowLogin: false
			};
		},

		components: {
			topHead: _topHead2.default,
			sideBar: _sideBar2.default,
			slideBar: _slideBar2.default,
			createPop: _createPop2.default
		},
		ready: function ready() {},
		methods: {
			changeLand: function changeLand(e) {
				var _current = $(e.currentTarget);
				this.landReg = true;
				_current.addClass('reg_active').siblings().removeClass('reg_active');
			},
			changeReg: function changeReg(e) {
				var _current = $(e.currentTarget);
				this.landReg = false;
				_current.addClass('reg_active').siblings().removeClass('reg_active');
			},
			inputFoucs: function inputFoucs(e) {
				var _current = $(e.currentTarget);
				var _target = $(e.target);
				_current.find('.input_text').removeClass("bottom_line");
				if (_target.hasClass('input_text')) {
					_target.addClass("bottom_line");
				}
			},
			blurPhone: function blurPhone(e) {
				var _current = $(e.currentTarget);
				var _error = _current.next('.reg_error');
				if (/^\d+$/.test(this.account)) {
					_error.hide();

					this.errorTip = true;
					if (this.account.length != 11) {
						_error.show();

						this.errorTip = false;
						_error.find('.error_tip').text('手机号码位数不对');
					}
				} else {
					_error.show();
					_error.find('.error_tip').text('请填写正确的手机号');
				}

				if (this.nickname && this.password && this.account && this.ident && this.checked && this.errorTip) {
					this.allowReg = true;
				} else {
					this.allowReg = false;
				}

				if (this.account && this.password && this.errorTip) {
					this.allowLogin = true;
				} else {
					this.allowLogin = false;
				}
			},
			getIdent: function getIdent(e) {
				var _current = $(e.currentTarget);
				var _error = _current.next('.reg_error');
				var parm = {};
				if (/^\d+$/.test(this.account) && this.account.length == 11) {
					parm.telephone = this.account;
				} else {
					return;
				}
				parm.type = 1;
				this.$http.post('http://172.16.2.63:8088/sendVerifyCode', parm).then(function (response) {
					if (response.data.code) {
						_error.hide();
						this.errorTip = true;
					} else {
						_error.show();
						this.errorTip = false;
						_error.find('.error_tip').text(response.data.msg);
					}
				}, function (response) {
					console.log(response);
				});
				if (this.nickname && this.password && this.account && this.ident && this.checked && this.errorTip) {
					this.allowReg = true;
				} else {
					this.allowReg = false;
				}
			},
			getNickname: function getNickname(e) {
				var _current = $(e.currentTarget);
				var _error = _current.next('.reg_error');
				if (/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/.test(this.nickname)) {
					_error.show();
					this.errorTip = false;
				} else {
					_error.hide();
					this.errorTip = true;
				}
				if (this.nickname && this.password && this.account && this.ident && this.checked && this.errorTip) {
					this.allowReg = true;
				} else {
					this.allowReg = false;
				}
			},
			getpwd: function getpwd(e) {
				var _current = $(e.currentTarget);
				var _error = _current.next('.reg_error');
				if (this.password.length < 7) {
					_error.show();
					this.errorTip = false;
				} else {
					_error.hide();
					this.errorTip = true;
				}
				if (this.nickname && this.password && this.account && this.ident && this.checked && this.errorTip) {
					this.allowReg = true;
				} else {
					this.allowReg = false;
				}
				if (this.account && this.password && this.errorTip) {
					this.allowLogin = true;
				} else {
					this.allowLogin = false;
				}
			},
			acceptRule: function acceptRule() {
				if (this.checked) {
					this.allowReg = true;
				} else {
					this.allowReg = false;
				}
			},
			regIn: function regIn() {
				var parm = {};
				parm.nickname = this.nickname;
				parm.password = this.password;
				parm.telephone = this.account;
				parm.verifyCode = this.ident;
				console.log(this.errorTip);
				this.$http.post('http://172.16.2.63:8088/register', parm).then(function (response) {
					console.log(response);
				}, function (response) {
					console.log(response);
				});
			},
			logIn: function logIn() {
				var parm = {};
				parm.username = this.account;
				parm.password = this.password;
				this.$http.post('http://172.16.2.63:8088/login', parm).then(function (response) {
					console.log(response);
					if (response.data.code) {
						this.$route.router.go({ path: '/quickmatch' });
					}
				}, function (response) {
					console.log(response);
				});
			}
		}
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _topHead = __webpack_require__(5);

	var _topHead2 = _interopRequireDefault(_topHead);

	var _sideBar = __webpack_require__(3);

	var _sideBar2 = _interopRequireDefault(_sideBar);

	var _slideBar = __webpack_require__(4);

	var _slideBar2 = _interopRequireDefault(_slideBar);

	var _createPop = __webpack_require__(2);

	var _createPop2 = _interopRequireDefault(_createPop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {};
		},

		components: {
			topHead: _topHead2.default,
			sideBar: _sideBar2.default,
			slideBar: _slideBar2.default,
			createPop: _createPop2.default
		},
		ready: function ready() {},
		methods: function methods() {},
		events: function events() {}
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _topHead = __webpack_require__(5);

	var _topHead2 = _interopRequireDefault(_topHead);

	var _sideBar = __webpack_require__(3);

	var _sideBar2 = _interopRequireDefault(_sideBar);

	var _slideBar = __webpack_require__(4);

	var _slideBar2 = _interopRequireDefault(_slideBar);

	var _createPop = __webpack_require__(2);

	var _createPop2 = _interopRequireDefault(_createPop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				formdata: {
					eventRoundId: '',
					needThird: '',
					regime: '',
					type: ''
				}
			};
		},

		components: {
			topHead: _topHead2.default,
			sideBar: _sideBar2.default,
			slideBar: _slideBar2.default,
			createPop: _createPop2.default
		},
		ready: function ready() {},
		methods: {
			cherksz: function cherksz(event) {
				var _this = $(event.target);
				_this.parents('.g-c-sz').find('.g-c-sz-cherk').toggle();
				$('.g-c-szgz').fadeToggle();
			},
			creatematch: function creatematch(event) {
				var _this = this;
				event.preventDefault();
				var slt = $('.g-c-sz-cherk').css('display') != 'none';
				if (slt) {
					_this.formdata.regime = 1;
				} else {
					_this.formdata.regime = '';
				}
				function errorPlacement(mes, element) {
					var errorTips = element.parents(".f-c").find('.f-tip');
					if (mes != "") {
						errorTips.css("display", "inline-block").html(mes);
					} else {
						errorTips.css("display", "none");
					}
				}
				function formValidate() {
					var valid = true;
					var $this = $('#dbsz');
					var message = "请选择赛制！";
					if (_this.formdata.regime == '') {
						valid = false;
						errorPlacement(message, $this);
					} else {
						valid = true;
						message = '';
						errorPlacement(message, $this);
					}
					return valid;
				}

				if ($('#dbsz').is(':checked')) {
					_this.formdata.needThird = 0;
				} else {
					_this.formdata.needThird = 1;
				}
				if (formValidate()) {
					alert('好了');
				}
			}
		}
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(27);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(29)();
	// imports


	// module
	exports.push([module.id, "\n\t.landregister{\n\t\twidth: 488px;\n\t\tbackground-color: #292f3b;\n\t\tpadding: 6px;\n\t\tmargin: 2.2rem auto;\n\t}\n\t.landreg_head{\n\t\twidth: 100%;\n\t\theight: 55px;\n\t\tbackground: url(" + __webpack_require__(44) + ");\n\t}\n\t.landreg_tab{\n\t\twidth: 100%;\n\t\theight: 55px;\n\t\tline-height: 55px;\n\t}\n\t.landreg_tab li{\n\t\tfloat: left;\n\t\theight: 50px;\n\t\ttext-align: center;\n\t\tfont-size: 20px;\n\t\tcolor: #fff;\n\t\twidth: 90px;\n\t\tmargin: 0 77px;\n\t\tcursor: pointer;\n\t}\n\t.landreg_tab .reg_active{\n\t\tcolor: #fdb91a;\n\t\tborder-bottom: 5px solid #fdb91a;\n\t}\n\t.landreg_content{\n\t\tbackground: #1b1e25;\n\t}\n\t.landreg_list{\n\t\tpadding: 20px 40px;\n\t}\n\t.landreg_tip{\n\t\tcolor: #7a8387;\n\t}\n\t.landreg_tip span{\n\t\tcolor: #fdb91a;\n\t\tmargin-right: 5px;\n\t}\n\t.landreg_form{\n\t\tborder: 1px solid #343b45;\n\t\tmargin-top: 30px;\n\t\tbackground-color: #14181d;\n\t}\n\t.landreg_form input{\n\t\tbackground-color: #14181d !important;\n\t\tborder: none;\n\t\tborder-bottom: 1px solid #343b45;\n\t\twidth:330px;\n\t\theight: 50px;\n\t\tline-height: 50px;\n\t\tcolor: #fff;\n\t}\n\t.reg_label{\n\t\tdisplay: inline-block;\n\t\twidth:50px;\n\t\ttext-align: center;\n\t}\n\t.password_st{\n\t\tmargin: 20px auto 40px;\n\t}\n\t.remeber_pw{\n\t\tfloat: left;\n\t\tposition: relative;\n\t}\n\t.forgot_pw{\n\t\tfloat: right;\n\t}\n\t.password_st a{\n\t\tcolor: #42aa53;\n\t}\n\t.remeber_label{\n\t\tcolor: #42aa53;\n\t}\n\t.twolines{\n\t\twidth: 100%;\n\t\theight: 5px;\n\t\tborder-top: 1px solid #343b45;\n\t\tborder-bottom: 1px solid #343b45;\n\t}\n\t.login_in,.regi_in{\n\t\twidth: 280px;\n\t\theight: 50px;\n\t\tline-height: 50px;\n\t\ttext-align: center;\n\t\tmargin: 30px auto;\n\t\tbackground: #666;\n\t\tborder-radius: 5px;\n\t\tcursor: not-allowed;\n\t\tfont-size: 18px;\n\t}\n\t.accept_rule{\n\t\tmargin: 20px auto 40px;\n\t\tcolor: #7a8387;\n\t\tposition: relative;\n\t}\n\t.accept_rule i{\n\t\tcolor:#42aa53;\n\t}\n\t.float_checkbox{\n\t\tdisplay: inline-block;\n\t    width: 15px;\n\t    height: 15px;\n\t    border: 1px solid #53585d;\n\t    border-radius: 2px;\n\t    position: absolute;\n\t    top:0;\n\t    left:0;\n\t}\n\t.check_gou{\n\t   display: inline-block;\n\t   width: 15px;\n\t   height: 15px;\n\t   text-align: center;\n\t   color: #f9a32a;\n\t}\n\t#auto_land,#accept_input{\n\t  opacity: 0;\n\t  width:15px;\n\t  height: 15px;\n    }\n    .bottom_line{\n    \tborder-bottom: 2px solid #fff !important;\n    }\n    .form_list{\n    \tposition: relative;\n    }\n    .reg_error{\n\t\tdisplay: inline-block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright:-170px;\n\t\tcolor: #42aa53;\n\t\twidth: 160px;\n\t\theight: 35px;\n\t\tbackground-color: #171a21;\n\t\tline-height: 35px;\n\t\ttext-align: center;\n\t\tborder: 1px solid #343b45;\n\t\tdisplay: none;\n    }\n    .get_indent{\n    \tposition: absolute;\n    \ttop:10px;\n    \tright:20px;\n    \twidth: 100px;\n    \theight: 30px;\n    \tbackground-color: #343b45;\n    \ttext-align: center;\n    \tline-height: 30px;\n    \tborder-radius: 5px;\n    \tcolor: #7a8387;\n    \tcursor: pointer;\n    }\n    .allow_reg,.allow_login{\n    \tbackground: #fdb91a;\n    \tcursor: pointer;\n    \twidth: 280px;\n\t\theight: 50px;\n\t\tline-height: 50px;\n\t\ttext-align: center;\n\t\tmargin: 30px auto;\n\t\tborder-radius: 5px;\n\t\tfont-size: 18px;\n    }\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/7.5.3/vue-loader/lib/style-rewriter.js?id=_v-286fc56e&file=landRegister.vue!./../../node_modules/.npminstall/vue-loader/7.5.3/vue-loader/lib/selector.js?type=style&index=0!./landRegister.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/7.5.3/vue-loader/lib/style-rewriter.js?id=_v-286fc56e&file=landRegister.vue!./../../node_modules/.npminstall/vue-loader/7.5.3/vue-loader/lib/selector.js?type=style&index=0!./landRegister.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QOLaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDY1NTFjYjYtYWMzNy1jMTQwLWExZDctZjUwY2I2ZjE5ZjQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzMUMxREY0NTU2MDExRTY5MzQ1Q0QzNTUxRUM0Q0I4IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzMUMxREYzNTU2MDExRTY5MzQ1Q0QzNTUxRUM0Q0I4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ZDUzZDA1OC1iYTUwLWZmNGYtOTQ5Yi0wM2E0ZmI4ZTBjMTUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3YzAwMWZmOC01YTNlLTExZTYtYjlkMC1lOGFhMGVjM2MwMmIiLz4gPC9yZGY6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"

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAgCAYAAADjaQM7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTA5RTNCMDU1NjFDMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTA5RTNCMDQ1NjFDMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlkNTNkMDU4LWJhNTAtZmY0Zi05NDliLTAzYTRmYjhlMGMxNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdjMDAxZmY4LTVhM2UtMTFlNi1iOWQwLWU4YWEwZWMzYzAyYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhWxE4wAAAJRSURBVHjavJY7aBVBFIY3m2swFkrEKIiIKIIvRAlIIggqghYG1EIlFmpjoagoaaIWQiA26r1oYSM+8AHiIyK+AiIWieArnaUWQU2CID5CEEKI34F/Jax7987szfXAxzC7c+afnT1zzlQdaz8VOFoL3Eh4vgtuukwQBu7WB7ehX/1+9ftcJ/AR64bt0Kt+r/rdKT77YHkWMV+bBXktZqM9yDk6LpTDClilZ9Ze0hc+ho8xn0kwBDPhLsxNE6uCbdAKjQnv62GvOA8v4TR0whS4rzGH4BN8KyY2Dy7DWo9tWw334Bn8ggY4oYUExbZxPdyBuoz/aoPap9CRFo0m9LAMofFmu7KumNgCbUPtBEXjZJ3D+XExa6/BtAkO/+lwRcH2V8xSUVOFztsa2BmJmWpbUFk7HonZGVpSYbGlpmNizcH/seawgv8qbk2h8p5PmVkGc6DHU2yRic3wcLgK7+GzMrqP1YWeZWZldGaw10qwrpYzoR8eDpvhjXKeCW2Cr46+33OqQz5b2SAs2xxQNHc5ZJ8PoVaaxfZDO7xS3ftdYvzbUKUgq1m9OgLPYQeMpoztCrUFg2UInoE98EDtWMKYAfsoExuBc2WIWXRehC1wHQ4njLFqPRKFfcHn/pdg1XBLxbc2IREUxl8LhmG37g/VGQVr4InayEY173C8Ur+Ag2Xmv5pYv1XzJt5BLsDRIj/Zx8Y0T6HU9TuvgzqQUWhQ/nnXu/4jWKywHnIUsXFnLbvL/9/kmJbLtOcnYauu35amZsNU+Alf4J3Oamephf0RYABJyXCO6OaBWQAAAABJRU5ErkJggg=="

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQxODkxMTY1NjFCMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQxODkxMTU1NjFCMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlkNTNkMDU4LWJhNTAtZmY0Zi05NDliLTAzYTRmYjhlMGMxNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdjMDAxZmY4LTVhM2UtMTFlNi1iOWQwLWU4YWEwZWMzYzAyYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgXI61oAAAHnSURBVHjatJZNKERRFMc9TRoLH0nJR1lJUdZGWRiTnZKyEmXKxsJH0/iYSeRjiORjqWTBQpHEQjFhhVgrpayUDRnGBmP43zpPr9ebO/fpnVO/XnPO7f7vnHvOeU8LTc5kMFoFmAU++h0Fw+DOxShaCS5BvsHXCrygNpNROGIS1U34IpzCPkmsiVNYkwU5hQ8lsSMu4XoqIiuLgTCHsJ/appD+9TZ4B3GwKyoa3P6nncpAJ/BQhT6CY7AFxkCA1i2AIfBttYnLZrEMggmQZYq1gRXgBp+gB6zJNrMjPAVCkribniPpRO1UtYc2VDGR6mwVYZG2ZfAMXsCiRSYC6frSYCWgXUV4DvSCAiqWfjBvuttGB6fWn3CHhV+I/xDJFDNXZsVO3bFdi6sIb1j4lyjFOuc2ha/TLXBRb2qU8iQdJGhatwrqFEU/VNtJNHwfFZcYcwMgYVq3Cc4UhcX0enDqjsXYawGnCmuLVDa0U1yv1CZ+uvOEoZD2QDf4ouw1qNyxHRM1sE6IQ+fQgXQrBeMUrwFvHO2UNIkKmwZXoJyeMRLfB1WcfSzSHzZ8ZeZRVprBBajmHCBdKfy5xlHMISyb615OYc3pdlK1qCR2wik8Cp5SvDiCnML39CW5Q+0mBA/Id6Mv+hVgAGYcXD5EPHLDAAAAAElFTkSuQmCC"

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlFRkMxRDE1NjA1MTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlFRkMxRDA1NjA1MTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlkNTNkMDU4LWJhNTAtZmY0Zi05NDliLTAzYTRmYjhlMGMxNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdjMDAxZmY4LTVhM2UtMTFlNi1iOWQwLWU4YWEwZWMzYzAyYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnxJZNoAAAJfSURBVHjaxJddiA5hFMf3K7QbahfZ5cLWsjfk40Kh3vIRiUg+LlxJUm6Ukq1NxNqQSIkL5YZ8RHG1aYV8tDZtSWlz48pHVtK+2yaytH6n/k89TbP7vjPPvO+e+nVm5pmZ/5nznHnmTGV7x+mKibKqDO7xCkbhO7yBa7AbppVD/K/8DFgKe+EmfIYL0FBK8RxUwmxYBcegF6bCIXgPW0sl7uybpqADVioLj2EmPIAjpRSP2ltYDye1fxYOZCnuF1sPnIHF3riNHYc92r4Ii7IS94vNUt2mJ74Pjd551+EyTFIRZiKe0w1NaANcgmHYBn3Q4p17FPKwDhZGxds0uCNhACMwAI/gILTCc5gDXVCr84bgrra3++Lz4QRMhzuwMyAbX2ET9MMC2O+Ndcuv8MVtjZ2s7Wq4HRjAT73vZlu84/3yLU68MWYRKCaAZngiIfPzIuO9XladDcg3OHGb45qYmxcKwCp4jebU/I3I+A/5eu/YkHxdhURz4zydC8DsXmRseYH9P/K1kePP3IaJLyswf3EBzILfes2cvY659mXMsdW+eFMRBeQH8AKe6pM5qABMeN8Y68CYZuJTiqxgF8BHFds7WKulNXUzMZjg/GoJfwgVduKfUlzX7M9diHhPiussA7dgV6h4V8prgwOoUuXmJyIAE/8FVwKylzoA92E55627ZQvAiefV8o6WMwC/mXgI7YFvT6IAom2UNYCHM8jA1bS/S+dhozqSNGZtVWfIv1q3erHOBK/hP/VoS1TABa1mnLFhdZyntJRu1ud3rj6pI8pOn/p3+yv5kiRF/wUYAKFZfAmJwN1nAAAAAElFTkSuQmCC"

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTJEQjIxNjQ1NjFEMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTA5RTNCMDg1NjFDMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlkNTNkMDU4LWJhNTAtZmY0Zi05NDliLTAzYTRmYjhlMGMxNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdjMDAxZmY4LTVhM2UtMTFlNi1iOWQwLWU4YWEwZWMzYzAyYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi9V6zkAAAJNSURBVHjavJbNS1RRGIdnhrH8wEWmiVMoQhnj+LnwYyGBQYgptAj6CwoXLWJyISgzoi4EFzmh1CIINyIohYuIoCykXWBZTdPHImkWfVkaJC1cOP4O/C4chntnzrn32IGHe2fuGZ73nHnf91z/8MSkz/CoAXdBB0iBIfDMbmLgAMRCdBaUgDbwCPT/D3k7qM767hC4ZxeAKXkIlIIlcBnsqQRgQn4CrIKH3Oo5cAVk8gXgVX4cPAUnQRcDKGbCDeQIoM+rPETxKem7M+ABA7gDrjoEcB90upVXUVxn86wbLDOA2+CaQwCzbuSVYAWczjHnHFdXCGbAdZs5EV35Ma44rDC3hwGIVSbAYNbz5zryCorrNX7TKwVwg91OjLSoiKCmOOLibxKZvQgugSnwj1XxJaAofgIaPFTGBbAACkSigc8qpVYOHoMmA82og1Wi1OGOUtxsQPyVh01aRV5GcYsB8TeKP6kcLEcobjUg/k7xR9Uj9bwh8Q+KPzhNkOWHeZ0HUZuWqDN+Uvw+1yRZfhGM8/4mW6KbADYpTuWbKDcZ0blGeB9nS/SxM/k1xe9UJssrb+Q1Ju1AQmMHfvFASapukSyXW6duAL8pfq3z/1hy8fpTm/VMNYAtitd1kyMordqu7GI2OTAtPd+m+JWbkghIyeY0RABj0g5Eef+H4pdu6zGYlWxOI87rKAPYBS/AmpcuFLRJNpUAbpl42bfkTme1SLAN1m2SPbqILwQ+qf4zbj5b8r889oTkLbvTG7bHHd8BDUse1vyd38TnfQEGAMPVe5c2v5sjAAAAAElFTkSuQmCC"

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQxODkxMUU1NjFCMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQxODkxMUQ1NjFCMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlkNTNkMDU4LWJhNTAtZmY0Zi05NDliLTAzYTRmYjhlMGMxNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdjMDAxZmY4LTVhM2UtMTFlNi1iOWQwLWU4YWEwZWMzYzAyYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnlGf8kAAAKpSURBVHjatJdtaI5RGMe3PWymZTIrniR5iWltK2mFD5Z5K5OXlJIttliNRKL2Se3DyoSIlCTlAyGtKfmAhTTZzJqXnlK2teJhZOW1GP+j/6PT6ZzrPvfcz1W/up9zX+f8z7nu67rOltnY1JwRgc0HjaACFIA+cA20gE+uSVkRCG8CXWALiIMcMJeb6QSz0yWuRC6CcY73sxiBWDrED4LsAJ8SUJUO8QpPv2W+4mqsCEz3WDTfUzzfR3wBSIAXoB/cAYXCov2e4n1B4nnghpGdKqznhUWveAj/ZtKJ4kvBFIvPajDBsfAJRkmy06AnSDzmmJwpJOZnsBJ0WN6NgFNgr2tXY7TndvARTDJ87kpdCjYIFoFVoBJMBAPgKnguhUQXHwbrwSUwlWNPQI0wfzJ9e8FNoptqPvOYxN+Csv0emAkWgzKwkCczTfm0gSRP6DJVrt3gHft8rk08zkUegO/gIZNEfbdHzNYZ9FXV8Bis4fw488Jm07RK2s8NZ+vi4/m9N4JiYyGVhKUUfMuJrUZe5AmXR5ml0x3WxRvAHK0TFWvOS3hLHWBEdvD6NG2FQ7zSMrYrtVklvt14uVt7rgavwC3+3uMQ2WoZU59juWU8xgP/FTfLqBbs5A63aQlVKoS33HJzHTKqSbcNKfF14IORhGfASX7/sRz/Ar4KmX2OVZLFCNUJvu9TQkk9CSy2D9Qz/GvBD4dfIatFdb3jQgUk2LL/ldoFlpWrvbbwW91mOCXLFd79BJv1k2fw9D3CpGfgF5+PuK5IDzsLnto6XJcwKWHs/tgohNXVetTVXl8KE4eN35e1SPhaB/PGKv464ObSLcm2G8bapFvtupChNrvPqzSMf2R/vXaH8B2x+f+PeCKE7xs2qcjEB0P4DkT9T8NQiKRrtw3+EWAAaAmEB9o9+lkAAAAASUVORK5CYII="

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTA5RTNCMDE1NjFDMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTA5RTNCMDA1NjFDMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlkNTNkMDU4LWJhNTAtZmY0Zi05NDliLTAzYTRmYjhlMGMxNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdjMDAxZmY4LTVhM2UtMTFlNi1iOWQwLWU4YWEwZWMzYzAyYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiFN7XIAAAICSURBVHjaxJe/SwJhGMcvNVcL0qK2oBzahIbGghQaG/oxt6SFNbcEFbSaVDa0mw2uoUH9AVGbIAhNQaBJuhpSzxPfg7fj7t6789Ue+Cz34/nce++v5w0cHJ9qDmKYSBDLxDwxTYzgXot4JZ6Ie6JEfMkSBiT3Ofk+kSLCFs+MgwUiTXwQF0QGH2UaPhvpBlElDm2kZjGGd6rI4VjsJy6JPFpiFUNAs/kTeeTyy8T8wC2R1NRFEjn9dmLul1VNfXDOMyvxOrHrItk3cBo7cPwR8+jNKmpdg7iyuJfVp6Eu5ikTUSRdRL+em9yPwPUrDmKeqpJWiDnxtxqCXUEWx13OUyfSR5ucfD2uiwcl1SPB4tiApRwxFs96EN4Rk8SUBynHDG8SIcMyKM5Tq9gi3oWd68FGapYz5NP+KVjcNlmNZCvSNTGB1vLeu4T+tlvhxJxtFtc8fPAKfvUb+reCQdZw+H6Nxc89/LEIBpVb+QuLyz12V9iDvKyLm4rlBcncL7G4Y7Gge5XnJNsrVyQdn1AA1BXJtyWtzYjbYgsVYr8jrVee4gJSQFnqNGTFnjE4941VzbVHFPvQ0iJyWxZ7XWINA0RV5JCzK6uru6gSNiUDTra01pEjZZTKThLcH1HiyOU8b+KdqNinbs9OLRxHTnBoiwuHtlE88ykc2sqgI/u6HwEGAPyefJDjEDxbAAAAAElFTkSuQmCC"

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQxODkxMUE1NjFCMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQxODkxMTk1NjFCMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlkNTNkMDU4LWJhNTAtZmY0Zi05NDliLTAzYTRmYjhlMGMxNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdjMDAxZmY4LTVhM2UtMTFlNi1iOWQwLWU4YWEwZWMzYzAyYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PldDK2IAAAIISURBVHja7JZLKERRHMY9pjFJZuMdyeQRKfJIiQVRiiixsLBRimTBhkZWimxQVhZKNpQisZGEhVchG5LMgiwoj1Dk7Tv6ro7pjpk7k7mSU7/uuXfOPd/8///vnHsM1q4eHz2an8bxviADNIIRsAdy3RE2aBwfDLY8/PNuvfQE+kElOPVmqu9AK5gCj94U1s1cWloemAAHYB8MgTB3zaWlzYIAcALiQBLIAtngVY44BTSDbtAAwj0UFhFGggSQBt64FBPtI14FZum+FxSAbbsJi3g18ZrF/g44l8a1SX2R6nsQCJ7tazwI0kEm2OCabVGJZJ4o9ernfc430ZdQdBfY7CPulPqTnEjNfO0OJt938Dyeu9wLaGLKvwibOSgG1AsDgFGViXo11FnMtwBCQB1YVnN1Hp3ow3qIfzfngbmSKBoKari0Ppt/fqHilY8Iz8AhnVcFbsGaG6LJYJGu7qBBo8iFSLscsY1LSbRxvijq3sdnRtY9wIHYA00pttIKEOGgNLHgWBEW6bhSrC41k9QXqSp3EukMx6x/44UbucbFoAss0X3VfD4mvVDmQopLeV0iTr/HR0xhHe+vwQCwatzXXd77FeEVEM1FLrik2X6sGVS+t3cezpnp5HexVPd+4uu06cKYYb0OArUi4lQeZ4K8KGwUwtPAosfRx6JHrv/kYe9f+HcIvwswAGZ0YODYvQAgAAAAAElFTkSuQmCC"

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlFRkMxQ0Q1NjA1MTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlFRkMxQ0M1NjA1MTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlkNTNkMDU4LWJhNTAtZmY0Zi05NDliLTAzYTRmYjhlMGMxNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdjMDAxZmY4LTVhM2UtMTFlNi1iOWQwLWU4YWEwZWMzYzAyYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq+KM2cAAAJySURBVHjaxJfLS1VRFMbvvWg16Q8QUwpnQRpIw64pNPMJhgNfiPQwFDFqoNBIpEDIEDUiDF8EIaLYX+ANGtWgh1Zwr4QVBo3FFCu/Bd+GzeI89jmaLfhx7ll77fOdvc7aj5scGLyXUHYM3AafwULC3+6CO+AqeO4TkwRd4C94ZDekPIIbwRCYB70BwhJ3EtQGiIrYOJgAZWHCr8BPdhwJEE8GvJQRvc77jyAbJvwFXHYUdxH9BKrAVpiw2NuY4l6ileCHDkwFPMRLvMdq/8XrruWbUOn1FA0T9hM/wTap/KfgPu+leG5YolV+omJ5Dukz4tNg1RpphhiT4lnhCzYFiboKG/HzITFSPJdcKzCV+E/mJ5wP6sAzpnePq8+h4ZXqGjAKTv/LEeepOSiC3UeRalt4DNw8qm9shK/4iL7kNFrj/VnQDi4eRnHJNvhA+WU16gBpMAm+kkn6OtSKFUtYRntK+a+BKVDNhcEIZ+mbYsyBhOuVL8P0isAyKLHaSuirYUzmIN/4gvLN8frQZ881a/YLxqYddP6AdfCB9fJehAtU0DtQrEaqTdqKGOu1n69RZJXI/bYe8Q4LLKp5ZUMK7ozrN95UvlKwAXIB/XKMOaf8m1GKS6ermdc+rqvaxHeLv1tU2+sowkvKVwHaWDx1auQ5+pa5kFSovktRqnqepwh7Lj/hyGb5AqbtG6+t4LF61nc+y3nEu1bq7EP9DE8UnazgIv5eYdtx1aePhRpprZY3HeY/A9vSjvN0OMpo9UGgnztUVBtn39gnkN88vjbqU7+PZbnOd7Nv7P3Y2AILSh7aAMpBoVVAb8AiUxt7h9oXYAC3panOpNPoxgAAAABJRU5ErkJggg=="

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QTgwQkE5QTU2RkQxMUU2QUIwNUEwMkNGNDhEOTA4MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QTgwQkE5QjU2RkQxMUU2QUIwNUEwMkNGNDhEOTA4MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZCRTdGRTdGNTZFQTExRTZBQjA1QTAyQ0Y0OEQ5MDgxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZCRTdGRTgwNTZFQTExRTZBQjA1QTAyQ0Y0OEQ5MDgxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+zEj2zwAAAWZJREFUeNqUkksoRFEYx++MacpGZslKWVIWZkUWSKRYsrCzvzuPhRV2MhvZk9ixIjtTkzxqojwKJaw0C5MpIsnj9+m7+pzu3Ma/fvee+z3+55x7Tizd3uMZVUEbdEEHtMAXnMIu7MABfAQNMTWohTEYhTovWvewBPNQSvBohc0KGgPVw5RONhDnsRHRvKaESXrWZQWpiNkW4Q1GyuRTYlCAGg3ID7vT9zUcaly22CT/DBr0LSrIFm6M4zv40Ai9Jj6oMV9rAt2KwbkJJHW2GT1Se7yzmkua+JkY5J19yfImoNrEZDxulh4oLwZZ+HQSOXiGfujTcc6pkZ6sGDzAsZPc0xPYgm1YgH2n5giKCXPeaZOcdor9kCNclUdcP5Z1mZXqCVasQQky/zDIaM+vgWgOLitovtBazzV4gSF4jGguwjC8hhn8XAzolBsW0iw3tltrvHIGohO995NwpduScbPm/uhbgAEA1HhNf6Ju9wUAAAAASUVORK5CYII="

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QIIRXhpZgAATU0AKgAAAAgADAEOAAIAAAAmAAAAngEPAAIAAAAGAAAAxAEQAAIAAAAHAAAAygESAAMAAAABAAEAAAEaAAUAAAABAAAA0gEbAAUAAAABAAAA2gEoAAMAAAABAAIAAAExAAIAAAAIAAAA4gEyAAIAAAAUAAAA6gE8AAIAAAAHAAAA/oKYAAIAAAAlAAABBodpAAQAAAABAAABLAAAAABQcm9jZXNzZWQgd2l0aCBWU0NPY2FtIHdpdGggdDEgcHJlc2V0AEFwcGxlAGlQaG9uZQAAAAAASAAAAAEAAABIAAAAAVZTQ09jYW0AMjAxNjowMjoyMSAyMzoyNjowNQBpUGhvbmUAAENvcHlyaWdodCAyMDE2LiBBbGwgcmlnaHRzIHJlc2VydmVkLgAAAAqQAAAHAAAABDAyMjGQAwACAAAAFAAAAaqQBAACAAAAFAAAAb6RAQAHAAAABAECAwCShgAHAAAALQAAAdKgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAtCgAwAEAAAAAQAAA8CkBgADAAAAAQAAAAAAAAAAMjAxNjowMjoyMSAyMzoyNjowNQAyMDE2OjAyOjIxIDIzOjI2OjA1AEFTQ0lJAAAAUHJvY2Vzc2VkIHdpdGggVlNDT2NhbSB3aXRoIHQxIHByZXNldAD/4QtKaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iVlNDT2NhbSIgeG1wOk1vZGlmeURhdGU9IjIwMTYtMDItMjFUMjM6MjY6MDUiIHhtcDpDcmVhdGVEYXRlPSIyMDE2LTAyLTIxVDIzOjI2OjA1IiBwaG90b3Nob3A6RGF0ZUNyZWF0ZWQ9IjIwMTYtMDItMjFUMjM6MjY6MDUiPiA8ZGM6ZGVzY3JpcHRpb24+IDxyZGY6QWx0PiA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlByb2Nlc3NlZCB3aXRoIFZTQ09jYW0gd2l0aCB0MSBwcmVzZXQ8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOmRlc2NyaXB0aW9uPiA8ZGM6cmlnaHRzPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5Db3B5cmlnaHQgMjAxNi4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnJpZ2h0cz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/PgD/7QCaUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGIcAVoAAxslRxwCAAACAAIcAnQAJENvcHlyaWdodCAyMDE2LiBBbGwgcmlnaHRzIHJlc2VydmVkLhwCeAAlUHJvY2Vzc2VkIHdpdGggVlNDT2NhbSB3aXRoIHQxIHByZXNldDhCSU0EJQAAAAAAEGLrC/YphqUrlcBSLl7d/t//wAARCAPAAtAD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"

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAATCAYAAABLN4eXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QTgwQkE5RTU2RkQxMUU2QUIwNUEwMkNGNDhEOTA4MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QTgwQkE5RjU2RkQxMUU2QUIwNUEwMkNGNDhEOTA4MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdBODBCQTlDNTZGRDExRTZBQjA1QTAyQ0Y0OEQ5MDgxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdBODBCQTlENTZGRDExRTZBQjA1QTAyQ0Y0OEQ5MDgxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8gVPZQAAASFJREFUeNpiNLF2ZUACjEAcC8RVQCwHxNeBuB+IlyArYmJABSDFC4FYHYg5gdgIiBcDcQkuTSxAXMaAHVQjq0XWxA3EfDg0CQAxFzZNH4H4Eg5NF4D4Cy4/pQLxezSxt0CczoDmD2RwCog1gTgeiJWB+BY0IF7h0hQIxL7QEOxCEpcC4nlAvAmINyA7bz4QrwPiRCBWRbNdAyq+HohnwjRFA3ECkiJbNE3WSOw0IA4AaSpEU5QMxOxQNgcQp6DJVzJBkw4yUALiRdDUsASanFDCgRGY9kSh8SDFQBg8ARkGsuk1EJczEAdKQephobcCqhkfeAHEq5GD/A8QbyOgaTMQ/0VPRqcJaDqGLe1dJKDpBjZNoHT2A4eG70B8F8YBCDAA11wxX9aVQoAAAAAASUVORK5CYII="

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAegAAAA3CAIAAABILU4VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGQkU3RkU3OTU2RUExMUU2QUIwNUEwMkNGNDhEOTA4MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGQkU3RkU3QTU2RUExMUU2QUIwNUEwMkNGNDhEOTA4MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZCRTdGRTc3NTZFQTExRTZBQjA1QTAyQ0Y0OEQ5MDgxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZCRTdGRTc4NTZFQTExRTZBQjA1QTAyQ0Y0OEQ5MDgxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Yn3i4QAAOEpJREFUeNrsfduS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"

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTJEQjIxNjg1NjFEMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTJEQjIxNjc1NjFEMTFFNjkzNDVDRDM1NTFFQzRDQjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI2MTJjMDk4LTMzNGYtOWY0MC1hODJiLTY4OTZiODAwZjcyNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdjMDAxZmY4LTVhM2UtMTFlNi1iOWQwLWU4YWEwZWMzYzAyYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhJ0OWAAAAC3SURBVHjaYvy7U4oBDVgD8T4o2wmIjyJLMkFpOSA+AMQ5QBwAxGxQHAAVOwBVw8AIteEI1GR8AGSTDcyG1QyEAVgNCxBbArEEksQ3IO6CssuAmAvKBqmxBDnpJ9S9MFANxG1QdhUQtyLJ/WJiIBGAnOQAxH5AXIFkAyuSk2CgA4g3gTQcB2IzJAmQmxuwGP4CpBbmpFAiXBMKcxIIRAHxYmjQyQNxCVS8B4gfQhXHIkcc0UkDIMAAWecj/lHBw38AAAAASUVORK5CYII="

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"createPop\">\n\t\t<a href=\"\" class=\"closeBtn\" @click=\"closePop\"></a>\n\t\t<h3>选择要创建的赛事类型</h3>\n\t\t<p>我们提供两种方式帮助你建立合理的赛事体系</p>\n\t\t<div class=\"createBox\">\n\t\t\t<a href=\"\" class=\"createBtn\">创建快捷赛事</a>\n\t\t\t<p>适用于一到两个阶段即可完整赛程规划的赛事</p>\n\t\t\t<div class=\"or\"></div>\n\t\t\t<a href=\"\" class=\"createBtn leagueEnter\">创建联赛</a>\n\t\t\t<p>适用于大型赛事支持多赛赛程、多赛制的赛事</p>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"m-sidebar\">\n\t\t<ul>\n\t\t\t<li><a href=\"\"><img src=\"" + __webpack_require__(11) + "\" alt=\"\"></a></li>\n\t\t\t<li><a href=\"\"><img src=\"" + __webpack_require__(12) + "\" alt=\"\"></a></li>\n\t\t\t<li @click=\"showPop\"><a href=\"\"><img src=\"" + __webpack_require__(13) + "\" alt=\"\"></a></li>\n\t\t</ul>\n\t</div>\n";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"m-slideInto\">\n\t\t<div class=\"top-logo clearfix\">\n\t\t\t<a href=\"\" class=\"slideout\" @click=\"slideout\"></a>\n\t\t\t<img src=\"" + __webpack_require__(10) + "\" alt=\"\">\n\t\t</div>\n\t\t<ul>\n\t\t\t<li class=\"current\"><a href=\"\"><img src=\"" + __webpack_require__(11) + "\" alt=\"\">首页</a></li>\n\t\t\t<li class=\"arrow\"><a href=\"\"><img src=\"" + __webpack_require__(12) + "\" alt=\"\">申请认证</a></li>\n\t\t\t<li class=\"arrow\" @click=\"showPop\"><a href=\"\"><img src=\"" + __webpack_require__(13) + "\" alt=\"\">创建赛事</a></li>\n\t\t</ul>\n\t</div>\n";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"g-hd\">\n\t\t<div class=\"header_left f-fl\">\n\t\t\t<a href=\"\" class=\"slidein\" @click=\"slidein\"></a>\n\t\t\t<img src=\"" + __webpack_require__(10) + "\" alt=\"\">\n\t\t</div>\n\t\t<div class=\"header_right f-fr\">\n\t\t\t<a href=\"\" class=\"notify\"></a>\n\t\t\t<div class=\"avatar\">\n\t\t\t\t<img src=\"" + __webpack_require__(6) + "\" alt=\"\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"content clearfix\">\r\n          <router-view></router-view>  \r\n </div>\r\n";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<top-head></top-head>\n\t<side-bar></side-bar>\n\t<slide-bar></slide-bar>\n\t<create-pop></create-pop>\n\t<div class=\"backLast\">\n\t\t<div class=\"g-z\">\n\t\t\t<a href=\"\"></a>创建联赛\n\t\t</div>\n\t</div>\n\t<div class=\"g-w\">\n\t\t<div class=\"g-z\">\n\t\t\t<p class=\"m-c-tit\">填写联赛基本信息</p>\n\t\t\t<div class=\"m-c-w\">\n\t\t\t\t<div class=\"m-c-info\">\n\t\t\t\t\t<p class=\"g-c-l\">联赛名称</p>\n\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt\" placeholder=\"请输入赛事名称\" style=\"width:480px;\" v-model=\"name\">\n\t\t\t\t\t<p class=\"g-c-l mt40\">联赛主办方</p>\n\t\t\t\t\t<div class=\"g-c-zbf\">\n\t\t\t\t\t\t<input type=\"radio\" id=\"personal\" class=\"regular-radio\" checked=\"checked\" />\n\t\t\t\t\t\t<label for=\"personal\"></label>\n\t\t\t\t\t\t<label for=\"personal\" class=\"u-c-per\">\n\t\t\t\t\t\t\t<span class=\"u-c-headimg\">\n\t\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(6) + "\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\tblackstar\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"g-c-l mt40\">联赛比赛项目</p>\n\t\t\t\t\t<select class=\"u-c-slt\">\n\t\t\t\t\t\t<option>选择一个竞技项目</option>\n\t\t\t\t\t\t<option>英雄联盟</option>\n\t\t\t\t\t\t<option>星际争霸</option>\n\t\t\t\t\t\t<option>炉石传说</option>\n\t\t\t\t\t\t<option>自由篮球</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<p class=\"g-c-l mt40\">联赛模式</p>\n\t\t\t\t\t<div class=\"g-c-zbf\">\n\t\t\t\t\t    <div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"online\" name=\"matchitem\" class=\"regular-radio\" checked=\"checked\" value=\"1\" v-model=\"mode\"/>\n\t\t\t\t\t\t\t<label for=\"online\"></label>\n\t\t\t\t\t\t\t<label for=\"online\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t纯线上赛事\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"offline\" name=\"matchitem\" class=\"regular-radio\" value=\"2\" v-model=\"mode\"/>\n\t\t\t\t\t\t\t<label for=\"offline\"></label>\n\t\t\t\t\t\t\t<label for=\"offline\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t纯线下赛事\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl h36\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"unite\" name=\"matchitem\" class=\"regular-radio\" value=\"3\" v-model=\"mode\"/>\n\t\t\t\t\t\t\t<label for=\"unite\"></label>\n\t\t\t\t\t\t\t<label for=\"unite\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t线上与线下结合模式\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"confirmBtn\">\n\t\t\t\t<a href=\"\" class=\"nextBtn\" @click=\"nextStep\"><i></i>确认，进入赛制设置</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"steps\">\n\t\t\t<span class=\"line\"></span>\n\t\t\t<ul>\n\t\t\t\t<li class=\"current\"><i></i>填写基本信息</li>\n\t\t\t\t<li><i></i>生成联赛主页</li>\n\t\t\t\t<li><i></i>设置赛事体系</li>\n\t\t\t\t<li><i></i>完善信息并发布</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<top-head></top-head>\n\t<side-bar></side-bar>\n\t<slide-bar></slide-bar>\n\t<create-pop></create-pop>\n\t<div class=\"backLast\">\n\t\t<div class=\"g-z\">\n\t\t\t<a href=\"\"></a>创建快捷赛事\n\t\t</div>\n\t</div>\n\t<div class=\"g-w\">\n\t\t<div class=\"g-z\">\n\t\t\t<p class=\"m-c-tit\">完善赛事基本信息</p>\n\t\t\t<div class=\"m-c-w\">\n\t\t\t\t<div class=\"m-c-info\">\n\t\t\t\t\t<div class=\"f-c\">\n\t\t\t\t\t\t<p class=\"g-c-l\">赛事名称<span class=\"colfdb f-tip\"></span></p>\n\t\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt\" title=\"赛事名称\" placeholder=\"请输入赛事名称\" style=\"width:480px;\" oninput=\"onInput.call(this)\" v-model=\"formdata.name\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"f-c\">\n\t\t\t\t\t\t<p class=\"g-c-l mt40\">主办方<span class=\"colfdb f-tip\"><i class=\"g-c-tip\"></i></span></p>\n\t\t\t\t\t\t<div class=\"g-c-zbf\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"personal\" class=\"regular-radio\" checked=\"checked\" value=\"\" />\n\t\t\t\t\t\t\t<label for=\"personal\"></label>\n\t\t\t\t\t\t\t<label for=\"personal\" class=\"u-c-per\">\n\t\t\t\t\t\t\t\t<span class=\"u-c-headimg\">\n\t\t\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(42) + "\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t未来老公\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"f-c\">\n\t\t\t\t\t\t<p class=\"g-c-l mt40\">比赛项目<span class=\"colfdb f-tip\"></span></p>\n\t\t\t\t\t\t<select class=\"u-c-slt\" name=\"itemId\" id=\"gameList\" v-model=\"formdata.itemId\" @change=\"getServerList\" required>\n\t\t\t\t\t\t\t<option value=\"\" selected>选择一个竞技项目</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"f-c\">\n\t\t\t\t\t\t<p class=\"g-c-l mt40\">赛事模式<span class=\"colfdb f-tip\"></span></p>\n\t\t\t\t\t\t<div class=\"g-c-zbf\">\n\t\t\t\t\t\t    <div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"online\" name=\"matchitem\" class=\"regular-radio\" checked=\"checked\" value=\"1\" v-model=\"formdata.mode\"/>\n\t\t\t\t\t\t\t\t<label for=\"online\" @click=\"slideup\"></label>\n\t\t\t\t\t\t\t\t<label for=\"online\" class=\"u-c-per\" @click=\"slideup\">\t\t\n\t\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t\t纯线上赛事\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"offline\" name=\"matchitem\" class=\"regular-radio\" value=\"2\" v-model=\"formdata.mode\"/>\n\t\t\t\t\t\t\t\t<label for=\"offline\" @click=\"slidedown\"></label>\n\t\t\t\t\t\t\t\t<label for=\"offline\" class=\"u-c-per\" @click=\"slidedown\">\t\t\n\t\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t\t纯线下赛事\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"f-fl h36\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"unite\" name=\"matchitem\" class=\"regular-radio\" value=\"3\" v-model=\"formdata.mode\"/>\n\t\t\t\t\t\t\t\t<label for=\"unite\" @click=\"slidedown\"></label>\n\t\t\t\t\t\t\t\t<label for=\"unite\" class=\"u-c-per\" @click=\"slidedown\">\t\t\n\t\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t\t线上与线下结合模式\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-c-xx\">\n\t\t\t\t\t\t<div class=\"f-c\">\n\t\t\t\t\t\t\t<p class=\"g-c-l mt40\">比赛地点<span class=\"colfdb f-tip\"></span></p>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt\" title=\"比赛地点\" placeholder=\"请输入比赛地点\" style=\"width:480px;\" v-model=\"formdata.addreass\" req>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-c\">\n\t\t\t\t\t\t\t<p class=\"g-c-l mt40\">具体地址<span class=\"colfdb f-tip\"></span></p>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt\" title=\"具体地址\" placeholder=\"请输入具体地址\" style=\"width:480px;\" v-model=\"formdata.detailAddreass\" req>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"m-c-tit\">设置选手参赛方式</p>\n\t\t\t<div class=\"m-c-w\">\n\t\t\t\t<div class=\"m-c-info\">\n\t\t\t\t\t<div class=\"f-c\">\n\t\t\t\t\t\t<p class=\"g-c-l\">最大参与人数（需要在4-512之间）<span class=\"colfdb f-tip\"></span></p>\n\t\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t\t<input type=\"text\" id=\"personnum\" class=\"u-c-ipt f-fl\" title=\"参赛人数\" style=\"width: 200px;\" required placeholder=\"请输入参与人数上限\"  v-model=\"formdata.maxNum\" @input=\"numberChange\" onkeyup=\"if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\\D/g,'')}\" onafterpaste=\"if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\\D/g,'')}\">\n\t\t\t\t\t\t\t<div class=\"button_group\">\n\t\t\t\t\t\t\t\t<button class=\"plus\" @click=\"plus\"></button>\n\t\t\t\t\t\t\t\t<button class=\"minus\" @click=\"minus\" disabled=\"true\"></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"g-c-l mt40 f-re\">是否允许用户自主报名\n\t\t\t\t\t\t<div class=\"checkboxThree f-ab\">\n\t\t\t\t\t  \t\t<input type=\"checkbox\" id=\"checkboxThreeInput\" name=\"\" class=\"f-dn\" v-model=\"formdata.allowApply\" v-bind:true-value=\"1\" v-bind:false-value=\"0\"/>\n\t\t\t\t\t\t  \t<label for=\"checkboxThreeInput\" @click=\"isapply\"></label>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"g-c-l mt40 f-re\">\n\t\t\t\t\t\t报名方式\t\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class=\"g-c-zbf\">\n\t\t\t\t\t    <div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"single\" name=\"baoming\" class=\"regular-radio\" checked=\"checked\" v-model=\"formdata.applyType\" value=\"1\" disabled />\n\t\t\t\t\t\t\t<label for=\"single\"></label>\n\t\t\t\t\t\t\t<label for=\"single\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl col8f\">\n\t\t\t\t\t\t\t\t\t个人报名\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"team\" name=\"baoming\" class=\"regular-radio\" v-model=\"formdata.applyType\" value=\"2\" disabled />\n\t\t\t\t\t\t\t<label for=\"team\"></label>\n\t\t\t\t\t\t\t<label for=\"team\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl col8f\">\n\t\t\t\t\t\t\t\t\t战队报名\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"f-c\">\n\t\t\t\t\t\t<p class=\"g-c-l mt40\">设置需要收集的报名信息（多选）<span class=\"colfdb f-tip\"></span></p>\n\t\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t\t<div class=\"f-fl mr56 mb6\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"gamenickname\" class=\"regular-checkboxs\" name=\"bminfo\" v-model=\"formdata.nicknameRequired\" v-bind:true-value=\"1\" v-bind:false-value=\"0\" disabled />\n\t\t\t\t\t\t\t\t<label for=\"gamenickname\"></label>\n\t\t\t\t\t\t\t\t<label for=\"gamenickname\" class=\"u-c-ck col8f\">游戏昵称</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"f-fl mr56 mb6\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"truename\" class=\"regular-checkboxs\" name=\"bminfo\" v-model=\"formdata.nameRequired\" v-bind:true-value=\"1\" v-bind:false-value=\"0\" disabled />\n\t\t\t\t\t\t\t\t<label for=\"truename\"></label>\n\t\t\t\t\t\t\t\t<label for=\"truename\" class=\"u-c-ck col8f\">真实姓名</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"f-fl mr56 mb6\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"idcard\" class=\"regular-checkboxs\" name=\"bminfo\" v-model=\"formdata.idcardRequired\" v-bind:true-value=\"1\" v-bind:false-value=\"0\" disabled />\n\t\t\t\t\t\t\t\t<label for=\"idcard\"></label>\n\t\t\t\t\t\t\t\t<label for=\"idcard\" class=\"u-c-ck col8f\">有效身份证号</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"f-fl mr56\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"qqnumber\" class=\"regular-checkboxs\" name=\"bminfo\" v-model=\"formdata.qqRequired\" v-bind:true-value=\"1\" v-bind:false-value=\"0\" disabled />\n\t\t\t\t\t\t\t\t<label for=\"qqnumber\"></label>\n\t\t\t\t\t\t\t\t<label for=\"qqnumber\" class=\"u-c-ck col8f\">QQ号</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"f-fl mr56\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"wxnumber\" class=\"regular-checkboxs\" name=\"bminfo\" v-model=\"formdata.wechatRequired\" v-bind:true-value=\"1\" v-bind:false-value=\"0\" disabled />\n\t\t\t\t\t\t\t\t<label for=\"wxnumber\"></label>\n\t\t\t\t\t\t\t\t<label for=\"wxnumber\" class=\"u-c-ck col8f\">微信号</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"f-fl mr56\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"telephone\" class=\"regular-checkboxs\" name=\"bminfo\" v-model=\"formdata.telephoneRequired\" v-bind:true-value=\"1\" v-bind:false-value=\"0\" disabled />\n\t\t\t\t\t\t\t\t<label for=\"telephone\"></label>\n\t\t\t\t\t\t\t\t<label for=\"telephone\" class=\"u-c-ck col8f\">手机号</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"f-fl mr56\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"another\" class=\"regular-checkboxs\" name=\"bminfo\" v-model=\"formdata.otherRequired\" v-bind:true-value=\"1\" v-bind:false-value=\"0\" disabled />\n\t\t\t\t\t\t\t\t<label for=\"another\" @click=\"showotherinfo\"></label>\n\t\t\t\t\t\t\t\t<label for=\"another\" class=\"u-c-ck col8f\" @click=\"showotherinfo\">其他</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"f-dn\" id=\"otherinfocherk\">\n\t\t\t\t\t\t<div class=\"f-c\">\n\t\t\t\t\t\t\t<p class=\"g-c-l mt40\">设置其他的报名信息<span class=\"colfdb f-tip\"></span></p>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt\" placeholder=\"请输入报名信息\" style=\"width:480px;\" v-model=\"formdata.otherDescribe\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"m-c-tit\">设置赛事相关时间节点</p>\n\t\t\t<div class=\"m-c-w\">\n\t\t\t\t<div class=\"m-c-info\">\n\t\t\t\t\t<div class=\"f-c\">\n\t\t\t\t\t\t<p class=\"g-c-l\">赛事开始时间<span class=\"colfdb f-tip\"></span></p>\n\t\t\t\t\t\t<div style=\"width: 200px; position:relative;\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt form_datetime\" title=\"赛事开始时间\" id=\"activityBegin\" placeholder=\"请输入开赛时间\" style=\"width:200px;\" v-model=\"formdata.activityBegin\" required>\n\t\t\t\t\t\t\t<label for=\"activityBegin\" class=\"add-on\"></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"f-c\">\n\t\t\t\t\t\t<p class=\"g-c-l mt40\">报名时间<span class=\"colfdb f-tip\"></span></p>\n\t\t\t\t\t\t<div class=\"g-c-timeipt\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt form_datetime\" id=\"applyBegin\" placeholder=\"请输入开始时间\" style=\"width:200px;\" v-model=\"formdata.applyBegin\" disabled>\n\t\t\t\t\t\t\t<label for=\"applyBegin\" class=\"add-on\"></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t&nbsp－&nbsp\n\t\t\t\t\t\t<div class=\"g-c-timeipt\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt form_datetime\" id=\"applyEnd\" placeholder=\"请输入结束时间\" style=\"width:200px;\" v-model=\"formdata.applyEnd\" disabled/>\n\t\t\t\t\t\t\t<label for=\"applyEnd\" class=\"add-on\"></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"g-c-l mt40\">签到时间</p>\n\t\t\t\t\t<div class=\"g-c-qd\">\n\t\t\t\t\t\t<input type=\"checkbox\" id=\"signtime\" class=\"regular-checkboxs\" name=\"\" v-model=\"formdata.needSign\" v-bind:true-value=\"1\" v-bind:false-value=\"0\" disabled/>\n\t\t\t\t\t\t<label for=\"signtime\" @click=\"signtime\"></label><span class=\"u-c-ck col8f\">要求参赛者赛前签到 (仅签到一次)<span class=\"colfdb\">&nbsp&nbsp•&nbsp&nbsp</span>比赛开始前</span>\n\t\t\t\t\t\t<select class=\"u-c-slt u-c-tslt col8f\" name=\"needSignMinu\" v-model=\"formdata.needSignMinu\" disabled>\n\t\t\t\t\t\t\t<option v-bind:value=\"10\" selected>10</option>\n\t\t\t\t\t\t\t<option v-bind:value=\"15\">15</option>\n\t\t\t\t\t\t\t<option v-bind:value=\"20\">20</option>\n\t\t\t\t\t\t\t<option v-bind:value=\"25\">25</option>\n\t\t\t\t\t\t\t<option v-bind:value=\"30\">30</option>\n\t\t\t\t\t\t\t<option v-bind:value=\"35\">35</option>\n\t\t\t\t\t\t\t<option v-bind:value=\"40\">40</option>\n\t\t\t\t\t\t\t<option v-bind:value=\"45\">45</option>\n\t\t\t\t\t\t\t<option v-bind:value=\"50\">50</option>\n\t\t\t\t\t\t\t<option v-bind:value=\"55\">55</option>\n\t\t\t\t\t\t\t<option v-bind:value=\"60\">60</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<span class=\"u-c-ck col8f\">分钟</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"confirmBtn mb120\">\n\t\t\t\t<a href=\"\" class=\"nextBtn\" @click=\"goToSetformat\"><i></i>确认，进入赛制设置</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"steps\">\n\t\t\t<span class=\"line\"></span>\n\t\t\t<ul>\n\t\t\t\t<li class=\"current\"><i></i>填写基本信息</li>\n\t\t\t\t<li><i></i>设置参赛方式</li>\n\t\t\t\t<li><i></i>确认赛事时间</li>\n\t\t\t\t<li><i></i>设置采用赛制</li>\n\t\t\t\t<li><i></i>完善信息并发布</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<top-head></top-head>\n\t<side-bar></side-bar>\n\t<slide-bar></slide-bar>\n\t<create-pop></create-pop>\n<div class=\"landregister\">\n\t\t<div class=\"landreg_head\">\n\t\t\t<ul class=\"landreg_tab\">\n\t\t\t\t<li class=\"reg_active\" @click=\"changeLand\">登录</li>\n\t\t\t\t<li @click=\"changeReg\">注册</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"landreg_content\" @click=\"inputFoucs\">\n\t\t\t<div class=\"landreg_list land_list\" v-show=\"landReg\">\n\t\t\t\t<p class=\"landreg_tip\"><span>•</span>加入开赛吧开启全新办赛、参赛体验!</p>\n\t\t\t\t<div class=\"landreg_form\">\n\t\t\t\t\t<div class=\"form_account form_list\">\n\t\t\t\t\t\t<label class=\"reg_label\"><img src=\"" + __webpack_require__(8) + "\"></label>\n\t\t\t\t\t\t<input class=\"input_text\" type=\"text\" placeholder=\"手机号／网娱大师帐号\" v-model=\"account\" @blur=\"blurPhone\">\n\t\t\t\t\t\t<span class=\"reg_error\"><img src=\"" + __webpack_require__(1) + "\"><i class=\"error_tip\">手机号码位数不对</i></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form_pw form_list\">\n\t\t\t\t\t\t<label class=\"reg_label\"><img src=\"" + __webpack_require__(14) + "\"></label>\n\t\t\t\t\t\t<input class=\"input_text\" type=\"password\" placeholder=\"请输入密码\" v-model=\"password\" @blur=\"getpwd\">\n\t\t\t\t\t\t<span class=\"reg_error\"><img src=\"" + __webpack_require__(1) + "\"><i class=\"error_tip\">密码位数不对</i></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"password_st clearfix\">\n\t\t\t\t\t<div class=\"remeber_pw\">\n\t\t\t\t\t\t<input type=\"checkbox\" id=\"auto_land\" v-model=\"checked\">\n\t\t\t\t\t\t<label class=\"remeber_label\" for=\"auto_land\">下次自动登录</label>\n\t\t\t\t\t\t<label for=\"auto_land\" class=\"float_checkbox\"><span class=\"check_gou\" v-show=\"checked\">√</span></label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"forgot_pw\"><a href=\"\">忘记密码？</a></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"twolines\"></div>\n\t\t\t\t<div class=\"allow_login\" v-show=\"allowLogin\" @click=\"logIn\">登录</div>\n\t\t\t\t<div class=\"login_in\" v-else>登录</div>\n\t\t\t</div>\n\t\t\t<div class=\"landreg_list reg_list\" v-else>\n\t\t\t\t<p class=\"landreg_tip\"><span>•</span>加入开赛吧开启全新办赛、参赛体验!</p>\n\t\t\t\t<div class=\"landreg_form\">\n\t\t\t\t\t<div class=\"form_account form_list\">\n\t\t\t\t\t\t<label class=\"reg_label\"><img src=\"" + __webpack_require__(8) + "\"></label>\n\t\t\t\t\t\t<input class=\"input_text\" type=\"text\" placeholder=\"手机号\" v-model=\"account\" @blur=\"blurPhone\">\n\t\t\t\t\t\t<span class=\"reg_error\"><img src=\"" + __webpack_require__(1) + "\"><i class=\"error_tip\">手机号码位数不对</i></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form_ident form_list\">\n\t\t\t\t\t\t<label class=\"reg_label\"><img src=\"" + __webpack_require__(41) + "\"></label>\n\t\t\t\t\t\t<input class=\"input_text\" type=\"text\" placeholder=\"验证码\" v-model=\"ident\">\n\t\t\t\t\t\t<div class=\"get_indent\" @click=\"getIdent\">获取验证码</div>\n\t\t\t\t\t\t<span class=\"reg_error\"><img src=\"" + __webpack_require__(1) + "\"><i class=\"error_tip\">该手机号已经注册</i></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form_nickname form_list\">\n\t\t\t\t\t\t<label class=\"reg_label\"><img src=\"" + __webpack_require__(43) + "\"></label>\n\t\t\t\t\t\t<input class=\"input_text\" type=\"text\" maxlength='8' placeholder=\"昵称(最多8位，允许数字字母常用符号)\" v-model=\"nickname\" @blur=\"getNickname\">\n\t\t\t\t\t\t<span class=\"reg_error\"><img src=\"" + __webpack_require__(1) + "\"><i class=\"error_tip\">昵称有非法字符</i></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form_pw form_list\">\n\t\t\t\t\t\t<label class=\"reg_label\"><img src=\"" + __webpack_require__(14) + "\"></label>\n\t\t\t\t\t\t<input class=\"input_text\" type=\"password\" placeholder=\"密码(6-16位，允许数字字母常用符号)\" maxlength='16' v-model=\"password\" @blur=\"getpwd\">\n\t\t\t\t\t\t<span class=\"reg_error\"><img src=\"" + __webpack_require__(1) + "\"><i class=\"error_tip\">密码位数太短</i></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"accept_rule\">\n\t\t\t\t\t\t<input type=\"checkbox\" id=\"accept_input\" checked v-model=\"checked\"  @change=\"acceptRule\">\n\t\t\t\t\t\t<span>我接受<i>《开赛吧服务条款》</i></span>\n\t\t\t\t\t\t<label for=\"accept_input\" class=\"float_checkbox\"><span class=\"check_gou\" v-show=\"checked\">√</span></label>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"twolines\"></div>\n\t\t\t\t<div class=\"allow_reg\" @click=\"regIn\" v-show=\"allowReg\">注册</div>\n\t\t\t\t<div class=\"regi_in\" v-else>注册</div>\n\t\t\t</div>\n\t\t</div>\n\n</div>\n";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<top-head></top-head>\n\t<side-bar></side-bar>\n\t<slide-bar></slide-bar>\n\t<create-pop></create-pop>\n\t<div class=\"g-w mt90 f-re\">\n\t\t<div class=\"g-q-hb\">\n\t\t\t<img src=\"" + __webpack_require__(32) + "\">\n\t\t</div>\n\t\t<div class=\"g-q-info\">\n\t\t\t<div class=\"g-q-fbs\">\n\t\t\t\t<button type=\"button\" class=\"u-q-start\">\n\t\t\t\t\t<i class=\"s-q-start\"></i>\n\t\t\t\t\t开始赛事进程\n\t\t\t\t</button>\n\t\t\t\t<p class=\"g-q-remtime\">距离开赛还有<span class=\"col42a\">01</span>天&nbsp<span class=\"colfdb\">•</span>&nbsp<span class=\"col42a\">03:09</span></p>\n\t\t\t\t<a href=\"#\" class=\"u-q-enter\">我也要参与</a>\n\t\t\t</div>\n\t\t\t<p class=\"g-q-name\">浙江省网娱大师-WYG真英雄城市争霸赛</p>\n\t\t\t<div class=\"g-q-zbf\">\n\t\t\t\t<i class=\"g-q-hp f-fl\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(6) + "\">\n\t\t\t\t</i>\n\t\t\t\t<span class=\"f-fl ml20\">网娱官方赛事出品</span>\n\t\t\t\t<span class=\"col7a8 f-fl ml20\">2016-7-29 13:03发布</span>\n\t\t\t</div>\n\t\t\t<p class=\"g-q-jj col7a8\">赛事还没有简介信息，<a href=\"#\">去完善</a><i></i></p>\n\t\t\t<p class=\"col7a8 g-q-dz\">地址&nbsp<span class=\"colfdb\">•</span>&nbsp上海市徐汇区港汇恒隆广场</p>\n\t\t\t<ul class=\"g-q-tab clearfix\">\n\t\t\t\t<li class=\"g-q-tabon\">赛事信息</li>\n\t\t\t\t<li>对阵图预览</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"g-q-gofb\">当前赛事<a href=\"#\">尚未发布</a>，前往管理赛事页面，完善赛事信息并<a href=\"#\">发布</a>，让更多用户看到你的赛事。</div>\n\t\t<div class=\"g-q-ssinfo\">\n\t\t\t<div class=\"clearfix bb2a3\">\n\t\t\t\t<div style=\"width: 223px;\" class=\"g-q-if f-fl\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(40) + "\" class=\"f-ab\">\n\t\t\t\t\t<div class=\"g-q-if-in\">\n\t\t\t\t\t\t<p class=\"g-q-if-p1\">比赛项目</p>\n\t\t\t\t\t\t<p class=\"g-q-if-p2\">王者荣耀</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"width: 223px;\" class=\"g-q-if f-fl\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(35) + "\" class=\"f-ab\">\n\t\t\t\t\t<div class=\"g-q-if-in\">\n\t\t\t\t\t\t<p class=\"g-q-if-p1\">赛事模式</p>\n\t\t\t\t\t\t<p class=\"g-q-if-p2\">线上赛事</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"width: 330px;\" class=\"g-q-if f-fl\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(34) + "\" class=\"f-ab\">\n\t\t\t\t\t<div class=\"g-q-if-in\">\n\t\t\t\t\t\t<p class=\"g-q-if-p1\">赛事阶段</p>\n\t\t\t\t\t\t<p class=\"g-q-if-p2\">双阶段（小组赛+淘汰赛）</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"width: 150px; margin-left: 40px;\" class=\"g-q-if f-fl\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(39) + "\" class=\"f-ab\">\n\t\t\t\t\t<div class=\"g-q-if-in\">\n\t\t\t\t\t\t<p class=\"g-q-if-p1\">赛制</p>\n\t\t\t\t\t\t<p class=\"g-q-if-p2\">单败淘汰制</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"clearfix pt20\">\n\t\t\t\t<div style=\"width: 223px;\" class=\"g-q-if f-fl\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(37) + "\" class=\"f-ab\">\n\t\t\t\t\t<div class=\"g-q-if-in\">\n\t\t\t\t\t\t<p class=\"g-q-if-p1\">最大参与人数</p>\n\t\t\t\t\t\t<p class=\"g-q-if-p2\">512人</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"width: 223px;\" class=\"g-q-if f-fl\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(38) + "\" class=\"f-ab\">\n\t\t\t\t\t<div class=\"g-q-if-in\">\n\t\t\t\t\t\t<p class=\"g-q-if-p1\">比赛开始时间</p>\n\t\t\t\t\t\t<p class=\"g-q-if-p2\">2016.6.11 18:00</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"width: 330px;\" class=\"g-q-if f-fl\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(33) + "\" class=\"f-ab\">\n\t\t\t\t\t<div class=\"g-q-if-in\">\n\t\t\t\t\t\t<p class=\"g-q-if-p1\">报名时间</p>\n\t\t\t\t\t\t<p class=\"g-q-if-p2\">2016.6.11 18:00 - 2016.6.12 13:00</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"width: 150px; margin-left: 40px;\" class=\"g-q-if f-fl\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(36) + "\" class=\"f-ab\">\n\t\t\t\t\t<div class=\"g-q-if-in\">\n\t\t\t\t\t\t<p class=\"g-q-if-p1\">签到时间</p>\n\t\t\t\t\t\t<p class=\"g-q-if-p2\">开赛前1小时</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"g-q-jx\">\n\t\t\t<p class=\"g-q-jxp\">赛事奖项</p>\n\t\t\t<p class=\"g-q-jj col7a8\" style=\"margin-bottom: 0;\">还没有赛事奖项，<a href=\"#\">去完善</a><i></i></p>\n\t\t</div>\n\t\t<div class=\"g-q-jx\" style=\"margin-bottom:100px;\">\n\t\t\t<p class=\"g-q-jxp\">赛事规则</p>\n\t\t\t<p class=\"g-q-jj col7a8\" style=\"margin-bottom: 0;\">还没有赛事规则，<a href=\"#\">去完善</a><i></i></p>\n\t\t</div>\n\t\t<div class=\"steps infosteps\">\n\t\t\t<span class=\"line\"></span>\n\t\t\t<ul>\n\t\t\t\t<li><i></i>填写基本信息</li>\n\t\t\t\t<li><i></i>设置参赛方式</li>\n\t\t\t\t<li><i></i>确认赛事时间</li>\n\t\t\t\t<li><i></i>设置采用赛制</li>\n\t\t\t\t<li class=\"current\"><i></i>完善信息并发布</li>\n\t\t\t</ul>\n\t\t\t<a href=\"#\">\n\t\t\t\t<div class=\"g-q-sssz\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(45) + "\">\n\t\t\t\t\t赛事设置\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<top-head></top-head>\n\t<side-bar></side-bar>\n\t<slide-bar></slide-bar>\n\t<create-pop></create-pop>\n\t<div class=\"backLast\">\n\t\t<div class=\"g-z\">\n\t\t\t<a href=\"\"></a>赛制设置\n\t\t</div>\n\t</div>\n\t<div class=\"g-w\">\n\t\t<div class=\"g-z\">\n\t\t\t<p class=\"m-c-tit\">设置赛事采用赛制</p>\n\t\t\t<div class=\"m-c-w\">\n\t\t\t\t<div class=\"m-c-info\">\n\t\t\t\t\t<p class=\"g-c-l\">赛事类型</p>\n\t\t\t\t\t<div class=\"g-c-zbf\">\n\t\t\t\t\t    <div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"online\" name=\"matchitem\" class=\"regular-radio\" checked=\"checked\" value=\"1\" v-model=\"formdata.type\"/>\n\t\t\t\t\t\t\t<label for=\"online\"></label>\n\t\t\t\t\t\t\t<label for=\"online\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t单阶段\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"offline\" name=\"matchitem\" class=\"regular-radio\" value=\"2\" v-model=\"formdata.type\" disabled />\n\t\t\t\t\t\t\t<label for=\"offline\"></label>\n\t\t\t\t\t\t\t<label for=\"offline\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl col8f\">\n\t\t\t\t\t\t\t\t\t双阶段\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"f-c\">\n\t\t\t\t\t\t<p class=\"g-c-l mt40\">采用赛制<span class=\"colfdb f-tip\"></span><span class=\"f-fr\"><span class=\"g-help\"></span>查看赛制帮助</span></p>\n\t\t\t\t\t\t<div class=\"clearfix mb12\">\n\t\t\t\t\t\t\t<div class=\"f-fl g-c-sz\" @click=\"cherksz\" selected=\"1\">\n\t\t\t\t\t\t\t\t<p class=\"g-c-szt\">单败淘汰制</p>\n\t\t\t\t\t\t\t\t<div class=\"g-c-szm\">\n\t\t\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(9) + "\" class=\"mt16\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"g-c-sz-cherk\">\n\t\t\t\t\t\t\t\t\t<i class=\"g-sz-gimg\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"f-fr g-c-sz\" selected=\"2\">\n\t\t\t\t\t\t\t\t<p class=\"g-c-szt\">双败淘汰制</p>\n\t\t\t\t\t\t\t\t<div class=\"g-c-szm\">\n\t\t\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(15) + "\" class=\"mt5\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"g-c-szgz\">\n\t\t\t\t\t\t\t<div class=\"g-tri-up\">\n\t\t\t\t\t\t\t\t<div class=\"g-tri-iup\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"f-fl mr56 g-c-kz-sz\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"dbsz\" class=\"regular-checkboxs\" name=\"\" />\n\t\t\t\t\t\t\t\t<label for=\"dbsz\"></label>\n\t\t\t\t\t\t\t\t<label for=\"dbsz\" class=\"u-c-kz-sz\">需要增加一场第三名争夺战</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t\t<div class=\"f-fl g-c-sz\" selected=\"3\">\n\t\t\t\t\t\t\t\t<p class=\"g-c-szt\">小组循环制</p>\n\t\t\t\t\t\t\t\t<div class=\"g-c-szm\">\n\t\t\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(9) + "\" class=\"mt16\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"f-fr g-c-sz\" selected=\"4\">\n\t\t\t\t\t\t\t\t<p class=\"g-c-szt\">小组积分制</p>\n\t\t\t\t\t\t\t\t<div class=\"g-c-szm\">\n\t\t\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(15) + "\" class=\"mt5\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"confirmBtn mb120\">\n\t\t\t\t<a href=\"\" class=\"nextBtn\" @click=\"creatematch\"><i></i>确认，并生成赛事</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"steps\">\n\t\t\t<span class=\"line\"></span>\n\t\t\t<ul>\n\t\t\t\t<li><i></i>填写基本信息</li>\n\t\t\t\t<li><i></i>设置参赛方式</li>\n\t\t\t\t<li><i></i>确认赛事时间</li>\n\t\t\t\t<li class=\"current\"><i></i>设置采用赛制</li>\n\t\t\t\t<li><i></i>完善信息并发布</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(20)
	__vue_template__ = __webpack_require__(50)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(21)
	__vue_template__ = __webpack_require__(51)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(22)
	__vue_template__ = __webpack_require__(52)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(23)
	__vue_template__ = __webpack_require__(53)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(24)
	__vue_template__ = __webpack_require__(54)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(25)
	__vue_template__ = __webpack_require__(55)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 62 */
/***/ function(module, exports) {

	/*!
	 * vue-resource v0.7.4
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};

	/**
	 * Utility functions.
	 */

	var util = {};
	var config = {};
	var array = [];
	var console = window.console;
	function Util (Vue) {
	    util = Vue.util;
	    config = Vue.config;
	}

	var isArray = Array.isArray;

	function warn(msg) {
	    if (console && util.warn && (!config.silent || config.debug)) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	}

	function error(msg) {
	    if (console) {
	        console.error(msg);
	    }
	}

	function nextTick(cb, ctx) {
	    return util.nextTick(cb, ctx);
	}

	function trim(str) {
	    return str.replace(/^\s*|\s*$/g, '');
	}

	function toLower(str) {
	    return str ? str.toLowerCase() : '';
	}

	function isString(val) {
	    return typeof val === 'string';
	}

	function isFunction(val) {
	    return typeof val === 'function';
	}

	function isObject(obj) {
	    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}

	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	}

	function options(fn, obj, opts) {

	    opts = opts || {};

	    if (isFunction(opts)) {
	        opts = opts.call(obj);
	    }

	    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
	}

	function each(obj, iterator) {

	    var i, key;

	    if (typeof obj.length == 'number') {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }

	    return obj;
	}

	function extend(target) {

	    var args = array.slice.call(arguments, 1);

	    args.forEach(function (arg) {
	        _merge(target, arg);
	    });

	    return target;
	}

	function merge(target) {

	    var args = array.slice.call(arguments, 1);

	    args.forEach(function (arg) {
	        _merge(target, arg, true);
	    });

	    return target;
	}

	function _merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (isArray(source[key]) && !isArray(target[key])) {
	                target[key] = [];
	            }
	            _merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}

	function root (options, next) {

	    var url = next(options);

	    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
	        url = options.root + '/' + url;
	    }

	    return url;
	}

	function query (options, next) {

	    var urlParams = Object.keys(Url.options.params),
	        query = {},
	        url = next(options);

	    each(options.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });

	    query = Url.params(query);

	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }

	    return url;
	}

	function legacy (options, next) {

	    var variables = [],
	        url = next(options);

	    url = url.replace(/(\/?):([a-z]\w*)/gi, function (match, slash, name) {

	        warn('The `:' + name + '` parameter syntax has been deprecated. Use the `{' + name + '}` syntax instead.');

	        if (options.params[name]) {
	            variables.push(name);
	            return slash + encodeUriSegment(options.params[name]);
	        }

	        return '';
	    });

	    variables.forEach(function (key) {
	        delete options.params[key];
	    });

	    return url;
	}

	function encodeUriSegment(value) {

	    return encodeUriQuery(value, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
	}

	function encodeUriQuery(value, spaces) {

	    return encodeURIComponent(value).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, spaces ? '%20' : '+');
	}

	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */

	function expand(url, params, variables) {

	    var tmpl = parse(url),
	        expanded = tmpl.expand(params);

	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }

	    return expanded;
	}

	function parse(template) {

	    var operators = ['+', '#', '.', '/', ';', '?', '&'],
	        variables = [];

	    return {
	        vars: variables,
	        expand: function expand(context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {

	                    var operator = null,
	                        values = [];

	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }

	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });

	                    if (operator && operator !== '+') {

	                        var separator = ',';

	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }

	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }
	                } else {
	                    return encodeReserved(literal);
	                }
	            });
	        }
	    };
	}

	function getValues(context, operator, key, modifier) {

	    var value = context[key],
	        result = [];

	    if (isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();

	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }

	            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            result.push(encodeValue(operator, value[k], k));
	                        }
	                    });
	                }
	            } else {
	                var tmp = [];

	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        tmp.push(encodeValue(operator, value));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(encodeValue(operator, value[k].toString()));
	                        }
	                    });
	                }

	                if (isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }

	    return result;
	}

	function isDefined(value) {
	    return value !== undefined && value !== null;
	}

	function isKeyOperator(operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	}

	function encodeValue(operator, value, key) {

	    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);

	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	}

	function encodeReserved(str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	}

	function template (options) {

	    var variables = [],
	        url = expand(options.url, options.params, variables);

	    variables.forEach(function (key) {
	        delete options.params[key];
	    });

	    return url;
	}

	/**
	 * Service for URL templating.
	 */

	var ie = document.documentMode;
	var el = document.createElement('a');

	function Url(url, params) {

	    var self = this || {},
	        options = url,
	        transform;

	    if (isString(url)) {
	        options = { url: url, params: params };
	    }

	    options = merge({}, Url.options, self.$options, options);

	    Url.transforms.forEach(function (handler) {
	        transform = factory(handler, transform, self.$vm);
	    });

	    return transform(options);
	}

	/**
	 * Url options.
	 */

	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};

	/**
	 * Url transforms.
	 */

	Url.transforms = [template, legacy, query, root];

	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */

	Url.params = function (obj) {

	    var params = [],
	        escape = encodeURIComponent;

	    params.add = function (key, value) {

	        if (isFunction(value)) {
	            value = value();
	        }

	        if (value === null) {
	            value = '';
	        }

	        this.push(escape(key) + '=' + escape(value));
	    };

	    serialize(params, obj);

	    return params.join('&').replace(/%20/g, '+');
	};

	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */

	Url.parse = function (url) {

	    if (ie) {
	        el.href = url;
	        url = el.href;
	    }

	    el.href = url;

	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};

	function factory(handler, next, vm) {
	    return function (options) {
	        return handler.call(vm, options, next);
	    };
	}

	function serialize(params, obj, scope) {

	    var array = isArray(obj),
	        plain = isPlainObject(obj),
	        hash;

	    each(obj, function (value, key) {

	        hash = isObject(value) || isArray(value);

	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }

	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}

	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */

	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING = 2;

	function Promise$2(executor) {

	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];

	    var promise = this;

	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}

	Promise$2.reject = function (r) {
	    return new Promise$2(function (resolve, reject) {
	        reject(r);
	    });
	};

	Promise$2.resolve = function (x) {
	    return new Promise$2(function (resolve, reject) {
	        resolve(x);
	    });
	};

	Promise$2.all = function all(iterable) {
	    return new Promise$2(function (resolve, reject) {
	        var count = 0,
	            result = [];

	        if (iterable.length === 0) {
	            resolve(result);
	        }

	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;

	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }

	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$2.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};

	Promise$2.race = function race(iterable) {
	    return new Promise$2(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$2.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};

	var p$1 = Promise$2.prototype;

	p$1.resolve = function resolve(x) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        var called = false;

	        try {
	            var then = x && x['then'];

	            if (x !== null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }

	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};

	p$1.reject = function reject(reason) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};

	p$1.notify = function notify() {
	    var promise = this;

	    nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];

	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};

	p$1.then = function then(onResolved, onRejected) {
	    var promise = this;

	    return new Promise$2(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};

	p$1.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};

	var PromiseObj = window.Promise || Promise$2;

	function Promise$1(executor, context) {

	    if (executor instanceof PromiseObj) {
	        this.promise = executor;
	    } else {
	        this.promise = new PromiseObj(executor.bind(context));
	    }

	    this.context = context;
	}

	Promise$1.all = function (iterable, context) {
	    return new Promise$1(PromiseObj.all(iterable), context);
	};

	Promise$1.resolve = function (value, context) {
	    return new Promise$1(PromiseObj.resolve(value), context);
	};

	Promise$1.reject = function (reason, context) {
	    return new Promise$1(PromiseObj.reject(reason), context);
	};

	Promise$1.race = function (iterable, context) {
	    return new Promise$1(PromiseObj.race(iterable), context);
	};

	var p = Promise$1.prototype;

	p.bind = function (context) {
	    this.context = context;
	    return this;
	};

	p.then = function (fulfilled, rejected) {

	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    this.promise = this.promise.then(fulfilled, rejected);

	    return this;
	};

	p.catch = function (rejected) {

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    this.promise = this.promise.catch(rejected);

	    return this;
	};

	p.finally = function (callback) {

	    return this.then(function (value) {
	        callback.call(this);
	        return value;
	    }, function (reason) {
	        callback.call(this);
	        return PromiseObj.reject(reason);
	    });
	};

	p.success = function (callback) {

	    warn('The `success` method has been deprecated. Use the `then` method instead.');

	    return this.then(function (response) {
	        return callback.call(this, response.data, response.status, response) || response;
	    });
	};

	p.error = function (callback) {

	    warn('The `error` method has been deprecated. Use the `catch` method instead.');

	    return this.catch(function (response) {
	        return callback.call(this, response.data, response.status, response) || response;
	    });
	};

	p.always = function (callback) {

	    warn('The `always` method has been deprecated. Use the `finally` method instead.');

	    var cb = function cb(response) {
	        return callback.call(this, response.data, response.status, response) || response;
	    };

	    return this.then(cb, cb);
	};

	function xdrClient (request) {
	    return new Promise$1(function (resolve) {

	        var xdr = new XDomainRequest(),
	            response = { request: request },
	            handler;

	        request.cancel = function () {
	            xdr.abort();
	        };

	        xdr.open(request.method, Url(request), true);

	        handler = function handler(event) {

	            response.data = xdr.responseText;
	            response.status = xdr.status;
	            response.statusText = xdr.statusText || '';

	            resolve(response);
	        };

	        xdr.timeout = 0;
	        xdr.onload = handler;
	        xdr.onabort = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = function () {};
	        xdr.onprogress = function () {};

	        xdr.send(request.data);
	    });
	}

	var originUrl = Url.parse(location.href);
	var supportCors = 'withCredentials' in new XMLHttpRequest();

	var exports$1 = {
	    request: function request(_request) {

	        if (_request.crossOrigin === null) {
	            _request.crossOrigin = crossOrigin(_request);
	        }

	        if (_request.crossOrigin) {

	            if (!supportCors) {
	                _request.client = xdrClient;
	            }

	            _request.emulateHTTP = false;
	        }

	        return _request;
	    }
	};

	function crossOrigin(request) {

	    var requestUrl = Url.parse(Url(request));

	    return requestUrl.protocol !== originUrl.protocol || requestUrl.host !== originUrl.host;
	}

	var exports$2 = {
	    request: function request(_request) {

	        if (_request.emulateJSON && isPlainObject(_request.data)) {
	            _request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	            _request.data = Url.params(_request.data);
	        }

	        if (isObject(_request.data) && /FormData/i.test(_request.data.toString())) {
	            delete _request.headers['Content-Type'];
	        }

	        if (isPlainObject(_request.data)) {
	            _request.data = JSON.stringify(_request.data);
	        }

	        return _request;
	    },
	    response: function response(_response) {

	        try {
	            _response.data = JSON.parse(_response.data);
	        } catch (e) {}

	        return _response;
	    }
	};

	function jsonpClient (request) {
	    return new Promise$1(function (resolve) {

	        var callback = '_jsonp' + Math.random().toString(36).substr(2),
	            response = { request: request, data: null },
	            handler,
	            script;

	        request.params[request.jsonp] = callback;
	        request.cancel = function () {
	            handler({ type: 'cancel' });
	        };

	        script = document.createElement('script');
	        script.src = Url(request);
	        script.type = 'text/javascript';
	        script.async = true;

	        window[callback] = function (data) {
	            response.data = data;
	        };

	        handler = function handler(event) {

	            if (event.type === 'load' && response.data !== null) {
	                response.status = 200;
	            } else if (event.type === 'error') {
	                response.status = 404;
	            } else {
	                response.status = 0;
	            }

	            resolve(response);

	            delete window[callback];
	            document.body.removeChild(script);
	        };

	        script.onload = handler;
	        script.onerror = handler;

	        document.body.appendChild(script);
	    });
	}

	var exports$3 = {
	    request: function request(_request) {

	        if (_request.method == 'JSONP') {
	            _request.client = jsonpClient;
	        }

	        return _request;
	    }
	};

	var exports$4 = {
	    request: function request(_request) {

	        if (isFunction(_request.beforeSend)) {
	            _request.beforeSend.call(this, _request);
	        }

	        return _request;
	    }
	};

	/**
	 * HTTP method override Interceptor.
	 */

	var exports$5 = {
	    request: function request(_request) {

	        if (_request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(_request.method)) {
	            _request.headers['X-HTTP-Method-Override'] = _request.method;
	            _request.method = 'POST';
	        }

	        return _request;
	    }
	};

	var exports$6 = {
	    request: function request(_request) {

	        _request.method = _request.method.toUpperCase();
	        _request.headers = extend({}, Http.headers.common, !_request.crossOrigin ? Http.headers.custom : {}, Http.headers[_request.method.toLowerCase()], _request.headers);

	        if (isPlainObject(_request.data) && /^(GET|JSONP)$/i.test(_request.method)) {
	            extend(_request.params, _request.data);
	            delete _request.data;
	        }

	        return _request;
	    }
	};

	/**
	 * Timeout Interceptor.
	 */

	var exports$7 = function exports() {

	    var timeout;

	    return {
	        request: function request(_request) {

	            if (_request.timeout) {
	                timeout = setTimeout(function () {
	                    _request.cancel();
	                }, _request.timeout);
	            }

	            return _request;
	        },
	        response: function response(_response) {

	            clearTimeout(timeout);

	            return _response;
	        }
	    };
	};

	function interceptor (handler, vm) {

	    return function (client) {

	        if (isFunction(handler)) {
	            handler = handler.call(vm, Promise$1);
	        }

	        return function (request) {

	            if (isFunction(handler.request)) {
	                request = handler.request.call(vm, request);
	            }

	            return when(request, function (request) {
	                return when(client(request), function (response) {

	                    if (isFunction(handler.response)) {
	                        response = handler.response.call(vm, response);
	                    }

	                    return response;
	                });
	            });
	        };
	    };
	}

	function when(value, fulfilled, rejected) {

	    var promise = Promise$1.resolve(value);

	    if (arguments.length < 2) {
	        return promise;
	    }

	    return promise.then(fulfilled, rejected);
	}

	function xhrClient (request) {
	    return new Promise$1(function (resolve) {

	        var xhr = new XMLHttpRequest(),
	            response = { request: request },
	            handler;

	        request.cancel = function () {
	            xhr.abort();
	        };

	        xhr.open(request.method, Url(request), true);

	        handler = function handler(event) {

	            response.data = 'response' in xhr ? xhr.response : xhr.responseText;
	            response.status = xhr.status === 1223 ? 204 : xhr.status; // IE9 status bug
	            response.statusText = trim(xhr.statusText || '');
	            response.headers = xhr.getAllResponseHeaders();

	            resolve(response);
	        };

	        xhr.timeout = 0;
	        xhr.onload = handler;
	        xhr.onabort = handler;
	        xhr.onerror = handler;
	        xhr.ontimeout = function () {};
	        xhr.onprogress = function () {};

	        if (isPlainObject(request.xhr)) {
	            extend(xhr, request.xhr);
	        }

	        if (isPlainObject(request.upload)) {
	            extend(xhr.upload, request.upload);
	        }

	        each(request.headers || {}, function (value, header) {
	            xhr.setRequestHeader(header, value);
	        });

	        xhr.send(request.data);
	    });
	}

	function Client (request) {

	    var response = (request.client || xhrClient)(request);

	    return Promise$1.resolve(response).then(function (response) {

	        if (response.headers) {

	            var headers = parseHeaders(response.headers);

	            response.headers = function (name) {

	                if (name) {
	                    return headers[toLower(name)];
	                }

	                return headers;
	            };
	        }

	        response.ok = response.status >= 200 && response.status < 300;

	        return response;
	    });
	}

	function parseHeaders(str) {

	    var headers = {},
	        value,
	        name,
	        i;

	    if (isString(str)) {
	        each(str.split('\n'), function (row) {

	            i = row.indexOf(':');
	            name = trim(toLower(row.slice(0, i)));
	            value = trim(row.slice(i + 1));

	            if (headers[name]) {

	                if (isArray(headers[name])) {
	                    headers[name].push(value);
	                } else {
	                    headers[name] = [headers[name], value];
	                }
	            } else {

	                headers[name] = value;
	            }
	        });
	    }

	    return headers;
	}

	/**
	 * Service for sending network requests.
	 */

	var jsonType = { 'Content-Type': 'application/json' };

	function Http(url, options) {

	    var self = this || {},
	        client = Client,
	        request,
	        promise;

	    Http.interceptors.forEach(function (handler) {
	        client = interceptor(handler, self.$vm)(client);
	    });

	    options = isObject(url) ? url : extend({ url: url }, options);
	    request = merge({}, Http.options, self.$options, options);
	    promise = client(request).bind(self.$vm).then(function (response) {

	        return response.ok ? response : Promise$1.reject(response);
	    }, function (response) {

	        if (response instanceof Error) {
	            error(response);
	        }

	        return Promise$1.reject(response);
	    });

	    if (request.success) {
	        promise.success(request.success);
	    }

	    if (request.error) {
	        promise.error(request.error);
	    }

	    return promise;
	}

	Http.options = {
	    method: 'get',
	    data: '',
	    params: {},
	    headers: {},
	    xhr: null,
	    upload: null,
	    jsonp: 'callback',
	    beforeSend: null,
	    crossOrigin: null,
	    emulateHTTP: false,
	    emulateJSON: false,
	    timeout: 0
	};

	Http.headers = {
	    put: jsonType,
	    post: jsonType,
	    patch: jsonType,
	    delete: jsonType,
	    common: { 'Accept': 'application/json, text/plain, */*' },
	    custom: { 'X-Requested-With': 'XMLHttpRequest' }
	};

	Http.interceptors = [exports$4, exports$7, exports$3, exports$5, exports$2, exports$6, exports$1];

	['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach(function (method) {

	    Http[method] = function (url, data, success, options) {

	        if (isFunction(data)) {
	            options = success;
	            success = data;
	            data = undefined;
	        }

	        if (isObject(success)) {
	            options = success;
	            success = undefined;
	        }

	        return this(url, extend({ method: method, data: data, success: success }, options));
	    };
	});

	function Resource(url, params, actions, options) {

	    var self = this || {},
	        resource = {};

	    actions = extend({}, Resource.actions, actions);

	    each(actions, function (action, name) {

	        action = merge({ url: url, params: params || {} }, options, action);

	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });

	    return resource;
	}

	function opts(action, args) {

	    var options = extend({}, action),
	        params = {},
	        data,
	        success,
	        error;

	    switch (args.length) {

	        case 4:

	            error = args[3];
	            success = args[2];

	        case 3:
	        case 2:

	            if (isFunction(args[1])) {

	                if (isFunction(args[0])) {

	                    success = args[0];
	                    error = args[1];

	                    break;
	                }

	                success = args[1];
	                error = args[2];
	            } else {

	                params = args[0];
	                data = args[1];
	                success = args[2];

	                break;
	            }

	        case 1:

	            if (isFunction(args[0])) {
	                success = args[0];
	            } else if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                data = args[0];
	            } else {
	                params = args[0];
	            }

	            break;

	        case 0:

	            break;

	        default:

	            throw 'Expected up to 4 arguments [params, data, success, error], got ' + args.length + ' arguments';
	    }

	    options.data = data;
	    options.params = extend({}, options.params, params);

	    if (success) {
	        options.success = success;
	    }

	    if (error) {
	        options.error = error;
	    }

	    return options;
	}

	Resource.actions = {

	    get: { method: 'GET' },
	    save: { method: 'POST' },
	    query: { method: 'GET' },
	    update: { method: 'PUT' },
	    remove: { method: 'DELETE' },
	    delete: { method: 'DELETE' }

	};

	function plugin(Vue) {

	    if (plugin.installed) {
	        return;
	    }

	    Util(Vue);

	    Vue.url = Url;
	    Vue.http = Http;
	    Vue.resource = Resource;
	    Vue.Promise = Promise$1;

	    Object.defineProperties(Vue.prototype, {

	        $url: {
	            get: function get() {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },

	        $http: {
	            get: function get() {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },

	        $resource: {
	            get: function get() {
	                return Vue.resource.bind(this);
	            }
	        },

	        $promise: {
	            get: function get() {
	                var _this = this;

	                return function (executor) {
	                    return new Vue.Promise(executor, _this);
	                };
	            }
	        }

	    });
	}

	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}

	module.exports = plugin;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * Vue.js v1.0.26
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
	var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

	// detecting iOS UIWebView by indexedDB
	var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};

	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: ("production") !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (false) {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      ("production") !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (false) {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (false) {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      ("production") !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    ("production") !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (false) {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        ("production") !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (false) {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        ("production") !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (false) {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (false) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIos: isIos,
		iosVersionMatch: iosVersionMatch,
		iosVersion: iosVersion,
		hasMutationObserverBug: hasMutationObserverBug,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (false) {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (false) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (false) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    ("production") !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (false) {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    ("production") !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (false) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (false) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (false) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      ("production") !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (false) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (false) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      ("production") !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        ("production") !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          ("production") !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (false) {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      ("production") !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (false) {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      ("production") !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      ("production") !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      ("production") !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      ("production") !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (false) {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        ("production") !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (false) {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    ("production") !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      ("production") !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (false) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (false) {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      ("production") !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (false) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (false) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (false) {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    ("production") !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (false) {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      ("production") !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    ("production") !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (false) {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (true) {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (false) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (false) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (false) {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        ("production") !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    ("production") !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (false) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      ("production") !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      ("production") !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (false) {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        ("production") !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (false) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (false) {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (false) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          ("production") !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      ("production") !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (false) {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (false) {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.26';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (false) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);