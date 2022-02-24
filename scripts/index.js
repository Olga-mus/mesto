//Находим ссылки на элементы попапа Редактировать профиль EditProfile
const btnOpenEditProfile = document.querySelector('.profile__open-window'); //кнопка открытия попапа
const popupEditProfile = document.querySelector('#popup_edit-profile'); // попап  Редактировать профиль
const btnCloseEditProfile = document.querySelector('.popup__close-button'); //кнопка закрытия попапа
const btnSubmitEditProfile = document.querySelector('.popup__profile-save'); //кнопка сохранения попапа и отправки
const formEditProfile = document.querySelector('.popup__form');// Находим форму Редактировать профиль в DOM
const inputNameEditProfile = document.querySelector('.popup__input_type_name'); // инпут имя в попапе Редактировать профиль
const inputJobEditProfile = document.querySelector('.popup__input_type_job'); // инпут деятельности в попапе Редактировать профиль
const textTitleEditProfile = document.querySelector('.profile__title');// заголовок в попапе Редактировать профиль
const textSubtitleEditProfile = document.querySelector('.profile__subtitle');// подзаголовок в попапе Редактировать профиль

//Находим ссылки на элементы попапа Новое место NewPlace
const popupNewPlace = document.querySelector('#popup_place'); // попап Новое место
const btnOpenNewPlace = document.querySelector('.profile__button'); //кнопка открытия попапа Новое место
const btnCloseNewPlace = document.querySelector('.popup__close-button_place'); //закрытия попапа Новое место
const btnSubmitNewPlace = document.querySelector('.popup__profile-save_place'); //кнопка сохранения попапа Новое место и отправки

//Находим ссылки на элементы (добавление новых карточек места)
const inputTitle = document.querySelector('.popup__input_type_card'); //ввести название картинки
const inputImage = document.querySelector('.popup__input_type_link'); //ввести ссылку на картинку
const savePlace = document.querySelector('.popup__form_place'); // ссылка на форму Новое место
const containerPlace = document.querySelector('.elements'); //контейнер для добавления новых карточек
const template = document.querySelector('#card_template').content; //ссылка на темплейт с контентом

//Находим ссылки на попап для просмотра изображения ImageWindow
const btnCloseImageWindow = document.querySelector('.popup__image-close-button'); // ссылка на кнопку закрытия попапа просмотра изображений
const popupImageWindow = document.querySelector('.popup_image'); // получаем ссылку на попап окна новое изображение
const imgImageWindow = document.querySelector('.popup__view'); //получаем ссылку на картинку новое изображение
const textTitleImageWindow = document.querySelector('.popup__image-title'); //получаем ссылку на текст "новое изображение"

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


btnOpenEditProfile.addEventListener('click', function() {
  inputTextEditProfile();
  openPopup(popupEditProfile);
});
btnOpenNewPlace.addEventListener('click', function() {
  openPopup(popupNewPlace);
});

btnCloseEditProfile.addEventListener('click', function() {
  closePopup(popupEditProfile);
});

btnCloseNewPlace.addEventListener('click', function() {
  closePopup(popupNewPlace);
});

btnCloseImageWindow.addEventListener('click', function() {
  closePopup(popupImageWindow);
});

formEditProfile.addEventListener('submit', handleProfileFormSubmit); // отправка формы Редакттровать профиль

savePlace.addEventListener('submit', addCard); //добавляем слушателя на кнопку Сохранить

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function inputTextEditProfile() {
  inputNameEditProfile.value = textTitleEditProfile.textContent;
  inputJobEditProfile.value = textSubtitleEditProfile.textContent;
}
// Обработчик «отправки» формы
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей из свойства value
  // Вставьте новые значения с помощью textContent
  textTitleEditProfile.textContent = inputNameEditProfile.value;
  textSubtitleEditProfile.textContent = inputJobEditProfile.value;
  closePopup(popupEditProfile);
}

//рендер массива(отрисовка)
function renderCards() {
  cards.forEach(renderCard); //для каждой карточки назначаем функцию renderItem
  renderCard(listElement, createCard(card.name, card.link) );
}

function createCard(name, link) {
  const newCard = template.cloneNode(true);
  newCard.querySelector('.element__title').textContent = name;
  newCard.querySelector('.element__image').src = link;
  newCard.querySelector('.element__image').alt = name;
  addListeners(newCard);
  return newCard;
}

function renderCard(container, card) {
  container.prepend(card);
}

function renderCard(item) {
  const newCard = template.cloneNode(true); // копируем темплейт вместе с контентом, вкладываем в переменную newCard
  newCard.querySelector('.element__title').textContent = item.name; //меняем текст в переменной  newCard (темплейт)
  newCard.querySelector('.element__image').src = item.link; //меняем картинку в переменной  newCard (темплейт)
  newCard.querySelector('.element__image').alt = item.name; //меняем alt у картинки в переменной  newCard (темплейт)
  addListeners(newCard); // добавляем слушатель на темплейт (вызываем функцию)
  addCardContainer(newCard);
}

function addCardContainer(card) {
  containerPlace.appendChild(card);
}

//Добавляем карточку в контейнер
function addCard(event) {
  event.preventDefault(); //отменяем дефолтную отправку формы
  const newCard = template.cloneNode(true); // копируем темплейт вместе с контентом, вкладываем в переменную newCard
  newCard.querySelector('.element__title').textContent = inputTitle.value; //меняем текст в переменной  newCard (темплейт) в поле ввода
  newCard.querySelector('.element__image').src = inputImage.value; //меняем картинку в переменной  newCard (темплейт) в поле ввода
  newCard.querySelector('.element__image').alt = inputTitle.value; //меняем alt у картинки в переменной  newCard (темплейт)
  addListeners(newCard); // добавляем слушатель на темплейт (вызываем функцию)
  addCardContainerBegin(newCard);
  resetForm();
  closePopup(popupNewPlace);
}

function addCardContainerBegin(card) {
  containerPlace.prepend(card);
}

// Добавляем слушателей на карточку с местом
function addListeners(card) {
  card.querySelector('.element__button-delete').addEventListener('click', handleDelete); //находим кнопку удаления, добавляем слушателя (клик)
  card.querySelector('.element__button-like').addEventListener('click', handleLike); //находим кнопку лайк, добавляем слушателя (клик)
  card.querySelector('.element__image').addEventListener('click', handleView); //находим картинку, добавляем слушателя (клик)
}

function handleDelete(event) {
  event.target.closest('.element').remove(); // удаляем картинку
}

function handleLike(event) {
  event.target.classList.toggle('element__like_active'); //меняем лайк и дизлайк
}
//Открытие окна просмотра изображений
function handleView(event) {
  imgImageWindow.src = event.target.closest('.element__image').src; // на каком элементе произошел клик (меняем картинку)
  imgImageWindow.alt = event.target.closest('.element__image').alt; // на каком элементе произошел клик (меняем alt картинки)
  textTitleImageWindow.textContent = event.target.closest('.element__image').alt; // на каком элементе произошел клик (меняем текст картинки)
  openPopup(popupImageWindow);
  //openPopup(popupImageWindow); //при клике на картинку добавляется класс на открытие окна
}


function resetForm() {
  savePlace.reset();
}

renderCards();
