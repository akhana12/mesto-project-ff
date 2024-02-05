import './styles/index.css';
import {initialCards} from './components/cards';
import {
    createCard,
    deleteCard,
    likeHandler} from './components/card';
import {
    openModal,
    closeModal,
    handleModalClose} from './components/modal';


// DOM узлы
// Карточки
const cardList = document.querySelector('.places__list');

// Кнопки
const addCardButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');

// Профиль
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Попап профиля
const popupProfile = document.querySelector('.popup_type_edit');
const profileFormElement = popupProfile.querySelector('form[name="edit-profile"]');
const nameInput = profileFormElement.elements.name;
const descriptionInput = profileFormElement.elements.description;

// Попап карточки
const popupNewCard = document.querySelector('.popup_type_new-card');
const newCardFormElement = popupNewCard.querySelector('form[name="new-place"]');
const placeNameInput = newCardFormElement.elements.place_name;
const linkInput = newCardFormElement.elements.link;

// Попап изображения
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupImageCaption = popupTypeImage.querySelector('.popup__caption');


// Слушатели ПРОФИЛЯ
//Открытие модального окна Профиля
profileEditButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    openModal(popupProfile);
});

//Закрытие модального окна Профиля
popupProfile.addEventListener('click', (evt) => handleModalClose(evt, popupProfile));

// Обработчик «отправки» формы профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const name = nameInput.value;
    const description = descriptionInput.value;
    profileName.textContent = name;
    profileDescription.textContent = description;
    closeModal(popupProfile);
};

// Прикрепляем обработчик к форме
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

// Слушатели КАРТОЧКИ
//Открытие модального окна Карточки
addCardButton.addEventListener ('click', () => openModal(popupNewCard));

//Закрытие модального окна Карточки
popupNewCard.addEventListener('click', (evt) => handleModalClose(evt, popupNewCard));

// Обработчик «отправки» формы карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCardItem = {};
    newCardItem.name = placeNameInput.value;
    newCardItem.link = linkInput.value;
    cardList.prepend(createCard(newCardItem, deleteCard, likeHandler, openPopupImage));
    closeModal(popupNewCard);
    newCardFormElement.reset();
};

// Прикрепляем обработчик к форме
newCardFormElement.addEventListener('submit', handleCardFormSubmit);

// Открытие попапа с изображением
function openPopupImage(imageSrc, imageCaption){
    popupImage.src = imageSrc;
    popupImage.alt = `Фотография локации: ${imageCaption}`;
    popupImageCaption.textContent = imageCaption;

    openModal(popupTypeImage);
};

//Закрытие попапа с изображением
popupTypeImage.addEventListener('click', (evt) => handleModalClose(evt, popupTypeImage));


// Вывести карточки на страницу
function renderInitialCards() {
    initialCards.forEach(function (item) {
        const newCard = createCard(item, deleteCard, likeHandler, openPopupImage);
        cardList.append(newCard);
    });
};

renderInitialCards();