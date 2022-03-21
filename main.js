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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* eslint-disable no-console */\nconst merry = () => {\n    console.log('gatita bonita');\n};\nmerry();\nconst btnGif = document.getElementById('btnGif');\nconst imgGif = document.getElementById('imgGif');\n\nfunction askGif() {\n    fetch('https://api.giphy.com/v1/gifs/translate?api_key=JkHEEFcPelmB7FkjO1QLrNAMn9NV61Vy&s=cats', { mode: 'cors' })\n        .then((x) => x.json()).then((y) => { imgGif.src = y.data.images.original.url; });\n}\n\nbtnGif.onclick = askGif;\n\n\n//# sourceURL=webpack://gifsapidiegoo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;