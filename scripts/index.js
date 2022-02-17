//Находим ссылки на элементы попапа Редактировать профиль
const profileОpenWindow = document.querySelector('.profile__open-window'); //кнопка открытия попапа
const popup = document.querySelector('.popup'); // попап  Редактировать профиль
const popupCloseButton = document.querySelector('.popup__close-button'); //кнопка закрытия попапа
const popupSubmitButton = document.querySelector('.popup__profile-save'); //кнопка сохранения попапа и отправки
const popupProfileItemName = document.querySelector('.popup__input_type_name');
const popupProfileItemJob = document.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//Находим ссылки на элементы попапа Новое место
const popup_place = document.querySelector('.popup_place'); // попап Новое место
const openPopupPlace = document.querySelector('.profile__button'); //кнопка открытия попапа Новое место
const closePopupPlace = document.querySelector('.popup__close-button_place'); //закрытия попапа Новое место
//const savePopupPlace = document.querySelector('.popup__profile-save_place'); //кнопка сохранения попапа Новое место и отправки

//Находим ссылки на элементы (добавление новых карточек места)
const inputTitle = document.querySelector('.popup__input_type_card'); //ввести название картинки
const inputImage = document.querySelector('.popup__input_type_link'); //ввести ссылку на картинку
const savePlace = document.querySelector('.popup__form_place'); //сохранить картинку с местом
const containerPlace = document.querySelector('.elements'); //контейнер для добавления новых карточек
const template = document.querySelector('#card_template').content; //ссылка на темплейт с контентом

//Находим ссылки на попап для просмотра изображения
const closePopupImage = document.querySelector('.popup-image__close-button'); // ссылка на кнопку закрытия попапа просмотра изображений
const popupImageWindow = document.querySelector('.popup-image'); // получаем ссылку на попап окна новое изображение
const popupImage = document.querySelector('.popup-image__view'); //получаем ссылку на картинку новое изображение
const popupImageTitle = document.querySelector('.popup-image__title'); //получаем ссылку на текст "новое изображение"

//Работа с попапом Редактировать профиль
//По нажатию на кнопку совершить клик
function openPopup() {
  popup.classList.add('popup_opened');
  popupProfileItemName.value = profileTitle.textContent;
  popupProfileItemJob.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

closePopupImage.addEventListener('click', closePopupImageWindow);

function closePopupImageWindow() {
  popupImageWindow.classList.remove('popup-image_open');
}

function openPopupImageWindow() {
  popupImageWindow.classList.add('popup-image_open');
}

profileОpenWindow.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
// Находим форму Редактировать профиль в DOM
const popupForm = document.querySelector('.popup__form');

// Обработчик «отправки» формы
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Получите значение полей из свойства value
  const valuePopupProfileItemName = popupProfileItemName.value;
  const valuePopupProfileItemJob = popupProfileItemJob.value;
  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = valuePopupProfileItemName;
  profileSubtitle.textContent = valuePopupProfileItemJob;
  closePopup();
}
popupForm.addEventListener('submit', handleProfileFormSubmit); // отправка формы Редакттровать профиль

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

//рендер массива(отрисовка)
function render() {
  cards.forEach(renderCard); //для каждой карточки назначаем функцию renderItem
}

function renderCard(item) {
  const newCard = template.cloneNode(true); // копируем темплейт вместе с контентом, вкладываем в переменную newCard
  newCard.querySelector('.element__title').textContent = item.name; //меняем текст в переменной  newCard (темплейт)
  newCard.querySelector('.element__image').src = item.link; //меняем картинку в переменной  newCard (темплейт)
  newCard.querySelector('.element__image').alt = item.name; //меняем alt у картинки в переменной  newCard (темплейт)
  addListeners(newCard); // добавляем слушатель на темплейт (вызываем функцию)
  containerPlace.appendChild(newCard); // добавляем темплейт в контейнер
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
  popupImage.src = event.target.closest('.element__image').src; // на каком элементе произошел клик (меняем картинку)
  popupImage.alt = event.target.closest('.element__image').alt; // на каком элементе произошел клик (меняем alt картинки)
  popupImageTitle.textContent = event.target.closest('.element__image').alt; // на каком элементе произошел клик (меняем текст картинки)
  openPopupImageWindow(); //при клике на картинку добавляется класс на открытие окна
}

savePlace.addEventListener('submit', addCard); //добавляем слушателя на кнопку Сохранить

//Добавляем карточку в контейнер
function addCard(event) {
  event.preventDefault(); //отменяем дефолтную отправку формы
  const newCard = template.cloneNode(true); // копируем темплейт вместе с контентом, вкладываем в переменную newCard
  newCard.querySelector('.element__title').textContent = inputTitle.value; //меняем текст в переменной  newCard (темплейт) в поле ввода
  newCard.querySelector('.element__image').src = inputImage.value; //меняем картинку в переменной  newCard (темплейт) в поле ввода
  newCard.querySelector('.element__image').alt = inputTitle.value; //меняем alt у картинки в переменной  newCard (темплейт)
  addListeners(newCard); // добавляем слушатель на темплейт (вызываем функцию)
  containerPlace.prepend(newCard);
  resetForm();
  closeWindowPopupPlace();
}

function resetForm() {
  inputTitle.value = '';
  inputImage.value = '';
}

render();

//Работа с попапом Новое место
//По нажатию на кнопку совершить клик
function openWindowPopupPlace() {
  popup_place.classList.add('popup_opened');
}

function closeWindowPopupPlace() {
  popup_place.classList.remove('popup_opened');
}

openPopupPlace.addEventListener('click', openWindowPopupPlace);
closePopupPlace.addEventListener('click', closeWindowPopupPlace);
