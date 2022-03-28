import { openPopup, closeByEscape, closePopup } from './utils.js';
import { imgImageWindow, textTitleImageWindow, popupImageWindow } from './constants.js';
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';

//Находим ссылки на элементы попапа Редактировать профиль EditProfile
const btnOpenEditProfile = document.querySelector('.profile__open-window'); //кнопка открытия попапа
const popupEditProfile = document.querySelector('#popup_edit-profile'); // попап  Редактировать профиль
const btnSubmitEditProfile = document.querySelector('.popup__save-button'); //кнопка сохранения попапа и отправки
const formEditProfile = document.querySelector('.popup__form'); // Находим форму Редактировать профиль в DOM
const inputNameEditProfile = document.querySelector('.popup__input_type_name'); // инпут имя в попапе Редактировать профиль
const inputJobEditProfile = document.querySelector('.popup__input_type_job'); // инпут деятельности в попапе Редактировать профиль
const textTitleEditProfile = document.querySelector('.profile__title'); // заголовок в попапе Редактировать профиль
const textSubtitleEditProfile = document.querySelector('.profile__subtitle'); // подзаголовок в попапе Редактировать профиль

//Находим ссылки на элементы попапа Новое место NewPlace
const popupNewPlace = document.querySelector('#popup_place'); // попап Новое место
const btnOpenNewPlace = document.querySelector('.profile__button'); //кнопка открытия попапа Новое место
const btnSubmitNewPlace = document.querySelector('.popup__profile-save_place'); //кнопка сохранения попапа Новое место и отправки
const formNewPlace = document.querySelector('.popup__form_place') // Находим форму Новое место в DOM
//Находим ссылки на элементы (добавление новых карточек места)
const inputTitle = document.querySelector('.popup__input_type_card'); //ввести название картинки
const inputImage = document.querySelector('.popup__input_type_link'); //ввести ссылку на картинку
const savePlace = document.querySelector('.popup__form_place'); // ссылка на форму Новое место
const containerPlace = document.querySelector('.elements'); //контейнер для добавления новых карточек

const addCardForm = document.querySelector('.popup__form_place');
const editForm = document.querySelector('.popup__form');

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error-message_visible',
  submitButtonDisabled: 'popup__save-button_disabled'
}

const editProfileValidator = new FormValidator(settings, editForm);
const addCardValidator = new FormValidator(settings, addCardForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();


//Находим оверлэй
const popups = document.querySelectorAll('.popup')


// Создаем массив из карточек «из коробки»
const cards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

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

function renderCard(data) {

  const copyCard = new Card(data, '#card_template', handleView);
  // card заменить на copyCard
  const newCard = copyCard.createCard();
  containerPlace.prepend(newCard);
}

//Добавляем карточку в контейнер
function addCard(event) {
  event.preventDefault(); //отменяем дефолтную отправку формы
  const name = inputTitle.value;
  const link = inputImage.value;
  renderCard({ name, link });
  resetForm();

  const cardSubmitButton = event.submitter
  cardSubmitButton.setAttribute('disabled', true)
  cardSubmitButton.classList.add('popup__save-button_disabled')
  closePopup(popupNewPlace);
}

function resetForm() {
  savePlace.reset();
}

renderCards();
