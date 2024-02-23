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

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeHandler: () => (/* binding */ likeHandler)\n/* harmony export */ });\n// Темплейт карточки\nvar cardTemplate = document.querySelector('#card-template').content;\nvar cardList = document.querySelector('.places__list');\n\n// Функция создания карточки\nfunction createCard(item, deleteCallback, likeHandler, openPopupImage) {\n  var cardElement = cardTemplate.querySelector('.card').cloneNode(true);\n  var cardImage = cardElement.querySelector('.card__image');\n  var cardTitle = cardElement.querySelector('.card__title');\n\n  // Кнопка лайка\n  var likeButton = cardElement.querySelector('.card__like-button');\n  likeButton.addEventListener('click', likeHandler);\n\n  // Картинка\n  cardImage.src = item.link;\n  cardTitle.textContent = item.name;\n  cardImage.setAttribute(\"alt\", \"\\u0424\\u043E\\u0442\\u043E\\u0433\\u0440\\u0430\\u0444\\u0438\\u044F \\u043B\\u043E\\u043A\\u0430\\u0446\\u0438\\u0438: \".concat(item.name));\n  cardImage.addEventListener('click', function () {\n    return openPopupImage(item.link, item.name);\n  });\n\n  // Кнопка удаления\n  var cardDeleteButton = cardElement.querySelector('.card__delete-button');\n  cardDeleteButton.addEventListener('click', function () {\n    return deleteCallback(cardElement);\n  });\n  return cardElement;\n}\n;\n\n// Функция удаления карточки\nfunction deleteCard(card) {\n  card.remove();\n}\n;\n\n// Обработчик лайка\nfunction likeHandler(evt) {\n  if (evt.target.classList.contains('card__like-button')) {\n    evt.target.classList.toggle('card__like-button_is-active');\n  }\n}\n;\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\n// Список карточек\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/cards.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   handleModalClose: () => (/* binding */ handleModalClose),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n// Открыть модальное окно\nfunction openModal(popup) {\n  popup.classList.add('popup_is-animated');\n  setTimeout(function () {\n    popup.classList.add('popup_is-opened');\n  }, 0);\n  document.addEventListener(\"keydown\", closeModalByEsc);\n}\n\n// Закрыть модальное окно\nfunction closeModal(popup) {\n  popup.classList.remove('popup_is-opened');\n  setTimeout(function () {\n    popup.classList.remove('popup_is-animated');\n  }, 600);\n  document.removeEventListener('keydown', closeModalByEsc);\n}\n\n// Закрытие попапа кликом по оверлею или кнопке закрыть\nfunction handleModalClose(evt, popup) {\n  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {\n    closeModal(popup);\n  }\n}\n\n// Закрытие попапа клавишей Escape\nfunction closeModalByEsc(evt) {\n  if (evt.key === 'Escape') {\n    var popup = document.querySelector('.popup_is-opened');\n    if (popup) {\n      closeModal(popup);\n    }\n  }\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards */ \"./src/components/cards.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n\n\n\n\n\n// DOM узлы\n// Карточки\nvar cardList = document.querySelector('.places__list');\n\n// Кнопки\nvar addCardButton = document.querySelector('.profile__add-button');\nvar profileEditButton = document.querySelector('.profile__edit-button');\n\n// Профиль\nvar profileName = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\n\n// Попап профиля\nvar popupProfile = document.querySelector('.popup_type_edit');\nvar profileFormElement = popupProfile.querySelector('form[name=\"edit-profile\"]');\nvar nameInput = profileFormElement.elements.name;\nvar descriptionInput = profileFormElement.elements.description;\n\n// Попап карточки\nvar popupNewCard = document.querySelector('.popup_type_new-card');\nvar newCardFormElement = popupNewCard.querySelector('form[name=\"new-place\"]');\nvar placeNameInput = newCardFormElement.elements.place_name;\nvar linkInput = newCardFormElement.elements.link;\n\n// Попап изображения\nvar popupTypeImage = document.querySelector('.popup_type_image');\nvar popupImage = popupTypeImage.querySelector('.popup__image');\nvar popupImageCaption = popupTypeImage.querySelector('.popup__caption');\n\n// Слушатели ПРОФИЛЯ\n//Открытие модального окна Профиля\nprofileEditButton.addEventListener('click', function () {\n  nameInput.value = profileName.textContent;\n  descriptionInput.value = profileDescription.textContent;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupProfile);\n});\n\n//Закрытие модального окна Профиля\npopupProfile.addEventListener('click', function (evt) {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.handleModalClose)(evt, popupProfile);\n});\n\n// Обработчик «отправки» формы профиля\nfunction handleProfileFormSubmit(evt) {\n  evt.preventDefault();\n  var name = nameInput.value;\n  var description = descriptionInput.value;\n  profileName.textContent = name;\n  profileDescription.textContent = description;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupProfile);\n}\n;\n\n// Прикрепляем обработчик к форме\nprofileFormElement.addEventListener('submit', handleProfileFormSubmit);\n\n// Слушатели КАРТОЧКИ\n//Открытие модального окна Карточки\naddCardButton.addEventListener('click', function () {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupNewCard);\n});\n\n//Закрытие модального окна Карточки\npopupNewCard.addEventListener('click', function (evt) {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.handleModalClose)(evt, popupNewCard);\n});\n\n// Обработчик «отправки» формы карточки\nfunction handleCardFormSubmit(evt) {\n  evt.preventDefault();\n  var newCardItem = {};\n  newCardItem.name = placeNameInput.value;\n  newCardItem.link = linkInput.value;\n  cardList.prepend((0,_components_card__WEBPACK_IMPORTED_MODULE_2__.createCard)(newCardItem, _components_card__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card__WEBPACK_IMPORTED_MODULE_2__.likeHandler, openPopupImage));\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupNewCard);\n  newCardFormElement.reset();\n}\n;\n\n// Прикрепляем обработчик к форме\nnewCardFormElement.addEventListener('submit', handleCardFormSubmit);\n\n// Открытие попапа с изображением\nfunction openPopupImage(imageSrc, imageCaption) {\n  popupImage.src = imageSrc;\n  popupImage.alt = \"\\u0424\\u043E\\u0442\\u043E\\u0433\\u0440\\u0430\\u0444\\u0438\\u044F \\u043B\\u043E\\u043A\\u0430\\u0446\\u0438\\u0438: \".concat(imageCaption);\n  popupImageCaption.textContent = imageCaption;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupTypeImage);\n}\n;\n\n//Закрытие попапа с изображением\npopupTypeImage.addEventListener('click', function (evt) {\n  return (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.handleModalClose)(evt, popupTypeImage);\n});\n\n// Вывести карточки на страницу\nfunction renderInitialCards() {\n  _components_cards__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach(function (item) {\n    var newCard = (0,_components_card__WEBPACK_IMPORTED_MODULE_2__.createCard)(item, _components_card__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card__WEBPACK_IMPORTED_MODULE_2__.likeHandler, openPopupImage);\n    cardList.append(newCard);\n  });\n}\n;\nrenderInitialCards();\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/styles/index.css?");

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