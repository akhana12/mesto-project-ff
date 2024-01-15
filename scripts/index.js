// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

// @todo: DOM узлы

// @todo: Функция создания карточки
function createCard(item) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__title').textContent = item.name;
    cardElement.querySelector('.card__image').alt = `Фотография локации: ${item.name}`;

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', () => deleteCard(cardElement));
    return cardElement;
};

// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
};

// @todo: Вывести карточки на страницу
function initialCardList(cardElement) {
    initialCards.forEach(function (item) {
        const newCard = createCard(item)
        cardList.append(newCard);
    });
};


initialCardList();