import './styles/index.css';
import {
  createCard,
  removeCardFromCardList,
  likeHandler
} from './components/card';
import { openModal, closeModal, handleModalClose } from './components/modal';

import { enableValidation, clearValidation } from './components/validation';

import {
  cardList,
  addCardButton,
  profileEditButton,
  profileName,
  profileDescription,
  profileImage,
  popupProfile,
  profileFormElement,
  nameInput,
  descriptionInput,
  popupUpdateAvatar,
  avatarFormElement,
  avatarLinkInput,
  popupNewCard,
  newCardFormElement,
  placeNameInput,
  linkInput,
  popupTypeImage,
  popupImage,
  popupImageCaption,
  popupDeleteCard,
  deleteCardForm,
  profileButton,
  avatarButton,
  cardButton,
  validationConfig,
  apiConfig
} from './components/constants';

import {
  getUserInfo,
  getCards,
  updateUserInfo,
  addCard,
  deleteCard,
  updateAvatar
} from './components/api';

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
profileImage.addEventListener('click', () => openModal(popupUpdateAvatar));

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
  clearValidation(popupNewCard, validationConfig);
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
    link: linkInput.value
  };
  renderLoading(true, cardButton);
  addCard(apiConfig, newCardItem)
    .then((newCardData) => {
      cardList.prepend(
        createCard(
          newCardData,
          removeMyCard,
          likeHandler,
          openPopupImage,
          userId
        )
      );
      closeModal(popupNewCard);
      newCardFormElement.reset();
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
function removeMyCard(item) {
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
      removeCardFromCardList(cardId);
      closeModal(popupDeleteCard);
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    });
}

// Прикрепляем обработчик к форме
deleteCardForm.addEventListener('submit', handleDeleteCardFormSubmit);

// Получаем данные о пользователе и карточках с сервера и выводим на страницу
Promise.all(
  [getUserInfo(apiConfig), getCards(apiConfig)],
  profileName,
  profileDescription,
  userId
)
  .then((data) => {
    userId = data[0]._id;
    profileName.textContent = data[0].name;
    profileDescription.textContent = data[0].about;
    profileImage.style = `background-image: url('${data[0].avatar}')`;
    data[1].forEach((item) => {
      cardList.append(
        createCard(item, removeMyCard, likeHandler, openPopupImage, userId)
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
