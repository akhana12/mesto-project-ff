import {openPopupImage} from "../index";

// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

// Список карточек
export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

// Функция создания карточки
export function createCard(item, deleteCallback, likeHendler, openPopupImage) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__image').alt = `Фотография локации: ${item.name}`;
  // Кнопка лайка
  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeHendler)

  // Картинка
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.setAttribute("alt", item.name);
  cardImage.addEventListener('click', () => openPopupImage(item.link, item.name));

  // Кнопка удаления
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  cardDeleteButton.addEventListener('click', () => deleteCallback(cardElement));

  return cardElement;
};


// Функция удаления карточки
export function deleteCard(card) {
  card.remove();
};

// Вывести карточки на страницу
export function initialCardList() {
  initialCards.forEach(function (item) {
      const newCard = createCard(item, deleteCard, likeHendler, openPopupImage);
      cardList.append(newCard);
  });
};

// Обработчик лайка
export function likeHendler(evt) {
    if (evt.target.classList.contains('card__like-button')){
        evt.target.classList.toggle('card__like-button_is-active')
      }
};