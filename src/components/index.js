import '../styles/index.css';
import { createCard, likeHandler } from './card';
import { openModal, closeModal, handleModalClose } from './modal';

import { enableValidation, clearValidation } from './validation';

import { validationConfig, apiConfig } from './constants';

import {
  getUserInfo,
  getCards,
  updateUserInfo,
  addCard,
  deleteCard,
  updateAvatar
} from './api';

// DOM узлы
// Карточки
const cardList = document.querySelector('.places__list');

// Кнопки
const addCardButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');

// Профиль
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');

// Попап профиля
const popupProfile = document.querySelector('.popup_type_edit');
const profileFormElement = popupProfile.querySelector(
  'form[name="edit-profile"]'
);
const nameInput = profileFormElement.elements.name;
const descriptionInput = profileFormElement.elements.description;
const profileButton = popupProfile.querySelector('.popup__button');

// Попап редактирования изображения профиля
const popupUpdateAvatar = document.querySelector('.popup_type_update-avatar');
const avatarFormElement = popupUpdateAvatar.querySelector(
  'form[name="update-avatar"]'
);
const avatarLinkInput = avatarFormElement.elements.avatar_link;
const avatarButton = popupUpdateAvatar.querySelector('.popup__button');

// Попап карточки
const popupNewCard = document.querySelector('.popup_type_new-card');
const newCardFormElement = popupNewCard.querySelector('form[name="new-place"]');
const placeNameInput = newCardFormElement.elements.place_name;
const cardlinkInput = newCardFormElement.elements.link;
const cardButton = popupNewCard.querySelector('.popup__button');

// Попап изображения карточки
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupImageCaption = popupTypeImage.querySelector('.popup__caption');

// Попапа удаления карточки
const popupDeleteCard = document.querySelector('.popup_type_delete-card');
const deleteCardForm = document.querySelector('form[name="delete-card"]');

let userId = '';

// Слушатели ПРОФИЛЯ
//Открытие модального окна Профиля
profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(popupProfile);
  clearValidation(profileFormElement, validationConfig);
});
//Закрытие модального окна Профиля
popupProfile.addEventListener('click', (evt) =>
  handleModalClose(evt, popupProfile)
);
// Обработчик «отправки» формы профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const userName = nameInput.value;
  const userDescription = descriptionInput.value;
  renderLoading(true, profileButton);
  updateUserInfo(apiConfig, userName, userDescription)
    .then((res) => {
      profileName.textContent = res.name;
      profileDescription.textContent = res.about;
      closeModal(popupProfile);
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    })
    .finally(() => {
      renderLoading(false, profileButton);
    });
}
// Прикрепляем обработчик к форме
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

// Открытие модального окна редактирования изображения профиля
profileImage.addEventListener('click', () => {
  openModal(popupUpdateAvatar);
  avatarFormElement.reset();
  clearValidation(avatarFormElement, validationConfig);
});

//Закрытие модального окна редактирования изображения профиля
popupUpdateAvatar.addEventListener('click', (evt) =>
  handleModalClose(evt, popupUpdateAvatar)
);

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const avatarLink = avatarLinkInput.value;
  renderLoading(true, avatarButton);
  updateAvatar(apiConfig, avatarLink)
    .then((res) => {
      profileImage.style = `background-image: url('${res.avatar}')`;
      closeModal(popupUpdateAvatar);
      avatarFormElement.reset();
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    })
    .finally(() => {
      renderLoading(false, avatarButton);
    });
}

// Прикрепляем обработчик к форме
avatarFormElement.addEventListener('submit', handleAvatarFormSubmit);

// Слушатели КАРТОЧКИ
//Открытие модального окна Карточки
addCardButton.addEventListener('click', () => {
  openModal(popupNewCard);
  newCardFormElement.reset();
  clearValidation(newCardFormElement, validationConfig);
});

//Закрытие модального окна Карточки
popupNewCard.addEventListener('click', (evt) =>
  handleModalClose(evt, popupNewCard)
);

// Обработчик «отправки» формы карточки
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCardItem = {
    name: placeNameInput.value,
    link: cardlinkInput.value
  };
  renderLoading(true, cardButton);
  addCard(apiConfig, newCardItem)
    .then((newCardData) => {
      cardList.prepend(
        createCard(newCardData, removeCard, likeHandler, openPopupImage, userId)
      );
      closeModal(popupNewCard);
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    })
    .finally(() => {
      renderLoading(false, cardButton);
    });
}

// Прикрепляем обработчик к форме
newCardFormElement.addEventListener('submit', handleCardFormSubmit);

// Открытие попапа с изображением
function openPopupImage(imageSrc, imageCaption) {
  popupImage.src = imageSrc;
  popupImage.alt = `Фотография локации: ${imageCaption}`;
  popupImageCaption.textContent = imageCaption;

  openModal(popupTypeImage);
}

//Закрытие попапа с изображением
popupTypeImage.addEventListener('click', (evt) =>
  handleModalClose(evt, popupTypeImage)
);

//Открытие модального удаления карточки
function removeCard(item) {
  popupDeleteCard.dataset.card_id = item.dataset.card_id;
  openModal(popupDeleteCard);
}

//Закрытие модального окна удаления карточки
popupDeleteCard.addEventListener('click', (evt) =>
  handleModalClose(evt, popupDeleteCard)
);

// Обработчик «отправки» запроса на удаление карточки
function handleDeleteCardFormSubmit(evt) {
  evt.preventDefault();
  const cardId = popupDeleteCard.dataset.card_id;
  deleteCard(apiConfig, cardId)
    .then(() => {
      const deleteCard = cardList.querySelector(
        `.places__item[data-card_id="${cardId}"]`
      );
      deleteCard.remove();
      closeModal(popupDeleteCard);
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    });
}

// Прикрепляем обработчик к форме
deleteCardForm.addEventListener('submit', handleDeleteCardFormSubmit);

// Получаем данные о пользователе и карточках с сервера и выводим на страницу
Promise.all([getUserInfo(apiConfig), getCards(apiConfig)])
  .then(([userInfo, cards]) => {
    const { _id, name, about, avatar } = userInfo;
    userId = _id;
    profileName.textContent = name;
    profileDescription.textContent = about;
    profileImage.style = `background-image: url('${avatar}')`;
    cards.forEach((item) => {
      cardList.append(
        createCard(item, removeCard, likeHandler, openPopupImage, userId)
      );
    });
  })

  .catch((err) => {
    console.log('Запрос не выполнен, ошибка: ', err);
  });

// Добавляем функцию для отображения загрузки
function renderLoading(isLoading, popupButton) {
  if (isLoading) {
    popupButton.textContent = 'Сохранение...';
    popupButton.disabled = true;
  } else {
    popupButton.textContent = 'Сохранить';
    popupButton.disabled = false;
  }
}

// включение валидации вызовом enableValidation
enableValidation(validationConfig);
