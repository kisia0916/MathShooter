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

/***/ "./ts-scripts/algos.ts":
/*!*****************************!*\
  !*** ./ts-scripts/algos.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.check_hit = void 0;\r\nconst _1 = __webpack_require__(/*! . */ \"./ts-scripts/index.ts\");\r\nconst check_hit = (x, y) => {\r\n    let flg = 0;\r\n    for (let i = 0; _1.map_data.length > i; i++) {\r\n        let center_x = _1.map_data[i].x + _1.map_data[i].size_w / 2;\r\n        let center_y = _1.map_data[i].y + _1.map_data[i].size_h / 2;\r\n        let p_center_x = x + (_1.box_size / 2);\r\n        let p_center_y = y + (_1.box_size / 2);\r\n        if (Math.abs(center_x - p_center_x) < _1.map_data[i].size_w / 2 + _1.box_size / 2 && Math.abs(center_y - p_center_y) < _1.map_data[i].size_h / 2 + _1.box_size / 2) {\r\n            // player_color.c = \"red\"\r\n            flg = 1;\r\n        }\r\n    }\r\n    if (flg == 0) {\r\n        // player_color.c = \"white\"\r\n    }\r\n    return flg;\r\n};\r\nexports.check_hit = check_hit;\r\n\n\n//# sourceURL=webpack://app_6_game/./ts-scripts/algos.ts?");

/***/ }),

/***/ "./ts-scripts/index.ts":
/*!*****************************!*\
  !*** ./ts-scripts/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.other_players = exports.cerect_back = exports.player_color = exports.speed = exports.box_number = exports.p_y_screen = exports.p_x_screen = exports.p_y = exports.p_x = exports.box_size = exports.map_data = exports.screen_max_h = exports.screen_max_w = exports.field_y = exports.field_w = exports.ctx = exports.canvas = void 0;\r\nconst init_1 = __webpack_require__(/*! ./init */ \"./ts-scripts/init.ts\");\r\nconst write_object_1 = __webpack_require__(/*! ./write_object */ \"./ts-scripts/write_object.ts\");\r\nconst userInterface_1 = __webpack_require__(/*! ./userInterface */ \"./ts-scripts/userInterface.ts\");\r\n// import { map_data_local } from \"./maps\"\r\nexports.canvas = document.querySelector(\"#canvas\");\r\nexports.ctx = exports.canvas.getContext(\"2d\");\r\nexports.field_w = 6000;\r\nexports.field_y = 4000;\r\nexports.screen_max_w = 1734;\r\nexports.screen_max_h = 1134;\r\nexports.map_data = [\r\n    // {x:0,y:0,size_w:6000,size_h:4000,render_type:2},\r\n    { x: 0, y: 0, size_w: 60, size_h: 60, render_type: 1 },\r\n    // {x:2950,y:1850,size_w:5,size_h:300,render_type:2},\r\n    { x: 3000, y: 1900, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3065, y: 1900, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3130, y: 1900, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3195, y: 1900, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3260, y: 1900, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3325, y: 1900, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3390, y: 1900, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3000, y: 1835, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3000, y: 1770, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3000, y: 1705, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3000, y: 1640, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3000, y: 1575, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3000, y: 1510, size_w: 60, size_h: 60, render_type: 1 },\r\n    { x: 3585, y: 1900, size_w: 60, size_h: 60, render_type: 1 },\r\n    // {x:3455,y:1900,size_w:30,size_h:30},\r\n];\r\nexports.box_size = 64;\r\nexports.p_x = { p: 3000 };\r\nexports.p_y = { p: 2000 };\r\nexports.p_x_screen = exports.screen_max_w / 2;\r\nexports.p_y_screen = exports.screen_max_h / 2;\r\nexports.box_number = 40;\r\nexports.speed = 8;\r\nexports.player_color = { c: \"white\" };\r\nexports.cerect_back = 0;\r\nexports.other_players = []; //{x,y,num,color,status}\r\n// write_player(ctx,-10,p_y_screen,box_size,box_size,15,\"#FFD700\",43,30)\r\nconst main = () => {\r\n    (0, write_object_1.write_player)(exports.ctx, exports.p_x_screen, exports.p_y_screen, exports.box_size, exports.box_size, 15, \"#FFD700\", \"\", 30);\r\n    window.requestAnimationFrame(main_loop);\r\n};\r\nconst main_loop = () => {\r\n    // damage_animation()\r\n    exports.ctx.clearRect(0, 0, exports.canvas.width, exports.canvas.height);\r\n    (0, init_1.render_border)();\r\n    (0, init_1.get_key_event)();\r\n    (0, init_1.render_objects)();\r\n    (0, init_1.render_objects)();\r\n    (0, userInterface_1.write_ui)(exports.ctx);\r\n    (0, write_object_1.back_pack_cerect)(exports.cerect_back);\r\n    // damage_animation()\r\n    // console.log(p_x,p_y)\r\n    (0, write_object_1.write_player)(exports.ctx, exports.p_x_screen, exports.p_y_screen, exports.box_size, exports.box_size, 15, exports.player_color.c, \"\", 30);\r\n    window.requestAnimationFrame(main_loop);\r\n};\r\nmain();\r\n// setInterval(main_loop,0.5)\r\n\n\n//# sourceURL=webpack://app_6_game/./ts-scripts/index.ts?");

/***/ }),

/***/ "./ts-scripts/init.ts":
/*!****************************!*\
  !*** ./ts-scripts/init.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.render_border = exports.render_objects = exports.render_other_player = exports.set_next_field = exports.re_render_screen = exports.first_render = exports.get_key_event = exports.right_push = exports.left_push = exports.down_push = exports.up_push = exports.set_border = exports.border_data = exports.write_screen_flame = void 0;\r\nconst write_object_1 = __webpack_require__(/*! ./write_object */ \"./ts-scripts/write_object.ts\");\r\nconst _1 = __webpack_require__(/*! . */ \"./ts-scripts/index.ts\");\r\nconst index_1 = __webpack_require__(/*! ./index */ \"./ts-scripts/index.ts\");\r\nconst algos_1 = __webpack_require__(/*! ./algos */ \"./ts-scripts/algos.ts\");\r\nconst write_screen_flame = () => {\r\n};\r\nexports.write_screen_flame = write_screen_flame;\r\nexports.border_data = [\r\n    { x: 0, y: 300, size_w: 5, size_h: 300, color: \"orange\", type: 2, debug: 1 }\r\n];\r\nconst set_border = () => {\r\n    for (let i = 0; 100 > i; i++) {\r\n        let push_data = { x: i * 65, y: 0, size_w: 0.1, size_h: 6000, color: \"white\", type: 1 };\r\n        exports.border_data.push(push_data);\r\n        console.log(exports.border_data);\r\n    }\r\n    for (let i = 0; 100 > i; i++) {\r\n        let push_data = { x: 0, y: i * 65, size_w: 0.1, size_h: 6000, color: \"white\", type: 2 };\r\n        exports.border_data.push(push_data);\r\n        console.log(exports.border_data);\r\n    }\r\n};\r\nexports.set_border = set_border;\r\n(0, exports.set_border)();\r\nexports.up_push = false;\r\nexports.down_push = false;\r\nexports.left_push = false;\r\nexports.right_push = false;\r\ndocument.addEventListener('keydown', (event) => {\r\n    if (event.key == \"w\") {\r\n        exports.up_push = true;\r\n    }\r\n    if (event.key == \"s\") {\r\n        exports.down_push = true;\r\n    }\r\n    if (event.key == \"a\") {\r\n        exports.left_push = true;\r\n    }\r\n    if (event.key == \"d\") {\r\n        exports.right_push = true;\r\n    }\r\n});\r\n//keyが離されたなら\r\ndocument.addEventListener('keyup', (event) => {\r\n    if (event.key == \"w\") {\r\n        exports.up_push = false;\r\n    }\r\n    if (event.key == \"s\") {\r\n        exports.down_push = false;\r\n    }\r\n    if (event.key == \"a\") {\r\n        exports.left_push = false;\r\n    }\r\n    if (event.key == \"d\") {\r\n        exports.right_push = false;\r\n    }\r\n});\r\nconst hit_wal = (x, y) => {\r\n    let flg = (0, algos_1.check_hit)(x, y);\r\n    console.log(flg);\r\n    return flg;\r\n};\r\nconst get_key_event = () => {\r\n    let co = 0;\r\n    if (exports.up_push) {\r\n        if (co == 1) {\r\n            if ((0, algos_1.check_hit)(index_1.p_x.p, index_1.p_y.p - Math.floor(_1.speed / 2)) == 0) {\r\n                index_1.p_y.p -= Math.floor(_1.speed / 2);\r\n            }\r\n        }\r\n        else {\r\n            if ((0, algos_1.check_hit)(index_1.p_x.p, index_1.p_y.p - _1.speed) == 0) {\r\n                index_1.p_y.p -= _1.speed;\r\n                co = 1;\r\n            }\r\n        }\r\n        //上キーが押された時の処理\r\n    }\r\n    if (exports.down_push) {\r\n        //下キーが押された時の処理\r\n        if (co == 1) {\r\n            if ((0, algos_1.check_hit)(index_1.p_x.p, index_1.p_y.p + Math.floor(_1.speed / 2)) == 0) {\r\n                index_1.p_y.p += Math.floor(_1.speed / 2);\r\n            }\r\n        }\r\n        else {\r\n            console.log(\"a\");\r\n            if ((0, algos_1.check_hit)(index_1.p_x.p, index_1.p_y.p + _1.speed) == 0) {\r\n                index_1.p_y.p += _1.speed;\r\n                co = 1;\r\n            }\r\n        }\r\n    }\r\n    if (exports.left_push) {\r\n        //左キーが押された時の処理\r\n        if (co == 1) {\r\n            if ((0, algos_1.check_hit)(index_1.p_x.p - Math.floor(_1.speed / 2), index_1.p_y.p) == 0) {\r\n                index_1.p_x.p -= Math.floor(_1.speed / 2);\r\n            }\r\n        }\r\n        else {\r\n            if ((0, algos_1.check_hit)(index_1.p_x.p - _1.speed, index_1.p_y.p) == 0) {\r\n                index_1.p_x.p -= _1.speed;\r\n                co = 1;\r\n            }\r\n        }\r\n    }\r\n    if (exports.right_push) {\r\n        //右キーが押された時の処理\r\n        if (co == 1) {\r\n            if ((0, algos_1.check_hit)(index_1.p_x.p + Math.floor(_1.speed / 2), index_1.p_y.p) == 0) {\r\n                index_1.p_x.p += Math.floor(_1.speed / 2);\r\n            }\r\n        }\r\n        else {\r\n            if ((0, algos_1.check_hit)(index_1.p_x.p + _1.speed / 2, index_1.p_y.p) == 0) {\r\n                index_1.p_x.p += _1.speed;\r\n                co = 1;\r\n            }\r\n        }\r\n    }\r\n};\r\nexports.get_key_event = get_key_event;\r\nconst first_render = (box_color) => {\r\n    (0, exports.write_screen_flame)();\r\n};\r\nexports.first_render = first_render;\r\nconst re_render_screen = () => {\r\n    _1.ctx.clearRect(0, 0, _1.canvas.width, _1.canvas.height);\r\n    (0, exports.write_screen_flame)();\r\n    (0, exports.render_other_player)();\r\n    (0, write_object_1.write_player)(_1.ctx, index_1.p_x.p, index_1.p_y.p, _1.box_size, _1.box_size, 15, \"#FFD700\", \"\", _1.box_number);\r\n};\r\nexports.re_render_screen = re_render_screen;\r\nconst set_next_field = (box_color) => {\r\n    (0, exports.write_screen_flame)();\r\n};\r\nexports.set_next_field = set_next_field;\r\nconst render_other_player = () => {\r\n    for (let i = 0; _1.other_players.length > i; i++) {\r\n        if (_1.other_players[i].state == 1) {\r\n            let x = _1.other_players[i].x;\r\n            let y = _1.other_players[i].y;\r\n            let num = _1.other_players[i].num;\r\n            let color = _1.other_players[i].color;\r\n            let state = _1.other_players[i].state;\r\n            (0, write_object_1.write_player)(_1.ctx, x, y, _1.box_size, _1.box_size, 15, color, num.toString(), 30);\r\n        }\r\n    }\r\n};\r\nexports.render_other_player = render_other_player;\r\nconst render_objects = () => {\r\n    let now_x_center = index_1.p_x.p + Math.floor(_1.box_size / 2);\r\n    let now_y_center = index_1.p_y.p + Math.floor(_1.box_size / 2);\r\n    for (let i = 0; _1.map_data.length > i; i++) {\r\n        if (_1.map_data[i].x + _1.map_data[i].size_w >= now_x_center - (_1.screen_max_w / 2) - _1.map_data[i].size_w * 2 && _1.map_data[i].x + _1.map_data[i].size_w <= now_x_center + (_1.screen_max_w / 2) + _1.map_data[i].size_w * 2 && _1.map_data[i].y + _1.map_data[i].size_h >= now_y_center - (_1.screen_max_h / 2) - _1.map_data[i].size_h * 2 && _1.map_data[i].y + _1.map_data[i].size_h <= now_y_center + (_1.screen_max_h / 2) + _1.map_data[i].size_h * 2) {\r\n            let obj_x = _1.p_x_screen - (index_1.p_x.p - _1.map_data[i].x);\r\n            let obj_y = _1.p_y_screen - (index_1.p_y.p - _1.map_data[i].y);\r\n            if (_1.map_data[i].render_type == 1) {\r\n                // console.log(obj_x,obj_y)\r\n                (0, write_object_1.write_box)(_1.ctx, obj_x, obj_y, _1.map_data[i].size_w, _1.map_data[i].size_h, 15, \"#A9A9A9\", \"\", 30, \"#696969\");\r\n            }\r\n            else if (_1.map_data[i].render_type == 2) {\r\n                // console.log(\"ff\",map_data[i].render_type)\r\n                // render_back(ctx,obj_x,obj_y,map_data[i].size_w,map_data[i].size_h,\"white\",1)\r\n            }\r\n        }\r\n    }\r\n};\r\nexports.render_objects = render_objects;\r\nconst render_border = () => {\r\n    let now_x_center = index_1.p_x.p + Math.floor(_1.box_size / 2);\r\n    let now_y_center = index_1.p_y.p + Math.floor(_1.box_size / 2);\r\n    for (let i = 0; exports.border_data.length > i; i++) {\r\n        if (exports.border_data[i].type == 1) {\r\n            if (exports.border_data[i].x + exports.border_data[i].size_w >= now_x_center - (_1.screen_max_w / 2) - exports.border_data[i].size_w - 30 && exports.border_data[i].x + exports.border_data[i].size_w <= now_x_center + (_1.screen_max_w / 2) + exports.border_data[i].size_w + 35 && exports.border_data[i].y + exports.border_data[i].size_h >= now_y_center - (_1.screen_max_h / 2) - exports.border_data[i].size_h * 2 && exports.border_data[i].y + exports.border_data[i].size_h <= now_y_center + (_1.screen_max_h / 2) + exports.border_data[i].size_h * 2) {\r\n                let obj_x = _1.p_x_screen - (index_1.p_x.p - exports.border_data[i].x);\r\n                let obj_y = _1.p_y_screen - (index_1.p_y.p - exports.border_data[i].y);\r\n                // console.log(\"ff\",border_data[i].render_type)\r\n                (0, write_object_1.render_back)(_1.ctx, obj_x, obj_y, exports.border_data[i].size_w, exports.border_data[i].size_h, exports.border_data[i].color, exports.border_data[i].type);\r\n            }\r\n        }\r\n        else if (exports.border_data[i].type == 2) {\r\n            if (exports.border_data[i].x + exports.border_data[i].size_h >= now_x_center - (_1.screen_max_w / 2) - exports.border_data[i].size_h * 2 && exports.border_data[i].x + exports.border_data[i].size_h <= now_x_center + (_1.screen_max_w / 2) + exports.border_data[i].size_h + 35 && exports.border_data[i].y + exports.border_data[i].size_w >= now_y_center - (_1.screen_max_h / 2) - exports.border_data[i].size_w * 2 && exports.border_data[i].y + exports.border_data[i].size_w <= now_y_center + (_1.screen_max_h / 2) + exports.border_data[i].size_w * 2) {\r\n                let obj_x = _1.p_x_screen - (index_1.p_x.p - exports.border_data[i].x);\r\n                let obj_y = _1.p_y_screen - (index_1.p_y.p - exports.border_data[i].y);\r\n                // console.log(\"ff\",border_data[i].render_type)\r\n                (0, write_object_1.render_back)(_1.ctx, obj_x, obj_y, exports.border_data[i].size_w, exports.border_data[i].size_h, exports.border_data[i].color, exports.border_data[i].type);\r\n                if (exports.border_data[i].debug == 1) {\r\n                    console.log(\"a\");\r\n                }\r\n            }\r\n        }\r\n    }\r\n};\r\nexports.render_border = render_border;\r\n// export const write_box_main = (num:number,color:string):void=>{\r\n//     write_box(ctx,stage_data[i][0],stage_data[i][1],box_size,box_size,15,box_color,40,30)\r\n// }\r\n\n\n//# sourceURL=webpack://app_6_game/./ts-scripts/init.ts?");

/***/ }),

/***/ "./ts-scripts/userInterface.ts":
/*!*************************************!*\
  !*** ./ts-scripts/userInterface.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.write_ui = void 0;\r\nconst _1 = __webpack_require__(/*! . */ \"./ts-scripts/index.ts\");\r\nconst write_object_1 = __webpack_require__(/*! ./write_object */ \"./ts-scripts/write_object.ts\");\r\nconst write_ui = (ctx) => {\r\n    ///HP\r\n    ctx.lineWidth = 1;\r\n    ctx.fillStyle = \"white\";\r\n    ctx.font = \"100px arial black\";\r\n    ctx.fillText(\"100\", 80, _1.screen_max_h - 0);\r\n    //ミニマップ\r\n    (0, write_object_1.write_box)(ctx, _1.screen_max_w - 200, 17, 250, 250, 10, \"rgba(255,255,255,0.3)\", \"\", 12, \"rgb(160,160,160)\");\r\n    // write_box(ctx,15,15,60,60,10,\"white\",\"\",12)\r\n    // render_back(ctx,screen_max_w+200,15,200,200,\"white\",1)\r\n    //持ち物バー\r\n    (0, write_object_1.write_backpack)(ctx, (_1.screen_max_w + 1100) / 2 - 250, _1.screen_max_h - 86, 600, 100, 10, \"rgba(169,169,169,0.6)\", \"\", 30, \"rgb(169,169,169)\");\r\n    (0, write_object_1.write_backpack)(ctx, (_1.screen_max_w + 1100) / 2 - 230, _1.screen_max_h - 77, 80, 80, 8, \"#DCDCDC\", \"+\", 60, \"#5E5E5E\", 5);\r\n    (0, write_object_1.write_backpack)(ctx, (_1.screen_max_w + 1100) / 2 - 135, _1.screen_max_h - 77, 80, 80, 8, \"#DCDCDC\", \"−\", 60, \"#5E5E5E\", 5);\r\n    (0, write_object_1.write_backpack)(ctx, (_1.screen_max_w + 1100) / 2 - 40, _1.screen_max_h - 77, 80, 80, 8, \"#DCDCDC\", \"×\", 60, \"#5E5E5E\", 5);\r\n    (0, write_object_1.write_backpack)(ctx, (_1.screen_max_w + 1100) / 2 + 55, _1.screen_max_h - 77, 80, 80, 8, \"#DCDCDC\", \"÷\", 60, \"#5E5E5E\", 5);\r\n    (0, write_object_1.write_backpack)(ctx, (_1.screen_max_w + 1100) / 2 + 150, _1.screen_max_h - 77, 80, 80, 8, \"#DCDCDC\", \"\", 30, \"#5E5E5E\", 5);\r\n    (0, write_object_1.write_backpack)(ctx, (_1.screen_max_w + 1100) / 2 + 245, _1.screen_max_h - 77, 80, 80, 8, \"#DCDCDC\", \"\", 30, \"#5E5E5E\", 5);\r\n};\r\nexports.write_ui = write_ui;\r\n\n\n//# sourceURL=webpack://app_6_game/./ts-scripts/userInterface.ts?");

/***/ }),

/***/ "./ts-scripts/write_object.ts":
/*!************************************!*\
  !*** ./ts-scripts/write_object.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.back_pack_cerect = exports.render_back = exports.write_player = exports.write_box2 = exports.write_backpack_cerect = exports.write_backpack = exports.write_box = void 0;\r\nconst _1 = __webpack_require__(/*! . */ \"./ts-scripts/index.ts\");\r\nconst write_box = (ctx, x, y, w, h, r, color, num, text_size, stroke_color, stroke_width) => {\r\n    ctx.beginPath();\r\n    ctx.lineWidth = 1;\r\n    if (!stroke_color) {\r\n        ctx.strokeStyle = color;\r\n    }\r\n    else {\r\n        ctx.strokeStyle = stroke_color;\r\n        ctx.lineWidth = stroke_width;\r\n    }\r\n    ctx.fillStyle = color;\r\n    ctx.moveTo(x, y + r); //←①\r\n    ctx.arc(x + r, y + h - r, r, Math.PI, Math.PI * 0.5, true); //←②\r\n    ctx.arc(x + w - r, y + h - r, r, Math.PI * 0.5, 0, true); //←③\r\n    ctx.arc(x + w - r, y + r, r, 0, Math.PI * 1.5, true); //←④\r\n    ctx.arc(x + r, y + r, r, Math.PI * 1.5, Math.PI, true); //←⑤\r\n    ctx.closePath(); //←⑥\r\n    ctx.stroke(); //←⑦\r\n    ctx.fill(); //←⑧\r\n    ctx.lineWidth = 2;\r\n    ctx.fillStyle = \"#2e2e2e\";\r\n    ctx.font = `${text_size}px Osaka-Mono`;\r\n    if (num.toString().length == 2) {\r\n        ctx.fillText(`${num}`, x + 16, y + 45);\r\n    }\r\n    else if (num.toString().length == 1) {\r\n        ctx.fillText(`${num}`, x + 26, y + 45);\r\n    }\r\n    ctx.stroke();\r\n};\r\nexports.write_box = write_box;\r\nconst write_backpack = (ctx, x, y, w, h, r, color, num, text_size, stroke_color, stroke_width) => {\r\n    ctx.beginPath();\r\n    ctx.lineWidth = 1;\r\n    if (!stroke_color) {\r\n        ctx.strokeStyle = color;\r\n    }\r\n    else {\r\n        ctx.strokeStyle = stroke_color;\r\n        ctx.lineWidth = stroke_width;\r\n    }\r\n    ctx.fillStyle = color;\r\n    ctx.moveTo(x, y + r); //←①\r\n    ctx.arc(x + r, y + h - r, r, Math.PI, Math.PI * 0.5, true); //←②\r\n    ctx.arc(x + w - r, y + h - r, r, Math.PI * 0.5, 0, true); //←③\r\n    ctx.arc(x + w - r, y + r, r, 0, Math.PI * 1.5, true); //←④\r\n    ctx.arc(x + r, y + r, r, Math.PI * 1.5, Math.PI, true); //←⑤\r\n    ctx.closePath(); //←⑥\r\n    ctx.stroke(); //←⑦\r\n    ctx.fill(); //←⑧\r\n    ctx.lineWidth = 2;\r\n    ctx.fillStyle = \"#414141\";\r\n    ctx.font = `bolder ${text_size}px Osaka-Mono`;\r\n    if (num.toString().length == 2) {\r\n        ctx.lineWidth = 1;\r\n        ctx.fillText(`${num}`, x + 10, y + 45);\r\n    }\r\n    else if (num.toString().length == 1) {\r\n        ctx.lineWidth = 1;\r\n        ctx.fillText(`${num}`, x + 15, y + 58);\r\n    }\r\n    ctx.lineWidth = 4;\r\n    ctx.stroke();\r\n};\r\nexports.write_backpack = write_backpack;\r\nconst write_backpack_cerect = (ctx, x, y, w, h, r, color, stroke_color, stroke_width) => {\r\n    ctx.beginPath();\r\n    ctx.lineWidth = 1;\r\n    if (!stroke_color) {\r\n        ctx.strokeStyle = color;\r\n    }\r\n    else {\r\n        ctx.strokeStyle = stroke_color;\r\n        ctx.lineWidth = stroke_width;\r\n    }\r\n    ctx.fillStyle = color;\r\n    ctx.moveTo(x, y + r); //←①\r\n    ctx.arc(x + r, y + h - r, r, Math.PI, Math.PI * 0.5, true); //←②\r\n    ctx.arc(x + w - r, y + h - r, r, Math.PI * 0.5, 0, true); //←③\r\n    ctx.arc(x + w - r, y + r, r, 0, Math.PI * 1.5, true); //←④\r\n    ctx.arc(x + r, y + r, r, Math.PI * 1.5, Math.PI, true); //←⑤\r\n    ctx.closePath(); //←⑥\r\n    ctx.stroke(); //←⑦\r\n    // ctx.fill();  //←⑧\r\n    ctx.lineWidth = 2;\r\n    // ctx.fillStyle = \"#414141\";\r\n    ctx.lineWidth = 4;\r\n    ctx.stroke();\r\n};\r\nexports.write_backpack_cerect = write_backpack_cerect;\r\nconst write_box2 = (ctx, x, y, w, h, r, color, num, text_size) => {\r\n    ctx.beginPath();\r\n    ctx.lineWidth = 1;\r\n    ctx.strokeStyle = color;\r\n    ctx.fillStyle = color;\r\n    ctx.moveTo(x, y + r); //←①\r\n    ctx.arc(x + r, y + h - r, r, Math.PI, Math.PI * 0.5, true); //←②\r\n    ctx.arc(x + w - r, y + h - r, r, Math.PI * 0.5, 0, true); //←③\r\n    ctx.arc(x + w - r, y + r, r, 0, Math.PI * 1.5, true); //←④\r\n    ctx.arc(x + r, y + r, r, Math.PI * 1.5, Math.PI, true); //←⑤\r\n    ctx.closePath(); //←⑥\r\n    ctx.stroke(); //←⑦\r\n    ctx.fill(); //←⑧\r\n    ctx.lineWidth = 2;\r\n    ctx.fillStyle = \"#2e2e2e\";\r\n    ctx.font = `bold ${text_size}px Osaka-Mono`;\r\n    if (num.toString().length == 2) {\r\n        ctx.fillText(`${num}`, x + 13, y + 65);\r\n        // ctx.stroke()\r\n    }\r\n    else if (num.toString().length == 1) {\r\n        ctx.fillText(`${num}`, x + 29, y + 65);\r\n        // ctx.stroke()\r\n    }\r\n    ctx.stroke();\r\n};\r\nexports.write_box2 = write_box2;\r\nconst write_player = (ctx, x, y, w, h, r, color, num, text_size) => {\r\n    ctx.beginPath();\r\n    ctx.lineWidth = 1;\r\n    ctx.strokeStyle = color;\r\n    ctx.fillStyle = color;\r\n    ctx.moveTo(x, y + r); //←①\r\n    ctx.arc(x + r, y + h - r, r, Math.PI, Math.PI * 0.5, true); //←②\r\n    ctx.arc(x + w - r, y + h - r, r, Math.PI * 0.5, 0, true); //←③\r\n    ctx.arc(x + w - r, y + r, r, 0, Math.PI * 1.5, true); //←④\r\n    ctx.arc(x + r, y + r, r, Math.PI * 1.5, Math.PI, true); //←⑤\r\n    ctx.closePath(); //←⑥\r\n    ctx.stroke(); //←⑦\r\n    ctx.fill(); //←⑧\r\n    ctx.lineWidth = 2;\r\n    ctx.fillStyle = \"#2e2e2e\";\r\n    ctx.font = `${text_size}px Osaka-Mono`;\r\n    if (num.toString().length == 2) {\r\n        ctx.fillText(`${num}`, x + 12, y + 42);\r\n    }\r\n    else if (num.toString().length == 1) {\r\n        ctx.fillText(`${num}`, x + 23, y + 42);\r\n    }\r\n    ctx.stroke();\r\n};\r\nexports.write_player = write_player;\r\nconst render_back = (ctx, x, y, w, h, color, type) => {\r\n    if (type == 1) {\r\n        ctx.beginPath();\r\n        ctx.moveTo(x, y); // 始点に移動\r\n        ctx.lineTo(x, y + h); // 終点\r\n        ctx.strokeStyle = color; // 線の色\r\n        ctx.lineWidth = w; // 線の太さ\r\n        ctx.stroke();\r\n    }\r\n    else if (type == 2) {\r\n        ctx.beginPath();\r\n        ctx.moveTo(x, y); // 始点に移動\r\n        ctx.lineTo(x + h, y); // 終点\r\n        ctx.strokeStyle = color; // 線の色\r\n        ctx.lineWidth = w; // 線の太さ\r\n        ctx.stroke();\r\n    }\r\n    let write_num_w = w / 60;\r\n    let write_num_h = h / 60;\r\n    let co = 0;\r\n};\r\nexports.render_back = render_back;\r\nconst back_pack_cerect = (cerect_num) => {\r\n    (0, exports.write_backpack_cerect)(_1.ctx, (_1.screen_max_w + 1100) / 2 - (230 - 95 * cerect_num), _1.screen_max_h - 77, 80, 80, 6, \"\", \"white\", 5);\r\n};\r\nexports.back_pack_cerect = back_pack_cerect;\r\n\n\n//# sourceURL=webpack://app_6_game/./ts-scripts/write_object.ts?");

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