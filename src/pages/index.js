// import { openPopup, closePopup } from '../utils/utils.js';
// import { openPopup } from '../utils/utils.js';
export const popupNewPlace = document.querySelector('#popup_place'); // попап Новое место
import { imgImageWindow, textTitleImageWindow, popupImageWindow, btnOpenEditProfile, popupEditProfile, btnSubmitEditProfile, formEditProfile, textTitleEditProfile, inputNameEditProfile, inputJobEditProfile, textSubtitleEditProfile, btnOpenNewPlace, btnSubmitNewPlace, formNewPlace, inputTitle, inputImage, savePlace, containerPlace, addCardForm, editForm, settings, popups, cards } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';




const popupAdd = new PopupWithForm('.popup', handleAddFormSubmit);
// const popupEdit = new PopupWithForm('#popup_edit-profile', handleProfileFormSubmit);
const editProfileValidator = new FormValidator(settings, editForm);
const addCardValidator = new FormValidator(settings, addCardForm);

const popupImage = new PopupWithImage(popupImageWindow);


const userInfo = new UserInfo({ textTitleEditProfile, textSubtitleEditProfile });
const cardsList = new Section(
  {
      items: cards,
      renderer: createCard
  },
  containerPlace
)

function createCard(item) {
  return new Card(item, '#card_template', handleCardClick).generateCard()
}

function handleCardClick(data) {
  popupImage.open(data);
}

function handleClickOpenProfilePopup() {
  const userData = userInfo.getUserInfo();
  inputNameEditProfile.value = userData.name;
  inputJobEditProfile.value = userData.about;
  editProfileValidator.resetValidation();
  popupEdit.open();
}

function handleProfileFormSubmit(data) {
  userInfo.setUserInfo(data)
  popupEdit.close()
}

function handleAddFormSubmit(newCard) {
  cardsList.addItem(createCard(newCard))
  popupAdd.close()
}

function handleClickOpenAddPopup() {
  addCardValidator.resetValidation()
  popupAdd.open()
}


editProfileValidator.enableValidation();
addCardValidator.enableValidation();

// btnOpenEditProfile.addEventListener('click', function () {
//   editProfileValidator.resetValidation()
//   inputTextEditProfile();
//   // openPopup(popupEditProfile);
//   popupEdit.open();
// });

// btnOpenNewPlace.addEventListener('click', function () {
//   addCardValidator.resetValidation()
//   // openPopup(popupNewPlace);
//   popupAdd.open();
// });

// formEditProfile.addEventListener('submit', handleProfileFormSubmit); // отправка формы Редакттровать профиль

// savePlace.addEventListener('submit', addCard); //добавляем слушателя на кнопку Сохранить

// popups.forEach((popup) => {
//   popup.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('popup_opened')) {
//       closePopup(popup)
//     }
//     if (evt.target.classList.contains('popup__close-button')) {
//       closePopup(popup)
//     }
//   })
// })

// function inputTextEditProfile() {
//   inputNameEditProfile.value = textTitleEditProfile.textContent;
//   inputJobEditProfile.value = textSubtitleEditProfile.textContent;
// }

// Обработчик «отправки» формы
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//   textTitleEditProfile.textContent = inputNameEditProfile.value;
//   textSubtitleEditProfile.textContent = inputJobEditProfile.value;
//   closePopup(popupEditProfile);
// }

// function renderCards() {
//   cards.forEach(renderCard);
// }

// const handleView = (name, link) => {
//   imgImageWindow.src = link; // на каком элементе произошел клик (меняем картинку)
//   imgImageWindow.alt = name; // на каком элементе произошел клик (меняем alt картинки)
//   textTitleImageWindow.textContent = name; // на каком элементе произошел клик (меняем текст картинки)
//   openPopup(popupImageWindow);
// }

// function createCard(data) {
//   const copyCard = new Card(data, '#card_template', handleCardClick);
//   const newCard = copyCard.createCard();
//   return newCard;
// }

// function renderCard(el) {
//   containerPlace.prepend(createCard(el));
// }

//Добавляем карточку в контейнер
// function addCard(event) {
//   event.preventDefault(); //отменяем дефолтную отправку формы
//   const name = inputTitle.value;
//   const link = inputImage.value;
//   renderCard({ name, link });
//   resetForm();
//   const cardSubmitButton = event.submitter;
//   closePopup(popupNewPlace);
// }

// function resetForm() {
//   savePlace.reset();
// }








// renderCards();

cardsList.renderItems()

btnOpenEditProfile.addEventListener('click', handleClickOpenProfilePopup);
btnOpenNewPlace.addEventListener('click', handleClickOpenAddPopup)

