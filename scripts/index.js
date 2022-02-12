//Находим ссылки на элементы
const profileОpenWindow = document.querySelector('.profile__open-window');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupSubmitButton = document.querySelector('.popup__profile-save');
const popupProfileItemName = document.querySelector('.popup__input_type_name');
const popupProfileItemJob = document.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//По нажатию на кнопку совершить клик
function openPopup () {
  popup.classList.add('popup_opened');
  popupProfileItemName.value = profileTitle.textContent;
  popupProfileItemJob.value = profileSubtitle.textContent;
}

function closePopup () {
  popup.classList.remove('popup_opened');
}

profileОpenWindow.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
// Находим форму в DOM
const popupForm = document.querySelector('.popup__form');

// Обработчик «отправки» формы
function handleProfileFormSubmit (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  	// Получите значение полей из свойства value
  const valuePopupProfileItemName = popupProfileItemName.value;
  const valuePopupProfileItemJob = popupProfileItemJob.value;
// Вставьте новые значения с помощью textContent
  profileTitle.textContent = valuePopupProfileItemName;
  profileSubtitle.textContent = valuePopupProfileItemJob;
closePopup();
}
popupForm.addEventListener('submit', handleProfileFormSubmit);
