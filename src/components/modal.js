// Открыть модальное окно
export function openModal(popup) {
  popup.classList.add('popup_is-animated');
  setTimeout(() => {
    popup.classList.add('popup_is-opened');
  }, 0);
  document.addEventListener('keydown', closeModalByEsc);
}

// Закрыть модальное окно
export function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  setTimeout(() => {
    popup.classList.remove('popup_is-animated');
  }, 600);
  document.removeEventListener('keydown', closeModalByEsc);
}

// Закрытие попапа кликом по оверлею или кнопке закрыть
export function handleModalClose(evt, popup) {
  if (
    evt.target.classList.contains('popup') ||
    evt.target.classList.contains('popup__close')
  ) {
    closeModal(popup);
  }
}

// Закрытие попапа клавишей Escape
function closeModalByEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_is-opened');
    if (popup) {
      closeModal(popup);
    }
  }
}
