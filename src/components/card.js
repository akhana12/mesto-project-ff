import { apiConfig } from './constants';

import { openModal } from './modal';

import { likeCard, unlikeCard } from './api';
// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
export function createCard(
  item,
  removeCard,
  likeHandler,
  openPopupImage,
  userId
) {
  // Объявляем элементы карточки
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeCounter = cardElement.querySelector('.card__like-counter');
  const likeButton = cardElement.querySelector('.card__like-button');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const { link, name, likes, owner, _id } = item;

  // Вешаем идентификатор карточки для удаления
  cardElement.dataset.card_id = _id;

  // Картинка
  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.setAttribute('alt', `Фотография локации: ${item.name}`);
  cardImage.addEventListener('click', () => openPopupImage(link, name));

  //Счетчик лайков карточки
  cardLikeCounter.textContent = likes.length || '';

  // Кнопка лайка
  likeButton.classList.toggle(
    'card__like-button_is-active',
    checkUserLike(item, userId)
  );
  likeButton.addEventListener('click', () =>
    likeHandler(item, userId, likeButton, cardLikeCounter)
  );

  // Кнопка удаления
  // Если id владельца не совпадает с id пользователя, то скрываем кнопку удаления
  cardDeleteButton.style.display = owner._id !== userId ? 'none' : '';
  cardDeleteButton.addEventListener('click', () => removeCard(cardElement));

  return cardElement;
}

// Обработчик лайка
export function likeHandler(item, userId, likeButton, cardLikeCounter) {
  const cardId = item._id;

  // Проверка наличия лайков пользователя в карточке
  if (!checkUserLike(item, userId)) {
    // Добавляем лайк пользователя в карточку
    likeCard(apiConfig, cardId)
      .then((res) => {
        item.likes = res.likes;
        cardLikeCounter.textContent = res.likes.length;
        likeButton.classList.toggle('card__like-button_is-active');
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    // Удаляем лайк пользователя из карточки
    unlikeCard(apiConfig, cardId)
      .then((res) => {
        item.likes = res.likes;
        if (item.likes.length !== 0) {
          cardLikeCounter.textContent = item.likes.length;
        } else {
          cardLikeCounter.textContent = '';
        }
        likeButton.classList.toggle('card__like-button_is-active');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function checkUserLike(item, userId) {
  return item.likes.some((like) => like._id === userId);
}

// Функция удаления карточки
export function removeCard(item) {
  const popupDeleteCard = document.querySelector('.popup_type_delete-card');
  popupDeleteCard.dataset.card_id = item.dataset.card_id;
  openModal(popupDeleteCard);
}
