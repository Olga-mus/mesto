export const imgImageWindow = document.querySelector('.popup__view'); //получаем ссылку на картинку новое изображение
export const textTitleImageWindow = document.querySelector('.popup__image-title'); //получаем ссылку на текст "новое изображение"
export const popupImageWindow = document.querySelector('.popup_image'); // получаем ссылку на попап окна новое изображение


//Находим ссылки на элементы попапа Редактировать профиль EditProfile
export const btnOpenEditProfile = document.querySelector('.profile__open-window'); //кнопка открытия попапа
export const popupEditProfile = document.querySelector('#popup_edit-profile'); // попап  Редактировать профиль
export const btnSubmitEditProfile = document.querySelector('.popup__save-button'); //кнопка сохранения попапа и отправки
export const formEditProfile = document.querySelector('.popup__form'); // Находим форму Редактировать профиль в DOM
export const inputNameEditProfile = document.querySelector('.popup__input_type_name'); // инпут имя в попапе Редактировать профиль
export const inputJobEditProfile = document.querySelector('.popup__input_type_job'); // инпут деятельности в попапе Редактировать профиль

export const textSubtitleEditProfile = document.querySelector('.profile__subtitle'); // подзаголовок в попапе Редактировать профиль
export const popupNewPlace = document.querySelector('#popup_place'); // попап Новое место

export const textTitleEditProfile = document.querySelector('.profile__title'); // заголовок в попапе Редактировать профиль
export const btnOpenNewPlace = document.querySelector('.profile__button'); //кнопка открытия попапа Новое место
export const btnSubmitNewPlace = document.querySelector('.popup__profile-save_place'); //кнопка сохранения попапа Новое место и отправки
export const formNewPlace = document.querySelector('.popup__form_place') // Находим форму Новое место в DOM
export const inputTitle = document.querySelector('.popup__input_type_card'); //ввести название картинки
export const inputImage = document.querySelector('.popup__input_type_link'); //ввести ссылку на картинку
export const savePlace = document.querySelector('.popup__form_place'); // ссылка на форму Новое место
export const containerPlace = document.querySelector('.elements'); //контейнер для добавления новых карточек
export const addCardForm = document.querySelector('.popup__form_place');
export const editForm = document.querySelector('.popup__form');
export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error-message_visible',
  submitButtonDisabled: 'popup__save-button_disabled'
}

//Находим оверлэй
export const popups = document.querySelectorAll('.popup')

// Создаем массив из карточек «из коробки»
export const cards = [{
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
