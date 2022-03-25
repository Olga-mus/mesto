// export const imgImageWindow = document.querySelector('.popup__view'); //получаем ссылку на картинку новое изображение
// export const textTitleImageWindow = document.querySelector('.popup__image-title'); //получаем ссылку на текст "новое изображение"

// export const popupImageWindow = document.querySelector('.popup_image'); // получаем ссылку на попап окна новое изображение


export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}
