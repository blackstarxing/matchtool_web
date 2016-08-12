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

	var _vue = __webpack_require__(38);

	var _vue2 = _interopRequireDefault(_vue);

	var _matchtool = __webpack_require__(32);

	var _matchtool2 = _interopRequireDefault(_matchtool);

	var _createquickmatch = __webpack_require__(34);

	var _createquickmatch2 = _interopRequireDefault(_createquickmatch);

	var _quickmatchformat = __webpack_require__(35);

	var _quickmatchformat2 = _interopRequireDefault(_quickmatchformat);

	var _createLeaguematch = __webpack_require__(33);

	var _createLeaguematch2 = _interopRequireDefault(_createLeaguematch);

	var _vueRouter = __webpack_require__(37);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _vueResource = __webpack_require__(36);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueResource2.default);
	_vue2.default.use(_vueRouter2.default);

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
	    }
	});
	router.redirect({
	    '*': '/quickmatch'
	});

	router.start(_matchtool2.default, '#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(12)
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(13)
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(15)
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAABQCAYAAACEYZ66AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDA5NDY3NzQ1MzI1MTFFNkJCQjNBRkI2ODU2RUVDODAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDA5NDY3NzM1MzI1MTFFNkJCQjNBRkI2ODU2RUVDODAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ0NmVjM2Y3LTdkYmQtNDQyNi1hYTA2LTZmZGZjMWI3ZDZiZCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM0MmU2MDA5LTU5NzQtMTFlNi1iMGQzLWFm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"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MThGQTE2Qjg1MjMxMTFFNjg4RTlDNzc1RTAxNDU5OUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MThGQTE2Qjc1MjMxMTFFNjg4RTlDNzc1RTAxNDU5OUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDMxN2ZlNmYtYThjMi04YzRmLWFkZWUtNDg2NDNhNmNkZWIxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MWQ0NzVlMDAtOWEyOS0xMTc5LTkyZDgt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"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAhCAYAAAAI2Y9jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RDYyMjVGRDUyMzAxMUU2ODhFOUM3NzVFMDE0NTk5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RDYyMjVGRTUyMzAxMUU2ODhFOUM3NzVFMDE0NTk5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVENjIyNUZCNTIzMDExRTY4OEU5Qzc3NUUwMTQ1OTlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVENjIyNUZDNTIzMDExRTY4OEU5Qzc3NUUwMTQ1OTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++DAaUgAACPpJREFUeNrsW3uU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"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOTYxREM4RjUyMzExMUU2ODhFOUM3NzVFMDE0NTk5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxOTYxREM5MDUyMzExMUU2ODhFOUM3NzVFMDE0NTk5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5NjFEQzhENTIzMTExRTY4OEU5Qzc3NUUwMTQ1OTlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5NjFEQzhFNTIzMTExRTY4OEU5Qzc3NUUwMTQ1OTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rkexDQAAAuJJREFUeNq0l0loFEEUhjs9GVxCSOLCiAiCElFEBEVEQY/OwXgykRxURESRmDEHd1TEBbwpMSMeRBE8xDGeTNBRlKggiCh4cKJEBDc0rhNXVEb9n/wNj6K7pnsmefBNdVVNvb+r+1XV64pCdqITwuJgCZkHpoBa9uXBU3AXXCG/izmsKCIszlNgExjvhLO3IA3aeVORhZs4eIJTmr3hTZ/363R92mKgA2TKEHU4NkNfsWLC8odO0OIMnbXQZ8wmfBQ0OkNvjfTtK9zEIBouE98rTOFaBtJwW7u3DD3hzQyGV2AjeBIw8AH4W4Lge/AaJKj1XziugukAOAFmgl3gqxp8CSxkoES1/eCQCra4rOOluOgGnznrH2pAHZjNNfmIbQvA7YjC88FDzroaNMiMk+zsNkTFPoFeJSp2h7tTFBO/38BF1pMiPIcVPYupoBWsA5MMJ3/4OqLYL5Y3Wc6txM80VnIsl4OzYCTr38EycF052seDIaVu3GYvWT5mWS8zrmHlA8s9SlRsNDhlrHmJ7DM8qS4UEX3Bxyz2kWWNazxCefHTfQZPBrN82mXM3iLCveq6oDeQQV7LsbcNjAhwUB/QnlOP0s/06TSG5aAI97OyEuywOLCdx7mA9j7Qo+ozWPaL8D1W1oJKi/NqS99znzaJg618HZ4tYnlfhLMhl8QXS98zn7YjxmwlYBt4fdlljvQuhHDe0nfLqMvhv8VoW8UDQrSuukzM0hHWop/dAAfBNbCam48+TKrAbl4flw3Fy7lquS0mLLOVffxnicfhMZ7HA1yueVc5brUM7CxDdI1KMFLeK3ON9dYRsMEfLkP0pHrvmaCcqw10GW07A6LWZlUUOs0kr4u+A5M92dKajWDbDjaAUSEE5T/ruaF4yUWaPgthE/pmZoYJFQc9jOA+pjMym7EMmMVcp96hM8A051ypnzBtvPtxEfKrNG+6pE8Y86MtaXy01aksRX+0ZcN8tP0TYACrcq4Q9QjEuAAAAABJRU5ErkJggg=="

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzM0ODk5QTUyM0MxMUU2ODhFOUM3NzVFMDE0NTk5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzM0ODk5QjUyM0MxMUU2ODhFOUM3NzVFMDE0NTk5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5NjFEQzkxNTIzMTExRTY4OEU5Qzc3NUUwMTQ1OTlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5NjFEQzkyNTIzMTExRTY4OEU5Qzc3NUUwMTQ1OTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qKNn0wAAAnFJREFUeNrslk1IVFEUx8fR3JgJgpCRQl+UYtJG2rSJENy1KConDMMPUGgnuElwYYkoJFKB2Vg5REUFQUQbUdyIBIqWipGkqDgUoRUikUT9D/wHLpcz792ZsZ0Hfsx95557zn1nzrn3pb0dGQ0ochk8BBmB5GSLPp7bE8E4C0pSCCayC5RqE+L0FLgB9hv63EDq0ghCxvMSuC4Bn1jBXOQjN3vIwybX2vhBEJGUZlNRaRhd8QnYATp9bC4Z/qqp2y0BX/FB3nKdzHk4WgaPwSMQ9bCbN/wVUPdCAg7w4ZpRKEvW4h/gKjgJjoPf4Bcopq4O/FQ2FquTeo7DEnAYfAKF4BwnvjBITHJABRi39N/BBOf2GHoJ/pXj83zDSVkvAf+CXk62gnSjMEy5CG4rqbtnbDQmn422a+H4vtmHvcz1MVBF3QfFuVbN+xTdLH9DTPs38MAMuAF6OL7J9LxTHM3wP5Eeq+V4VrGbZPW38/kW2LRPmi5WXT7HY4oj+Z/fgzugD0yBvYrdmHGYSAF2a0ebvGUzx7L7w2DVciS9WmQ8F1NnV3QWsxCgz814Z2kEvARpoN8o7URkga2WzlPsqd/hXc+mzWGPJSonQB59NLrcFmugnAuSFTmpTrNPna6nRVDGtP5JIJDYhpmZFc0g6LFYdlfDU6LNIVgbbWuVY84pYEyicVpEa4Won1HQMVUbDjbrLo5cA46wkJri3OxnwKiLo0S+WwZ5i9jyRrnOUn7DbZOdgNptYcuB/xHwKHgGXitzQ/yoOrIdATP5CTENLvAW0XyEeBHf9at8v4CV/CLLcGyxBnA2lYD5SdSFZ2r/CTAARK58etlVOscAAAAASUVORK5CYII="

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzM0ODk5RTUyM0MxMUU2ODhFOUM3NzVFMDE0NTk5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzM0ODk5RjUyM0MxMUU2ODhFOUM3NzVFMDE0NTk5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI3MzQ4OTlDNTIzQzExRTY4OEU5Qzc3NUUwMTQ1OTlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI3MzQ4OTlENTIzQzExRTY4OEU5Qzc3NUUwMTQ1OTlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++NrygAAAAdpJREFUeNrMlr1KA0EUhXeTWKSyECFiobW1RrEQBH8QtbESbFVMIZgyRYh5AivxN4gR8wSClUZF1EIshfgAajAEQVMpxjNwImHZ2d1x1sQLH7vcmXvPzN2Z2TGPz68MTWsD22AdnHoNCmmKtoMz0ANaVYQDmsJ7FL0DiyqBOjMeA5OgCKbBo0qwzoxX+FxVFdUVHuHz8DfBOsItfL41WljLQpKZDIFeDiwPbhTzDoBh8AVuwQX4kAmbYAGkQcSSKM1F5MVEv5TF90zfDqjWlzoIcmDLRtRg0AYIOwiG2Sdl0xZh7hy1fma8BmZdZrIEJsBR3cIymFCUcQp0ueQQGiWwbOKs7sfLNUvdCBOlHgzwu1pFTZ8GYkpyzwvh0SbspnEh3NkE4Y5QbZVJSmtavo3X8tb6VyX+4L84uWSja9iR6cd2cSt7834SAYdRy8p8CaLiECBR+v601C+85rxa/ML3wMuf4WUnqJT6EyRsRA36Euzj20XgCcRAN8g49MvwJxFjjFapRanmeBnwYuLStwkK4MTpvHeb8a6CaL3lGetY6pKk7R7ENXZMnDnsrCSEszYN4pI+AyoawhXmKNq0ZYVwEuyDd1AGB9ybBR/OCZGjjznL1BBayW8BBgDhImGylbsmQQAAAABJRU5ErkJggg=="

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAABcCAYAAAAYlOXCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjU1MWNiNi1hYzM3LWMxNDAtYTFkNy1mNTBjYjZmMTlmNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkI2NTJEQTU1MzI4MTFFNkJCQjNBRkI2ODU2RUVDODAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkI2NTJEQTQ1MzI4MTFFNkJCQjNBRkI2ODU2RUVDODAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ0NmVjM2Y3LTdkYmQtNDQyNi1hYTA2LTZmZGZjMWI3ZDZiZCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM0MmU2MDA5LTU5NzQtMTFlNi1iMGQzLWFm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"

/***/ },
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(20);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _topHead = __webpack_require__(4);

	var _topHead2 = _interopRequireDefault(_topHead);

	var _sideBar = __webpack_require__(2);

	var _sideBar2 = _interopRequireDefault(_sideBar);

	var _slideBar = __webpack_require__(3);

	var _slideBar2 = _interopRequireDefault(_slideBar);

	var _createPop = __webpack_require__(1);

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _topHead = __webpack_require__(4);

	var _topHead2 = _interopRequireDefault(_topHead);

	var _sideBar = __webpack_require__(2);

	var _sideBar2 = _interopRequireDefault(_sideBar);

	var _slideBar = __webpack_require__(3);

	var _slideBar2 = _interopRequireDefault(_slideBar);

	var _createPop = __webpack_require__(1);

	var _createPop2 = _interopRequireDefault(_createPop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				formdata: {
					maxNum: ""
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
				minDate: new Date(),
				step: 30
			});
			$.datetimepicker.setLocale('ch');
		},
		methods: {
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
				} else {
					$('[name="baoming"]').attr('disabled', false);
					$('[name="bminfo"]').attr('disabled', false);
					$('[name="baoming"]').siblings('.u-c-per').find('span').removeClass('col8f');
					$('[name="bminfo"]').siblings('.u-c-ck').removeClass('col8f');
				}
			}
		},
		events: {}
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _topHead = __webpack_require__(4);

	var _topHead2 = _interopRequireDefault(_topHead);

	var _sideBar = __webpack_require__(2);

	var _sideBar2 = _interopRequireDefault(_sideBar);

	var _slideBar = __webpack_require__(3);

	var _slideBar2 = _interopRequireDefault(_slideBar);

	var _createPop = __webpack_require__(1);

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
		methods: {}
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(22);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QIIRXhpZgAATU0AKgAAAAgADAEOAAIAAAAmAAAAngEPAAIAAAAGAAAAxAEQAAIAAAAHAAAAygESAAMAAAABAAEAAAEaAAUAAAABAAAA0gEbAAUAAAABAAAA2gEoAAMAAAABAAIAAAExAAIAAAAIAAAA4gEyAAIAAAAUAAAA6gE8AAIAAAAHAAAA/oKYAAIAAAAlAAABBodpAAQAAAABAAABLAAAAABQcm9jZXNzZWQgd2l0aCBWU0NPY2FtIHdpdGggdDEgcHJlc2V0AEFwcGxlAGlQaG9uZQAAAAAASAAAAAEAAABIAAAAAVZTQ09jYW0AMjAxNjowMjoyMSAyMzoyNjowNQBpUGhvbmUAAENvcHlyaWdodCAyMDE2LiBBbGwgcmlnaHRzIHJlc2VydmVkLgAAAAqQAAAHAAAABDAyMjGQAwACAAAAFAAAAaqQBAACAAAAFAAAAb6RAQAHAAAABAECAwCShgAHAAAALQAAAdKgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAtCgAwAEAAAAAQAAA8CkBgADAAAAAQAAAAAAAAAAMjAxNjowMjoyMSAyMzoyNjowNQAyMDE2OjAyOjIxIDIzOjI2OjA1AEFTQ0lJAAAAUHJvY2Vzc2VkIHdpdGggVlNDT2NhbSB3aXRoIHQxIHByZXNldAD/4QtKaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iVlNDT2NhbSIgeG1wOk1vZGlmeURhdGU9IjIwMTYtMDItMjFUMjM6MjY6MDUiIHhtcDpDcmVhdGVEYXRlPSIyMDE2LTAyLTIxVDIzOjI2OjA1IiBwaG90b3Nob3A6RGF0ZUNyZWF0ZWQ9IjIwMTYtMDItMjFUMjM6MjY6MDUiPiA8ZGM6ZGVzY3JpcHRpb24+IDxyZGY6QWx0PiA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlByb2Nlc3NlZCB3aXRoIFZTQ09jYW0gd2l0aCB0MSBwcmVzZXQ8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOmRlc2NyaXB0aW9uPiA8ZGM6cmlnaHRzPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5Db3B5cmlnaHQgMjAxNi4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnJpZ2h0cz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/PgD/7QCaUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGIcAVoAAxslRxwCAAACAAIcAnQAJENvcHlyaWdodCAyMDE2LiBBbGwgcmlnaHRzIHJlc2VydmVkLhwCeAAlUHJvY2Vzc2VkIHdpdGggVlNDT2NhbSB3aXRoIHQxIHByZXNldDhCSU0EJQAAAAAAEGLrC/YphqUrlcBSLl7d/t//wAARCAPAAtAD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"

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"createPop\">\n\t\t<a href=\"\" class=\"closeBtn\" @click=\"closePop\"></a>\n\t\t<h3>选择要创建的赛事类型</h3>\n\t\t<p>我们提供两种方式帮助你建立合理的赛事体系</p>\n\t\t<div class=\"createBox\">\n\t\t\t<a href=\"\" class=\"createBtn\">创建快捷赛事</a>\n\t\t\t<p>适用于一到两个阶段即可完整赛程规划的赛事</p>\n\t\t\t<div class=\"or\"></div>\n\t\t\t<a href=\"\" class=\"createBtn leagueEnter\">创建联赛</a>\n\t\t\t<p>适用于大型赛事支持多赛赛程、多赛制的赛事</p>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"m-sidebar\">\n\t\t<ul>\n\t\t\t<li><a href=\"\"><img src=\"" + __webpack_require__(8) + "\" alt=\"\"></a></li>\n\t\t\t<li><a href=\"\"><img src=\"" + __webpack_require__(9) + "\" alt=\"\"></a></li>\n\t\t\t<li @click=\"showPop\"><a href=\"\"><img src=\"" + __webpack_require__(10) + "\" alt=\"\"></a></li>\n\t\t</ul>\n\t</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"m-slideInto\">\n\t\t<div class=\"top-logo clearfix\">\n\t\t\t<a href=\"\" class=\"slideout\" @click=\"slideout\"></a>\n\t\t\t<img src=\"" + __webpack_require__(7) + "\" alt=\"\">\n\t\t</div>\n\t\t<ul>\n\t\t\t<li class=\"current\"><a href=\"\"><img src=\"" + __webpack_require__(8) + "\" alt=\"\">首页</a></li>\n\t\t\t<li class=\"arrow\"><a href=\"\"><img src=\"" + __webpack_require__(9) + "\" alt=\"\">申请认证</a></li>\n\t\t\t<li class=\"arrow\" @click=\"showPop\"><a href=\"\"><img src=\"" + __webpack_require__(10) + "\" alt=\"\">创建赛事</a></li>\n\t\t</ul>\n\t</div>\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"g-hd\">\n\t\t<div class=\"header_left f-fl\">\n\t\t\t<a href=\"\" class=\"slidein\" @click=\"slidein\"></a>\n\t\t\t<img src=\"" + __webpack_require__(7) + "\" alt=\"\">\n\t\t</div>\n\t\t<div class=\"header_right f-fr\">\n\t\t\t<a href=\"\" class=\"notify\"></a>\n\t\t\t<div class=\"avatar\">\n\t\t\t\t<img src=\"" + __webpack_require__(6) + "\" alt=\"\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"content clearfix\">\r\n          <router-view></router-view>  \r\n </div>\r\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<top-head></top-head>\n\t<side-bar></side-bar>\n\t<slide-bar></slide-bar>\n\t<create-pop></create-pop>\n\t<div class=\"backLast\">\n\t\t<div class=\"g-z\">\n\t\t\t<a href=\"\"></a>创建联赛\n\t\t</div>\n\t</div>\n\t<div class=\"g-w\">\n\t\t<div class=\"g-z\">\n\t\t\t<p class=\"m-c-tit\">填写联赛基本信息</p>\n\t\t\t<div class=\"m-c-w\">\n\t\t\t\t<div class=\"m-c-info\">\n\t\t\t\t\t<p class=\"g-c-l\">联赛名称</p>\n\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt\" placeholder=\"请输入赛事名称\" style=\"width:480px;\" v-model=\"name\">\n\t\t\t\t\t<p class=\"g-c-l mt40\">联赛主办方</p>\n\t\t\t\t\t<div class=\"g-c-zbf\">\n\t\t\t\t\t\t<input type=\"radio\" id=\"personal\" class=\"regular-radio\" checked=\"checked\" />\n\t\t\t\t\t\t<label for=\"personal\"></label>\n\t\t\t\t\t\t<label for=\"personal\" class=\"u-c-per\">\n\t\t\t\t\t\t\t<span class=\"u-c-headimg\">\n\t\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(6) + "\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\tblackstar\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"g-c-l mt40\">联赛比赛项目</p>\n\t\t\t\t\t<select class=\"u-c-slt\">\n\t\t\t\t\t\t<option>选择一个竞技项目</option>\n\t\t\t\t\t\t<option>英雄联盟</option>\n\t\t\t\t\t\t<option>星际争霸</option>\n\t\t\t\t\t\t<option>炉石传说</option>\n\t\t\t\t\t\t<option>自由篮球</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<p class=\"g-c-l mt40\">联赛模式</p>\n\t\t\t\t\t<div class=\"g-c-zbf\">\n\t\t\t\t\t    <div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"online\" name=\"matchitem\" class=\"regular-radio\" checked=\"checked\" value=\"1\" v-model=\"mode\"/>\n\t\t\t\t\t\t\t<label for=\"online\"></label>\n\t\t\t\t\t\t\t<label for=\"online\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t纯线上赛事\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"offline\" name=\"matchitem\" class=\"regular-radio\" value=\"2\" v-model=\"mode\"/>\n\t\t\t\t\t\t\t<label for=\"offline\"></label>\n\t\t\t\t\t\t\t<label for=\"offline\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t纯线下赛事\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl h36\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"unite\" name=\"matchitem\" class=\"regular-radio\" value=\"3\" v-model=\"mode\"/>\n\t\t\t\t\t\t\t<label for=\"unite\"></label>\n\t\t\t\t\t\t\t<label for=\"unite\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t线上与线下结合模式\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"confirmBtn\">\n\t\t\t\t<a href=\"\" class=\"nextBtn\" @click=\"nextStep\"><i></i>确认，进入赛制设置</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"steps\">\n\t\t\t<span class=\"line\"></span>\n\t\t\t<ul>\n\t\t\t\t<li class=\"current\"><i></i>填写基本信息</li>\n\t\t\t\t<li><i></i>生成联赛主页</li>\n\t\t\t\t<li><i></i>设置赛事体系</li>\n\t\t\t\t<li><i></i>完善信息并发布</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<top-head></top-head>\n\t<side-bar></side-bar>\n\t<slide-bar></slide-bar>\n\t<create-pop></create-pop>\n\t<div class=\"backLast\">\n\t\t<div class=\"g-z\">\n\t\t\t<a href=\"\"></a>创建快捷赛事\n\t\t</div>\n\t</div>\n\t<div class=\"g-w\">\n\t\t<div class=\"g-z\">\n\t\t\t<p class=\"m-c-tit\">完善赛事基本信息</p>\n\t\t\t<div class=\"m-c-w\">\n\t\t\t\t<div class=\"m-c-info\">\n\t\t\t\t\t<p class=\"g-c-l\">赛事名称</p>\n\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt\" placeholder=\"请输入赛事名称\" style=\"width:480px;\" oninput=\"onInput.call(this)\">\n\t\t\t\t\t<p class=\"g-c-l mt40\">主办方</p>\n\t\t\t\t\t<div class=\"g-c-zbf\">\n\t\t\t\t\t\t<input type=\"radio\" id=\"personal\" class=\"regular-radio\" checked=\"checked\" value=\"\" />\n\t\t\t\t\t\t<label for=\"personal\"></label>\n\t\t\t\t\t\t<label for=\"personal\" class=\"u-c-per\">\n\t\t\t\t\t\t\t<span class=\"u-c-headimg\">\n\t\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(23) + "\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t未来老公\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"g-c-l mt40\">比赛项目</p>\n\t\t\t\t\t<select class=\"u-c-slt\">\n\t\t\t\t\t\t<option>选择一个竞技项目</option>\n\t\t\t\t\t\t<option>英雄联盟</option>\n\t\t\t\t\t\t<option>星际争霸</option>\n\t\t\t\t\t\t<option>炉石传说</option>\n\t\t\t\t\t\t<option>自由篮球</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<p class=\"g-c-l mt40\">赛事模式</p>\n\t\t\t\t\t<div class=\"g-c-zbf\">\n\t\t\t\t\t    <div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"online\" name=\"matchitem\" class=\"regular-radio\" checked=\"checked\" value=\"1\" />\n\t\t\t\t\t\t\t<label for=\"online\"></label>\n\t\t\t\t\t\t\t<label for=\"online\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t纯线上赛事\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"offline\" name=\"matchitem\" class=\"regular-radio\" value=\"2\" />\n\t\t\t\t\t\t\t<label for=\"offline\"></label>\n\t\t\t\t\t\t\t<label for=\"offline\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t纯线下赛事\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl h36\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"unite\" name=\"matchitem\" class=\"regular-radio\" value=\"3\" />\n\t\t\t\t\t\t\t<label for=\"unite\"></label>\n\t\t\t\t\t\t\t<label for=\"unite\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t线上与线下结合模式\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"m-c-tit\">设置选手参赛方式</p>\n\t\t\t<div class=\"m-c-w\">\n\t\t\t\t<div class=\"m-c-info\">\n\t\t\t\t\t<p class=\"g-c-l\">最大参与人数（需要在4-512之间）</p>\n\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt f-fl\" style=\"width: 200px;\" placeholder=\"请输入参与人数上限\"  v-model=\"formdata.maxNum\" @input=\"numberChange\" onkeyup=\"if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\\D/g,'')}\" onafterpaste=\"if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\\D/g,'')}\">\n\t\t\t\t\t\t<div class=\"button_group\">\n\t\t\t\t\t\t\t<button class=\"plus\" @click=\"plus\"></button>\n\t\t\t\t\t\t\t<button class=\"minus\" @click=\"minus\" disabled=\"true\"></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"g-c-l mt40 f-re\">是否允许用户自主报名\n\t\t\t\t\t\t<div class=\"checkboxThree f-ab\">\n\t\t\t\t\t  \t\t<input type=\"checkbox\" value=\"1\" id=\"checkboxThreeInput\" name=\"\" class=\"f-dn\" />\n\t\t\t\t\t\t  \t<label for=\"checkboxThreeInput\" @click=\"isapply\"></label>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"g-c-l mt40 f-re\">\n\t\t\t\t\t\t报名方式\t\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class=\"g-c-zbf\">\n\t\t\t\t\t    <div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"single\" name=\"baoming\" class=\"regular-radio\" checked=\"checked\" value=\"\" disabled />\n\t\t\t\t\t\t\t<label for=\"single\"></label>\n\t\t\t\t\t\t\t<label for=\"single\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl col8f\">\n\t\t\t\t\t\t\t\t\t个人报名\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"team\" name=\"baoming\" class=\"regular-radio\" value=\"\" disabled />\n\t\t\t\t\t\t\t<label for=\"team\"></label>\n\t\t\t\t\t\t\t<label for=\"team\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl col8f\">\n\t\t\t\t\t\t\t\t\t战队报名\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"g-c-l mt40\">设置需要收集的报名信息（多选）</p>\n\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t<div class=\"f-fl mr56 mb6\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"gamenickname\" class=\"regular-checkboxs\" name=\"bminfo\" disabled />\n\t\t\t\t\t\t\t<label for=\"gamenickname\"></label>\n\t\t\t\t\t\t\t<label for=\"gamenickname\" class=\"u-c-ck col8f\">游戏昵称</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl mr56 mb6\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"truename\" class=\"regular-checkboxs\" name=\"bminfo\" disabled />\n\t\t\t\t\t\t\t<label for=\"truename\"></label>\n\t\t\t\t\t\t\t<label for=\"truename\" class=\"u-c-ck col8f\">真实姓名</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl mr56 mb6\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"idcard\" class=\"regular-checkboxs\" name=\"bminfo\" disabled />\n\t\t\t\t\t\t\t<label for=\"idcard\"></label>\n\t\t\t\t\t\t\t<label for=\"idcard\" class=\"u-c-ck col8f\">有效身份证号</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl mr56\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"qqnumber\" class=\"regular-checkboxs\" name=\"bminfo\" disabled />\n\t\t\t\t\t\t\t<label for=\"qqnumber\"></label>\n\t\t\t\t\t\t\t<label for=\"qqnumber\" class=\"u-c-ck col8f\">QQ号</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl mr56\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"wxnumber\" class=\"regular-checkboxs\" name=\"bminfo\" disabled />\n\t\t\t\t\t\t\t<label for=\"wxnumber\"></label>\n\t\t\t\t\t\t\t<label for=\"wxnumber\" class=\"u-c-ck col8f\">微信号</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl mr56\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"telephone\" class=\"regular-checkboxs\" name=\"bminfo\" disabled />\n\t\t\t\t\t\t\t<label for=\"telephone\"></label>\n\t\t\t\t\t\t\t<label for=\"telephone\" class=\"u-c-ck col8f\">手机号</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl mr56\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"another\" class=\"regular-checkboxs\" name=\"bminfo\" disabled />\n\t\t\t\t\t\t\t<label for=\"another\"></label>\n\t\t\t\t\t\t\t<label for=\"another\" class=\"u-c-ck col8f\">其他</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"m-c-tit\">设置赛事相关时间节点</p>\n\t\t\t<div class=\"m-c-w\">\n\t\t\t\t<div class=\"m-c-info\">\n\t\t\t\t\t<p class=\"g-c-l\">赛事开始时间</p>\n\t\t\t\t\t<div style=\"width: 200px; position:relative;\">\n\t\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt form_datetime\" id=\"activityBegin\" placeholder=\"请输入开赛时间\" style=\"width:200px;\">\n\t\t\t\t\t\t<label for=\"activityBegin\" class=\"add-on\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"g-c-l mt40\">报名时间</p>\n\t\t\t\t\t<div class=\"g-c-timeipt\">\n\t\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt\" id=\"applyBegin\" placeholder=\"请输入开始时间\" style=\"width:200px;\">\n\t\t\t\t\t\t<label for=\"applyBegin\" class=\"add-on\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t\t&nbsp－&nbsp\n\t\t\t\t\t<div class=\"g-c-timeipt\">\n\t\t\t\t\t\t<input type=\"text\" class=\"u-c-ipt\" id=\"applyEnd\" placeholder=\"请输入结束时间\" style=\"width:200px;\">\n\t\t\t\t\t\t<label for=\"applyEnd\" class=\"add-on\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"g-c-l mt40\">签到时间</p>\n\t\t\t\t\t<div class=\"g-c-qd\">\n\t\t\t\t\t\t<input type=\"checkbox\" id=\"signtime\" class=\"regular-checkboxs\" name=\"\" />\n\t\t\t\t\t\t<label for=\"signtime\"></label><span class=\"u-c-ck\">要求参赛者赛前签到 (仅签到一次)<span class=\"colfdb\">&nbsp&nbsp•&nbsp&nbsp</span>比赛开始前</span>\n\t\t\t\t\t\t<select class=\"u-c-slt u-c-tslt\">\n\t\t\t\t\t\t\t<option value=\"10\">10</option>\n\t\t\t\t\t\t\t<option value=\"15\">15</option>\n\t\t\t\t\t\t\t<option value=\"20\">20</option>\n\t\t\t\t\t\t\t<option value=\"25\">25</option>\n\t\t\t\t\t\t\t<option value=\"30\">30</option>\n\t\t\t\t\t\t\t<option value=\"35\">35</option>\n\t\t\t\t\t\t\t<option value=\"40\">40</option>\n\t\t\t\t\t\t\t<option value=\"45\">45</option>\n\t\t\t\t\t\t\t<option value=\"50\">50</option>\n\t\t\t\t\t\t\t<option value=\"55\">55</option>\n\t\t\t\t\t\t\t<option value=\"60\">60</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<span class=\"u-c-ck\">分钟</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"confirmBtn mb120\">\n\t\t\t\t<a href=\"\" class=\"nextBtn\"><i></i>确认，进入赛制设置</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"steps\">\n\t\t\t<span class=\"line\"></span>\n\t\t\t<ul>\n\t\t\t\t<li class=\"current\"><i></i>填写基本信息</li>\n\t\t\t\t<li><i></i>设置参赛方式</li>\n\t\t\t\t<li><i></i>确认赛事时间</li>\n\t\t\t\t<li><i></i>设置采用赛制</li>\n\t\t\t\t<li><i></i>完善信息并发布</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<top-head></top-head>\n\t<side-bar></side-bar>\n\t<slide-bar></slide-bar>\n\t<create-pop></create-pop>\n\t<div class=\"backLast\">\n\t\t<div class=\"g-z\">\n\t\t\t<a href=\"\"></a>赛制设置\n\t\t</div>\n\t</div>\n\t<div class=\"g-w\">\n\t\t<div class=\"g-z\">\n\t\t\t<p class=\"m-c-tit\">设置赛事采用赛制</p>\n\t\t\t<div class=\"m-c-w\">\n\t\t\t\t<div class=\"m-c-info\">\n\t\t\t\t\t<p class=\"g-c-l\">赛事类型</p>\n\t\t\t\t\t<div class=\"g-c-zbf\">\n\t\t\t\t\t    <div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"online\" name=\"matchitem\" class=\"regular-radio\" checked=\"checked\" value=\"\" />\n\t\t\t\t\t\t\t<label for=\"online\"></label>\n\t\t\t\t\t\t\t<label for=\"online\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t单阶段\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl g-c-ms\">\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"offline\" name=\"matchitem\" class=\"regular-radio\" value=\"\" />\n\t\t\t\t\t\t\t<label for=\"offline\"></label>\n\t\t\t\t\t\t\t<label for=\"offline\" class=\"u-c-per\">\t\t\n\t\t\t\t\t\t\t\t<span class=\"f-fl\">\n\t\t\t\t\t\t\t\t\t双阶段\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"g-c-l mt40\">采用赛制<span class=\"f-fr\"><span class=\"g-help\"></span>查看赛制帮助</span></p>\n\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t<div class=\"f-fl g-c-sz\">\n\t\t\t\t\t\t\t<p class=\"g-c-szt\">单败淘汰制</p>\n\t\t\t\t\t\t\t<div class=\"g-c-szm\">\n\t\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(5) + "\" class=\"mt16\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fr g-c-sz\">\n\t\t\t\t\t\t\t<p class=\"g-c-szt\">双败淘汰制</p>\n\t\t\t\t\t\t\t<div class=\"g-c-szm\">\n\t\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(11) + "\" class=\"mt5\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"g-c-szgz\">\n\t\t\t\t\t\t<div class=\"g-tri-up\">\n\t\t\t\t\t\t\t<div class=\"g-tri-iup\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fl mr56 g-c-kz-sz\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"dbsz\" class=\"regular-checkboxs\" name=\"\" />\n\t\t\t\t\t\t\t<label for=\"dbsz\"></label>\n\t\t\t\t\t\t\t<label for=\"dbsz\" class=\"u-c-kz-sz\">单败淘汰制</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t<div class=\"f-fl g-c-sz\">\n\t\t\t\t\t\t\t<p class=\"g-c-szt\">小组循环制</p>\n\t\t\t\t\t\t\t<div class=\"g-c-szm\">\n\t\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(5) + "\" class=\"mt16\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"f-fr g-c-sz\">\n\t\t\t\t\t\t\t<p class=\"g-c-szt\">小组积分制</p>\n\t\t\t\t\t\t\t<div class=\"g-c-szm\">\n\t\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(11) + "\" class=\"mt5\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"confirmBtn mb120\">\n\t\t\t\t<a href=\"\" class=\"nextBtn\"><i></i>确认，进入赛制设置</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"steps\">\n\t\t\t<span class=\"line\"></span>\n\t\t\t<ul>\n\t\t\t\t<li><i></i>填写基本信息</li>\n\t\t\t\t<li><i></i>设置参赛方式</li>\n\t\t\t\t<li><i></i>确认赛事时间</li>\n\t\t\t\t<li class=\"current\"><i></i>设置采用赛制</li>\n\t\t\t\t<li><i></i>完善信息并发布</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(16)
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(17)
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(18)
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(19)
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 36 */
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
/* 37 */
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
/* 38 */
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