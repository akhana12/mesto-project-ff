//Получение информации о пользователе
export function getUserInfo(apiConfig) {
  return fetch(apiConfig.baseUrl + '/users/me', {
    method: 'GET',
    headers: apiConfig.headers
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    });
}

//Получение информации о карточках
export function getCards(apiConfig) {
  return fetch(apiConfig.baseUrl + '/cards ', {
    method: 'GET',
    headers: apiConfig.headers
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    });
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
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    });
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
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    });
}

// Удаление карточки
export function deleteCard(apiConfig, cardId) {
  return fetch(apiConfig.baseUrl + '/cards/' + cardId, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    });
}

// Постановка лайка
export function likeCard(apiConfig, cardId) {
  return fetch(apiConfig.baseUrl + '/cards/likes/' + cardId, {
    method: 'PUT',
    headers: apiConfig.headers
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    });
}

// Удаление лайка
export function unlikeCard(apiConfig, cardId) {
  return fetch(apiConfig.baseUrl + '/cards/likes/' + cardId, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    });
}

// Обновление аватара пользователя
export function updateAvatar(apiConfig, newAvatarLink) {
  return fetch(apiConfig.baseUrl + '/users/me/avatar', {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: newAvatarLink
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .catch((err) => {
      console.log('Запрос не выполнен, ошибка: ', err);
    });
}
