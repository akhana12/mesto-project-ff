// DOM узлы
// Карточки
export const cardList = document.querySelector('.places__list');

// Кнопки
export const addCardButton = document.querySelector('.profile__add-button');
export const profileEditButton = document.querySelector(
  '.profile__edit-button'
);

// Профиль
export const profileName = document.querySelector('.profile__title');
export const profileDescription = document.querySelector(
  '.profile__description'
);
export const profileImage = document.querySelector('.profile__image');

// Попап профиля
export const popupProfile = document.querySelector('.popup_type_edit');
export const profileFormElement = popupProfile.querySelector(
  'form[name="edit-profile"]'
);
export const nameInput = profileFormElement.elements.name;
export const descriptionInput = profileFormElement.elements.description;
export const profileButton = popupProfile.querySelector('.popup__button');

// Попап редактирования изображения профиля
export const popupUpdateAvatar = document.querySelector(
  '.popup_type_update-avatar'
);
export const avatarFormElement = popupUpdateAvatar.querySelector(
  'form[name="update-avatar"]'
);
export const avatarLinkInput = avatarFormElement.elements.avatar_link;
export const avatarButton = popupUpdateAvatar.querySelector('.popup__button');

// Попап карточки
export const popupNewCard = document.querySelector('.popup_type_new-card');
export const newCardFormElement = popupNewCard.querySelector(
  'form[name="new-place"]'
);
export const placeNameInput = newCardFormElement.elements.place_name;
export const linkInput = newCardFormElement.elements.link;
export const cardButton = popupNewCard.querySelector('.popup__button');

// Попап изображения карточки
export const popupTypeImage = document.querySelector('.popup_type_image');
export const popupImage = popupTypeImage.querySelector('.popup__image');
export const popupImageCaption =
  popupTypeImage.querySelector('.popup__caption');

// Попапа удаления карточки
export const popupDeleteCard = document.querySelector(
  '.popup_type_delete-card'
);
export const deleteCardForm = document.querySelector(
  'form[name="delete-card"]'
);

//// Темплейт карточки
export const cardTemplate = document.querySelector('#card-template').content;

// Поля для валидации
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

// Параметры для запросов
export const apiConfig = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-7',
  headers: {
    authorization: 'dcc4a400-1faf-46fc-8c88-f370cc4a0f21',
    'Content-Type': 'application/json'
  }
};
