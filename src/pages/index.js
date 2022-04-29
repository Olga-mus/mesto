import {POPUP, USER, CONTAINER_SLR, CARD_TEMPLATE_SLR, VALIDATOR_SETTINGS, INITIAL_CARDS} from '../constants/constants.js';
import Section from '../constants/Section.js';
import Card from '../constants/Card.js';
import PopupWithImage from '../constants/PopupWithImage.js';
import PopupWithForm from '../constants/PopupWithForm.js';
import FormValidator from '../constants/FormValidator.js';
import UserInfo from '../constants/UserInfo.js';

import './index.css';

//создание одной карты
function createCard(data) {
  const copyCard = new Card(data, CARD_TEMPLATE_SLR, handleCardClick);
  return copyCard.createCard();
}

//открытие попапа с картинкой при клике на карточку
function handleCardClick(data) {
    popupImage.open(data)
}

// submit для popup add
function handleSubmitAdd(data) {
  const card = createCard(data);
  section.addItem(card);
  popupAdd.close();
}

// submit для popup edit
function handleSubmitEdit(data) {
  userInfo.setUserInfo(data.firstname, data.proffesion);
  popupEdit.close();
}

// обновление полей ввода popup edit
function updatePopupEditInputs() {
  const {firstname, proffesion} = userInfo.getUserInfo();
  POPUP.EDIT.INPUT_NAME.value = firstname;
  POPUP.EDIT.INPUT_ABOUT.value = proffesion;
  editProfileValidator.resetValidation();
}

// создание объектов
const section = new Section({ items: INITIAL_CARDS, renderer: renderCards}, CONTAINER_SLR);
section.renderItems();
//отрисовка всех карт
function renderCards(data) {
  const cardElement = createCard(data);
  section.addItem(cardElement);
}

const popupImage = new PopupWithImage(POPUP.IMAGE.SELECTOR);
popupImage.setEventListeners();

const popupAdd = new PopupWithForm(POPUP.ADD.SELECTOR, handleSubmitAdd);
popupAdd.setEventListeners();

const addCardValidator = new FormValidator(VALIDATOR_SETTINGS, POPUP.ADD.FORM);
addCardValidator.enableValidation();

const popupEdit = new PopupWithForm(POPUP.EDIT.SELECTOR, handleSubmitEdit);
popupEdit.setEventListeners();

const editProfileValidator = new FormValidator(VALIDATOR_SETTINGS, POPUP.EDIT.FORM);
editProfileValidator.enableValidation();

const userInfo = new UserInfo({
  userName: USER.NAME_SLR,
  userAbout: USER.ABOUT_SLR,
});


// добавление слушателей
POPUP.EDIT.OPEN.addEventListener('click', () => {
  updatePopupEditInputs();
  popupEdit.open();
});

POPUP.ADD.OPEN.addEventListener('click', () => {
  popupAdd.open();
});
