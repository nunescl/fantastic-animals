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

/***/ "./dataset/js/modules/accordion-faq.js":
/*!*********************************************!*\
  !*** ./dataset/js/modules/accordion-faq.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordionFaq)\n/* harmony export */ });\nfunction initAccordionFaq() {\r\n  const accordionList = document.querySelectorAll(\r\n    '[data-anime=\"accordion\"] dt',\r\n  );\r\n  const activeClass = 'active';\r\n\r\n  function activeAccordion() {\r\n    this.classList.toggle(activeClass);\r\n    this.nextElementSibling.classList.toggle(activeClass);\r\n  }\r\n\r\n  if (accordionList.length) {\r\n    accordionList[0].classList.add(activeClass);\r\n    accordionList[0].nextElementSibling.classList.add(activeClass);\r\n\r\n    accordionList.forEach((item) => {\r\n      item.addEventListener('click', activeAccordion);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/accordion-faq.js?");

/***/ }),

/***/ "./dataset/js/modules/animate-numbers.js":
/*!***********************************************!*\
  !*** ./dataset/js/modules/animate-numbers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimateNumbers)\n/* harmony export */ });\nfunction initAnimateNumbers() {\r\n  function animateNumbers() {\r\n    const numbers = document.querySelectorAll('[data-number]');\r\n\r\n    numbers.forEach((number) => {\r\n      const total = +number.innerText;\r\n      const increase = Math.floor(total / 72);\r\n\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start = start + increase;\r\n        number.innerText = start;\r\n        if (start > total) {\r\n          number.innerText = total.toLocaleString();\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains('active')) {\r\n      observer.disconnect();\r\n      animateNumbers();\r\n    }\r\n  }\r\n\r\n  const observerTarget = document.querySelector('.numbers');\r\n  const observer = new MutationObserver(handleMutation);\r\n  observer.observe(observerTarget, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/animate-numbers.js?");

/***/ }),

/***/ "./dataset/js/modules/animate-scroll.js":
/*!**********************************************!*\
  !*** ./dataset/js/modules/animate-scroll.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimateScroll)\n/* harmony export */ });\nfunction initAnimateScroll() {\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  const windowHalf = window.innerHeight * 0.6;\r\n\r\n  function animateScroll() {\r\n    sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const isSectionVisible = sectionTop - windowHalf < 0;\r\n      if (isSectionVisible) {\r\n        section.classList.add('active');\r\n      } else if (section.classList.contains('active')) {\r\n        section.classList.remove('active');\r\n      }\r\n    });\r\n  }\r\n\r\n  if (sections.length) {\r\n    animateScroll();\r\n    window.addEventListener('scroll', animateScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/animate-scroll.js?");

/***/ }),

/***/ "./dataset/js/modules/dropdown-menu.js":
/*!*********************************************!*\
  !*** ./dataset/js/modules/dropdown-menu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./dataset/js/modules/outsideclick.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\r\n  dropdownMenus.forEach((menu) => {\r\n    ['touch', 'click'].forEach((userEvent) => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.add('active');\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\r\n      this.classList.remove('active');\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./dataset/js/modules/fetch-animals.js":
/*!*********************************************!*\
  !*** ./dataset/js/modules/fetch-animals.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimals)\n/* harmony export */ });\n/* harmony import */ var _animate_numbers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate-numbers.js */ \"./dataset/js/modules/animate-numbers.js\");\n\r\n\r\nfunction initFetchAnimals() {\r\n  async function fetchAnimals(url) {\r\n    try {\r\n      const animalsResponse = await fetch(url);\r\n      const animalsJSON = await animalsResponse.json();\r\n      const numbersGrid = document.querySelector('.numbers-grid');\r\n\r\n      animalsJSON.forEach((animal) => {\r\n        const divAnimal = createAnimal(animal);\r\n        numbersGrid.appendChild(divAnimal);\r\n      });\r\n      (0,_animate_numbers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch (error) {\r\n      console.log(error);\r\n    }\r\n  }\r\n\r\n  function createAnimal(animal) {\r\n    const div = document.createElement('div');\r\n    div.classList.add('animal-number');\r\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span><p>${animal.description}\r\n  </p>`;\r\n    return div;\r\n  }\r\n\r\n  fetchAnimals('../animalsapi.json');\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/fetch-animals.js?");

/***/ }),

/***/ "./dataset/js/modules/fetch-btc.js":
/*!*****************************************!*\
  !*** ./dataset/js/modules/fetch-btc.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBtc)\n/* harmony export */ });\nfunction initFetchBtc() {\r\n  fetch('https://blockchain.info/ticker')\r\n    .then((response) => response.json())\r\n    .then((btc) => {\r\n      const btcPrice = document.querySelector('.btc-price');\r\n      btcPrice.innerText = (100 / btc.USD.sell).toFixed(4);\r\n    })\r\n    .catch((error) => {\r\n      console.log(Error(error));\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/fetch-btc.js?");

/***/ }),

/***/ "./dataset/js/modules/menu-mobile.js":
/*!*******************************************!*\
  !*** ./dataset/js/modules/menu-mobile.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./dataset/js/modules/outsideclick.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const events = ['click', 'touch'];\r\n\r\n  function openMenu() {\r\n    menuList.classList.add('active');\r\n    menuButton.classList.add('active');\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, events, () => {\r\n      menuList.classList.remove('active');\r\n      menuButton.classList.remove('active');\r\n    });\r\n  }\r\n\r\n  if (menuButton) {\r\n    events.forEach((event) => menuButton.addEventListener(event, openMenu));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/menu-mobile.js?");

/***/ }),

/***/ "./dataset/js/modules/modal.js":
/*!*************************************!*\
  !*** ./dataset/js/modules/modal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  const buttomOpen = document.querySelector('[data-modal=\"open\"]');\r\n  const buttomClose = document.querySelector('[data-modal=\"close\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  function toggleModal(event) {\r\n    event.preventDefault();\r\n    containerModal.classList.toggle('active');\r\n  }\r\n\r\n  function clickOut(event) {\r\n    if (event.target === this) toggleModal(event);\r\n  }\r\n\r\n  if (buttomOpen && buttomClose && containerModal) {\r\n    buttomOpen.addEventListener('click', toggleModal);\r\n    buttomClose.addEventListener('click', toggleModal);\r\n    containerModal.addEventListener('click', clickOut);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/modal.js?");

/***/ }),

/***/ "./dataset/js/modules/operation.js":
/*!*****************************************!*\
  !*** ./dataset/js/modules/operation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initOperation)\n/* harmony export */ });\nfunction initOperation() {\r\n  const operation = document.querySelector('[data-week]');\r\n  const daysWeek = operation.dataset.week.split(',').map(Number);\r\n  const timeWeek = operation.dataset.time.split(',').map(Number);\r\n\r\n  const dateNow = new Date();\r\n  const dayNow = dateNow.getDay();\r\n  const timeNow = dateNow.getHours();\r\n\r\n  const openWeek = daysWeek.indexOf(dayNow) !== -1;\r\n\r\n  const openTime = timeNow >= timeWeek[0] && timeNow < timeWeek[1];\r\n\r\n  if (openWeek && openTime) {\r\n    operation.classList.add('open');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/operation.js?");

/***/ }),

/***/ "./dataset/js/modules/outsideclick.js":
/*!********************************************!*\
  !*** ./dataset/js/modules/outsideclick.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n    element.setAttribute(outside, '');\r\n  }\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/outsideclick.js?");

/***/ }),

/***/ "./dataset/js/modules/soft-scroll.js":
/*!*******************************************!*\
  !*** ./dataset/js/modules/soft-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSoft)\n/* harmony export */ });\nfunction initScrollSoft() {\r\n  const internalLinks = document.querySelectorAll(\r\n    '[data-menu=\"soft\"] a[href^=\"#\"]',\r\n  );\r\n\r\n  function scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute('href');\r\n    const section = document.querySelector(href);\r\n    const above = section.offsetTop;\r\n\r\n    window.scrollTo({\r\n      top: above,\r\n      behavior: 'smooth',\r\n    });\r\n  }\r\n\r\n  internalLinks.forEach((link) => {\r\n    link.addEventListener('click', scrollToSection);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/soft-scroll.js?");

/***/ }),

/***/ "./dataset/js/modules/tab-nav.js":
/*!***************************************!*\
  !*** ./dataset/js/modules/tab-nav.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\r\n\r\n  function activeTab(index) {\r\n    tabContent.forEach((section) => section.classList.remove('active'));\r\n    const direction = tabContent[index].dataset.anime;\r\n    tabContent[index].classList.add('active', direction);\r\n  }\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add('active');\r\n\r\n    tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener('click', () => {\r\n        activeTab(index);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/tab-nav.js?");

/***/ }),

/***/ "./dataset/js/modules/tooltip.js":
/*!***************************************!*\
  !*** ./dataset/js/modules/tooltip.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTolltip)\n/* harmony export */ });\nfunction initTolltip() {\r\n  const tooltips = document.querySelectorAll('[data-tooltip]');\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener('mouseleave', onMouseLeave);\r\n      this.element.removeEventListener('mousemove', onMouseMove);\r\n    },\r\n  };\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = event.pageY + 20 + 'px';\r\n      this.tooltipBox.style.left = event.pageX + 20 + 'px';\r\n    },\r\n  };\r\n  function onMouseOver() {\r\n    const tooltipBox = createTooltipBox(this);\r\n\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    onMouseLeave.element = this;\r\n    this.addEventListener('mouseleave', onMouseLeave);\r\n\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    this.addEventListener('mousemove', onMouseMove);\r\n  }\r\n\r\n  function createTooltipBox(element) {\r\n    const tooltipBox = document.createElement('div');\r\n    const text = element.getAttribute('aria-label');\r\n    tooltipBox.classList.add('tooltip');\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n\r\n  tooltips.forEach((item) => {\r\n    item.addEventListener('mouseover', onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/modules/tooltip.js?");

/***/ }),

/***/ "./dataset/js/script.js":
/*!******************************!*\
  !*** ./dataset/js/script.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_soft_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/soft-scroll.js */ \"./dataset/js/modules/soft-scroll.js\");\n/* harmony import */ var _modules_animate_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animate-scroll.js */ \"./dataset/js/modules/animate-scroll.js\");\n/* harmony import */ var _modules_accordion_faq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion-faq.js */ \"./dataset/js/modules/accordion-faq.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./dataset/js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./dataset/js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./dataset/js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./dataset/js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./dataset/js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_operation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/operation.js */ \"./dataset/js/modules/operation.js\");\n/* harmony import */ var _modules_fetch_animals_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animals.js */ \"./dataset/js/modules/fetch-animals.js\");\n/* harmony import */ var _modules_fetch_btc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-btc.js */ \"./dataset/js/modules/fetch-btc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_soft_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_animate_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_accordion_faq_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_operation_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetch_animals_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetch_btc_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\n\n//# sourceURL=webpack://fantastic-animals/./dataset/js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./dataset/js/script.js");
/******/ 	
/******/ })()
;