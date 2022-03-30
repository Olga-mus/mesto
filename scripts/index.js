import { openPopup, closeByEscape, closePopup } from './utils.js';
export const popupNewPlace = document.querySelector('#popup_place'); // попап Новое место
import { imgImageWindow, textTitleImageWindow, popupImageWindow, btnOpenEditProfile, popupEditProfile, btnSubmitEditProfile, formEditProfile, textTitleEditProfile, inputNameEditProfile, inputJobEditProfile, textSubtitleEditProfile, btnOpenNewPlace, btnSubmitNewPlace, formNewPlace, inputTitle, inputImage, savePlace, containerPlace, addCardForm, editForm, settings, popups, cards } from './constants.js';
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';

const editProfileValidator = new FormValidator(settings, editForm);
const addCardValidator = new FormValidator(settings, addCardForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

btnOpenEditProfile.addEventListener('click', function () {
  editProfileValidator.resetValidation()
  inputTextEditProfile();
  openPopup(popupEditProfile);
});

btnOpenNewPlace.addEventListener('click', function () {
  addCardValidator.resetValidation()
  openPopup(popupNewPlace);
});
formEditProfile.addEventListener('submit', handleProfileFormSubmit); // отправка формы Редакттровать профиль

savePlace.addEventListener('submit', addCard); //добавляем слушателя на кнопку Сохранить

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
})

function inputTextEditProfile() {
  inputNameEditProfile.value = textTitleEditProfile.textContent;
  inputJobEditProfile.value = textSubtitleEditProfile.textContent;
}
// Обработчик «отправки» формы
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  textTitleEditProfile.textContent = inputNameEditProfile.value;
  textSubtitleEditProfile.textContent = inputJobEditProfile.value;
  closePopup(popupEditProfile);
}

function renderCards() {
  cards.forEach(renderCard);
}

const handleView = (name, link) => {
  imgImageWindow.src = link; // на каком элементе произошел клик (меняем картинку)
  imgImageWindow.alt = name; // на каком элементе произошел клик (меняем alt картинки)
  textTitleImageWindow.textContent = name; // на каком элементе произошел клик (меняем текст картинки)
  openPopup(popupImageWindow);
}

function createCard(data) {
  const copyCard = new Card(data, '#card_template', handleView);
  const newCard = copyCard.createCard();
  return newCard;
}

function renderCard(el) {
  containerPlace.prepend(createCard(el));
}

//Добавляем карточку в контейнер
function addCard(event) {
  event.preventDefault(); //отменяем дефолтную отправку формы
  const name = inputTitle.value;
  const link = inputImage.value;
  renderCard({ name, link });
  resetForm();

  const cardSubmitButton = event.submitter;
  closePopup(popupNewPlace);
}

function resetForm() {
  savePlace.reset();
}

renderCards();
