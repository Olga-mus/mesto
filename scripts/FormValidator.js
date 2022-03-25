export class FormValidator {
  constructor(settings, formElement) {
    this._formElement = formElement;
    this._settings = settings;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);

  }

  _showInputError (inputElement, errorMessage) {
    // Находим элемент ошибки внутри самой функции
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  };

  _hideInputError (inputElement) {
    // Находим элемент ошибки
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = '';
  };


    // Проверка валидности всех полей формы
_isValid (inputElement) {
  if (!inputElement.validity.valid) {
    //     // showInputError теперь получает параметром форму, в которой
    //     // находится проверяемое поле, и само это поле
   this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    //     // hideInputError теперь получает параметром форму, в которой
    //     // находится проверяемое поле, и само это поле
    this._hideInputError(inputElement);
  }
};

// Изменение состояния кнопки
_toggleButtonState () {
  // Если есть хотя бы один невалидный инпут
  if (this._hasInvalidInput()) {
    // сделай кнопку неактивной
    this.disabledButton();
  } else {
    // иначе сделай кнопку активной
    this._buttonElement.disabled = false;
    this._buttonElement.classList.remove(this._settings.submitButtonDisabled);
  }
};

// Проверка валидности всех полей формы
_hasInvalidInput (){
  // проходим по этому массиву методом some
  return this._inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};





// Добавить обработчик всем полям ввода
  _setEventListeners () {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from

    // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
    this._toggleButtonState();


    // Обойдём все элементы полученной коллекции
    this._inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._isValid(inputElement);

        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        this._toggleButtonState();

      });
    });
  };



  enableValidation () {

      this._formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
        evt.preventDefault();
    });
// Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      this._setEventListeners();
  };

  disabledButton() {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._settings.submitButtonDisabled);
  }


  // resetErrors() {
    // this._formElement.reset();
  //   this._inputList.forEach(() => {
  //     this.__hideInputError(inputElement);
  //   })
  // }



resetValidation() {
  this.disabledButton();
  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  })
}

};


// settings = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__save-button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error-message_visible',
//   submitButtonDisabled: 'popup__save-button_disabled'
// }
















