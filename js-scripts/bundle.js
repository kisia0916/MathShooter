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

/***/ "./ts-scripts/effect.ts":
/*!******************************!*\
  !*** ./ts-scripts/effect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.damage_animation = exports.write_damage_effect = void 0;\r\nconst _1 = __webpack_require__(/*! . */ \"./ts-scripts/index.ts\");\r\nconst init_1 = __webpack_require__(/*! ./init */ \"./ts-scripts/init.ts\");\r\nlet max_effect = 3;\r\nlet now_damage_counter = 0;\r\nconst wait_time = async (time) => {\r\n    return new Promise(resolve => setTimeout(resolve, time));\r\n};\r\n/////......ダメージ系のエフェクト......./////////\r\nconst write_damage_effect = () => {\r\n    // console.log(\"test\")\r\n    _1.ctx.fillStyle = `rgba(225,37,1,${now_damage_counter})`;\r\n    _1.ctx.fillRect(0, 0, _1.canvas.width, _1.canvas.height);\r\n};\r\nexports.write_damage_effect = write_damage_effect;\r\nconst damage_animation = async () => {\r\n    now_damage_counter = 0;\r\n    while (now_damage_counter < 0.3) {\r\n        _1.ctx.clearRect(0, 0, _1.canvas.width, _1.canvas.height);\r\n        (0, init_1.re_render_screen)(\"#FFD700\");\r\n        (0, exports.write_damage_effect)();\r\n        now_damage_counter += 0.02;\r\n        await wait_time(10);\r\n        // now_damage_counter+=0.1\r\n        // re_render_screen()\r\n    }\r\n    while (now_damage_counter >= 0) {\r\n        _1.ctx.clearRect(0, 0, _1.canvas.width, _1.canvas.height);\r\n        (0, init_1.re_render_screen)(\"#FFD700\");\r\n        (0, exports.write_damage_effect)();\r\n        now_damage_counter -= 0.02;\r\n        await wait_time(10);\r\n        // now_damage_counter+=0.1\r\n        // re_render_screen()\r\n    }\r\n    _1.ctx.clearRect(0, 0, _1.canvas.width, _1.canvas.height);\r\n    now_damage_counter = 0;\r\n};\r\nexports.damage_animation = damage_animation;\r\n/////......ダメージ系のエフェクト......./////////\r\n\n\n//# sourceURL=webpack://app_6_game/./ts-scripts/effect.ts?");

/***/ }),

/***/ "./ts-scripts/index.ts":
/*!*****************************!*\
  !*** ./ts-scripts/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.box_size = exports.ctx = exports.canvas = void 0;\r\nconst effect_1 = __webpack_require__(/*! ./effect */ \"./ts-scripts/effect.ts\");\r\nexports.canvas = document.querySelector(\"#canvas\");\r\nexports.ctx = exports.canvas.getContext(\"2d\");\r\nexports.box_size = 70;\r\n(0, effect_1.damage_animation)();\r\n\n\n//# sourceURL=webpack://app_6_game/./ts-scripts/index.ts?");

/***/ }),

/***/ "./ts-scripts/init.ts":
/*!****************************!*\
  !*** ./ts-scripts/init.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.set_next_field = exports.re_render_screen = exports.first_render = exports.write_field = void 0;\r\nconst write_field = () => {\r\n};\r\nexports.write_field = write_field;\r\nconst first_render = (box_color) => {\r\n    (0, exports.write_field)();\r\n};\r\nexports.first_render = first_render;\r\nconst re_render_screen = (box_color) => {\r\n    (0, exports.write_field)();\r\n};\r\nexports.re_render_screen = re_render_screen;\r\nconst set_next_field = (box_color) => {\r\n    (0, exports.write_field)();\r\n};\r\nexports.set_next_field = set_next_field;\r\n// export const write_box_main = (num:number,color:string):void=>{\r\n//     write_box(ctx,stage_data[i][0],stage_data[i][1],box_size,box_size,15,box_color,40,30)\r\n// }\r\n\n\n//# sourceURL=webpack://app_6_game/./ts-scripts/init.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./ts-scripts/index.ts");
/******/ 	
/******/ })()
;