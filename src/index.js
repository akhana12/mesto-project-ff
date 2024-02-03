import './styles/index.css';
import {initialCards, createCard, deleteCard, initialCardList} from './components/card'
import {openModal, closeModal} from './components/modal'

// @todo: DOM узлы
const addCardButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupCloseButton = document.querySelector('.popup__close');


//Слушатели кнопок
// Карточки
addCardButton.addEventListener ('click', function () {
    openModal(popupNewCard)
})

popupNewCard.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')){
        closeModal(popupNewCard)
    }
    if (evt.target.classList.contains('popup__close')) {
        closeModal(popupNewCard)
    }
})


// Профиль

profileEditButton.addEventListener('click', function() {
    openModal(popupProfileEdit)
})


popupProfileEdit.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
        closeModal(popupProfileEdit)
    }
    if (evt.target.classList.contains('popup__close')) {
        closeModal(popupProfileEdit)
    }
})



initialCardList();