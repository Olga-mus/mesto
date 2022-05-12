import {POPUP, USER, CONTAINER_SLR, CARD_TEMPLATE_SLR, VALIDATOR_SETTINGS, TEXT_SAVE, TEXT_SAVE_PROCESSING,TEXT_DELETE, TEXT_DELETE_PROCESSING} from '../utils/constants.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import './index.css';

let userId

//создание одной карты
function createCard(data) {
  const copyCard = new Card(
    data,
    CARD_TEMPLATE_SLR,
    handleCardClick,
    (id) => {
      popupConfirm.open();
      popupConfirm.changeSubmitHandler(() => {
        popupConfirm.setButtonText(TEXT_DELETE_PROCESSING);
        api.deleteCard(id)
        .then(res => {
          copyCard.deleteCard();
          popupConfirm.close();
        }).catch(err => {
          console.log('Error', err);
        }).finally(() => {
          popupConfirm.setButtonText(TEXT_DELETE);
        })
      })
    },
    (id) => {
      if(copyCard.isLiked()) {
        api.deleteLike(id)
        .then(res => {
          copyCard.setLikes(res.likes);
        })
      } else {
        api.addLike(id)
        .then(res => {
          copyCard.setLikes(res.likes);
        }) .catch(err => {
          console.log('Error', err);
        });
      }

    }
    );
  return copyCard.createCard();

}

//открытие попапа с картинкой при клике на карточку
function handleCardClick(data) {
    popupImage.open(data)
}

// submit для popup add
function handleSubmitAdd(data) {
  popupAdd.setButtonText(TEXT_SAVE_PROCESSING);
  const {name, link} = data;
  api.addCard(name, link)
  .then(res => {
    const card = createCard({
      name: res.name,
      link: res.link,
      likes: res.likes,
      id: res._id,
      userId: userId,
      ownerId: res.owner._id
    })
    section.addItem(card);
    popupAdd.close()
  })  .catch(err => {
    console.log('Error', err);
  }).finally(() => {
    popupAdd.setButtonText(TEXT_SAVE);
  })
}

// submit для popup edit
function handleSubmitEdit(data) {
  popupEdit.setButtonText(TEXT_SAVE_PROCESSING);
  const {firstname, proffesion} = data;-
  api.editProfile(firstname, proffesion)
  .then(() => {
    userInfo.setUserInfo(firstname, proffesion, null);
    popupEdit.close();
  }) .catch(err => {
    console.log('Error', err);
  }).finally(() => {
    popupEdit.setButtonText(TEXT_SAVE);
  })

}

// обновление полей ввода popup edit
function updatePopupEditInputs() {
  const {firstname, proffesion} = userInfo.getUserInfo();
  POPUP.EDIT.INPUT_NAME.value = firstname;
  POPUP.EDIT.INPUT_ABOUT.value = proffesion;
}

// создание объектов
const section = new Section({ items: [], renderer: renderCards}, CONTAINER_SLR);
section.renderItems();
//отрисовка всех карт
function renderCards(data) {
  const cardElement = createCard(data);
  section.addItem(cardElement);
}

const popupImage = new PopupWithImage(POPUP.IMAGE.SELECTOR);
popupImage.setEventListeners();


const addCardValidator = new FormValidator(VALIDATOR_SETTINGS, POPUP.ADD.FORM);
const popupAdd = new PopupWithForm(POPUP.ADD.SELECTOR, handleSubmitAdd);
popupAdd.setEventListeners();
addCardValidator.enableValidation();


const editProfileValidator = new FormValidator(VALIDATOR_SETTINGS, POPUP.EDIT.FORM);
const popupEdit = new PopupWithForm(POPUP.EDIT.SELECTOR, handleSubmitEdit);
popupEdit.setEventListeners();
editProfileValidator.enableValidation();
const userInfo = new UserInfo({
  userName: USER.NAME_SLR,
  userAbout: USER.ABOUT_SLR,
  userAvatar: USER.AVATAR_SLR
});

const popupConfirm = new PopupWithForm(POPUP.CONFIRM.SELECTOR);

popupConfirm.setEventListeners();

const editAvatarValidator = new FormValidator(VALIDATOR_SETTINGS, POPUP.AVATAR.FORM);
const popupAvatar = new PopupWithForm(POPUP.AVATAR.SELECTOR, editAvatar);
popupAvatar.setEventListeners();


editAvatarValidator.enableValidation();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40',
  headers: {
    authorization: '67913aac-b670-497b-b2dd-e50632dce1ee',
    'Content-Type': 'application/json'
  }
});

// добавление слушателей
POPUP.EDIT.OPEN.addEventListener('click', () => {
  updatePopupEditInputs();
  // popupEdit.setButtonText(TEXT_SAVE);
  popupEdit.open();
});

POPUP.ADD.OPEN.addEventListener('click', () => {
  addCardValidator.resetValidation();
  popupAdd.open();
});

POPUP.AVATAR.OPEN.addEventListener('click', () => {
  editAvatarValidator.resetValidation();
  popupAvatar.open();
});

function editAvatar(avatar) {
  popupAvatar.setButtonText(TEXT_SAVE_PROCESSING);
  api.updateAvatar(avatar)
   .then(() => {
      userInfo.setUserInfo(null, null, avatar.avatar);
      popupAvatar.close()
    })
    .catch(console.log)
    .finally(() => {
      popupAvatar.setButtonText(TEXT_SAVE);
    })
}


Promise.all([api.getProfile(), api.getInitialCards()])
// тут деструктурируете ответ от сервера, чтобы было понятнее, что пришло
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData.name, userData.about, userData.avatar);
  userId = userData._id;
  cards.forEach(data => {
    const card = createCard({
      name: data.name,
      link: data.link,
      likes: data.likes,
      id: data._id,
      userId: userId,
      ownerId: data.owner._id
    });
    section.addItem(card)
  } )
      // тут установка данных пользователя
      // и тут отрисовка карточек
  })
  .catch(err => {
    console.log('Error', err);
    // тут ловим ошибку
  });


