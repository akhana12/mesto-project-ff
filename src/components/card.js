// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

// Функция создания карточки
export function createCard(item, deleteCallback, likeHandler, openPopupImage) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  
  // Кнопка лайка
  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeHandler)

  // Картинка
  cardImage.src = item.link;
  cardTitle.textContent = item.name;
  cardImage.setAttribute("alt", `Фотография локации: ${item.name}`);
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

// Обработчик лайка
export function likeHandler(evt) {
    if (evt.target.classList.contains('card__like-button')){
        evt.target.classList.toggle('card__like-button_is-active')
      }
};