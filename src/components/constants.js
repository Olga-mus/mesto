export {
  POPUP,
  USER,
  CONTAINER_SLR,
  CARD_TEMPLATE_SLR,
  VALIDATOR_SETTINGS,
  INITIAL_CARDS
};

const POPUP = {
  EDIT: {
    SELECTOR: '#popup_edit-profile',
    OPEN: document.querySelector('.profile__open-window'),
    FORM: document.forms.edit_profile,
    INPUT_NAME: document.querySelector('.popup__input_type_name'),
    INPUT_ABOUT: document.querySelector('.popup__input_type_job'),
  },
  ADD: {
    SELECTOR: '#popup_place',
    OPEN: document.querySelector('.profile__button'),
    FORM: document.forms.add_place,
  },
  IMAGE: {
    SELECTOR: '.popup_image',
  },
}

const USER = {
  NAME_SLR: '.profile__title',
  ABOUT_SLR: '.profile__subtitle',
}

const CONTAINER_SLR = '.elements'

const CARD_TEMPLATE_SLR = '#CARD_TEMPLATE_SLR'

const VALIDATOR_SETTINGS = {
  INPUT_SLR: '.popup__input',
  SUBMIT_BUTTON_SLR: '.popup__save-button',
  INPUT_ERROR_CLASS: 'popup__input_type_error',
  ERROR_CLASS: 'popup__error-message_visible',
  SUBMIT_BUTTON_DISABLED: 'popup__save-button_disabled'
}

const INITIAL_CARDS = [{
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
