/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\tlet swiper\r\n\r\n\tfunction initSwiper() {\r\n\t\tif (window.matchMedia('(max-width: 575px)').matches) {\r\n\t\t\tif (!swiper) {\r\n\t\t\t\tswiper = new Swiper('.mySwiper', {\r\n\t\t\t\t\tslidesPerView: 1,\r\n\t\t\t\t\tspaceBetween: 10,\r\n\t\t\t\t\tpagination: {\r\n\t\t\t\t\t\tel: '.swiper-pagination',\r\n\t\t\t\t\t\tclickable: true,\r\n\t\t\t\t\t},\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tif (swiper) {\r\n\t\t\t\tswiper.destroy(true, true)\r\n\t\t\t\tswiper = null\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tinitSwiper()\r\n\twindow.addEventListener('resize', initSwiper)\r\n\r\n\tconst burger = document.querySelector('.burger')\r\n\tconst menuItems = document.querySelectorAll('.header__menu-item')\r\n\r\n\tburger.addEventListener('click', () => {\r\n\t\tburger.classList.toggle('burger-open')\r\n\r\n\t\tlet topItem = 40\r\n\r\n\t\tmenuItems.forEach(item => {\r\n\t\t\tif (!item.classList.contains('header__menu-item--premium')) {\r\n\t\t\t\tif (burger.classList.contains('burger-open')) {\r\n\t\t\t\t\t// Применяем стили, если бургер открыт\r\n\t\t\t\t\titem.style.top = `${topItem}px`\r\n\t\t\t\t\titem.style.right = `0`\r\n\t\t\t\t\titem.style.left = `0`\r\n\t\t\t\t\titem.style.background = '#9564aa'\r\n\t\t\t\t\titem.style.padding = '20px'\r\n\r\n\t\t\t\t\ttopItem += 40\r\n\t\t\t\t} else {\r\n\t\t\t\t\t// Сбрасываем стили, если бургер закрыт\r\n\t\t\t\t\titem.style.top = ''\r\n\t\t\t\t\titem.style.right = '-150px'\r\n\t\t\t\t\titem.style.left = '-150px'\r\n\t\t\t\t\titem.style.background = ''\r\n\t\t\t\t\titem.style.padding = ''\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n\tfunction startTimer() {\r\n\t\tlet timeLeft = 10 * 60\r\n\t\tconst timerElement = document.querySelector('.content__banner-timer')\r\n\r\n\t\tfunction updateTimer() {\r\n\t\t\tconst hours = Math.floor(timeLeft / 3600)\r\n\t\t\tconst minutes = Math.floor((timeLeft % 3600) / 60)\r\n\t\t\tconst seconds = timeLeft % 60\r\n\r\n\t\t\ttimerElement.textContent = `${String(hours).padStart(2, '0')} : ${String(\r\n\t\t\t\tminutes\r\n\t\t\t).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`\r\n\r\n\t\t\ttimeLeft--\r\n\r\n\t\t\tif (timeLeft < 0) {\r\n\t\t\t\tstartTimer() // Перезапуск таймера\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tsetInterval(updateTimer, 1000)\r\n\t}\r\n\r\n\twindow.onload = startTimer\r\n\r\n\tconst parallax = document.querySelector('.parallax')\r\n\r\n\twindow.addEventListener('mousemove', e => {\r\n\t\tconst x = e.clientX / window.innerWidth - 0.5\r\n\t\tconst y = e.clientY / window.innerHeight - 0.5\r\n\r\n\t\tparallax.style.transform = `translate(-1%, 1%) translate(${x * 30}px, ${\r\n\t\t\ty * 30\r\n\t\t}px)`\r\n\t})\r\n})\r\n\n\n//# sourceURL=webpack://dezign_layout_gulp/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;