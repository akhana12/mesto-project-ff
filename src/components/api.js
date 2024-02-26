// Проверка ответа на запрос
function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

//Получение информации о пользователе
export function getUserInfo(apiConfig) {
  return fetch(apiConfig.baseUrl + '/users/me', {
    method: 'GET',
    headers: apiConfig.headers
  }).then(getResponseData);
}

//Получение информации о карточках
export function getCards(apiConfig) {
  return fetch(apiConfig.baseUrl + '/cards ', {
    method: 'GET',
    headers: apiConfig.headers
  }).then(getResponseData);
}

//Обновление информации о пользователе
export function updateUserInfo(apiConfig, newUserName, newUserDescruption) {
  return fetch(apiConfig.baseUrl + '/users/me', {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: newUserName,
      about: newUserDescruption
    })
  }).then(getResponseData);
}

// Добавление новой карточки
export function addCard(apiConfig, newCardItem) {
  return fetch(apiConfig.baseUrl + '/cards', {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: newCardItem.name,
      link: newCardItem.link
    })
  }).then(getResponseData);
}

// Удаление карточки
export function deleteCard(apiConfig, cardId) {
  return fetch(apiConfig.baseUrl + '/cards/' + cardId, {
    method: 'DELETE',
    headers: apiConfig.headers
  }).then(getResponseData);
}

// Постановка лайка
export function likeCard(apiConfig, cardId) {
  return fetch(apiConfig.baseUrl + '/cards/likes/' + cardId, {
    method: 'PUT',
    headers: apiConfig.headers
  }).then(getResponseData);
}

// Удаление лайка
export function unlikeCard(apiConfig, cardId) {
  return fetch(apiConfig.baseUrl + '/cards/likes/' + cardId, {
    method: 'DELETE',
    headers: apiConfig.headers
  }).then(getResponseData);
}

// Обновление аватара пользователя
export function updateAvatar(apiConfig, newAvatarLink) {
  return fetch(apiConfig.baseUrl + '/users/me/avatar', {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: newAvatarLink
    })
  }).then(getResponseData);
}
