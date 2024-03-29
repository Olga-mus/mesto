export default class FormValidator {
  constructor(settings, formElement) {
    this._formElement = formElement;
    this._settings = settings;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.INPUT_SLR));
    this._buttonElement = this._formElement.querySelector(this._settings.SUBMIT_BUTTON_SLR);
  }

  _showInputError(inputElement, errorMessage) {
    // Находим элемент ошибки внутри самой функции
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.add(this._settings.INPUT_ERROR_CLASS);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.ERROR_CLASS);
  };

  _hideInputError(inputElement) {
    // Находим элемент ошибки
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.remove(this._settings.INPUT_ERROR_CLASS);
    errorElement.classList.remove(this._settings.ERROR_CLASS);


    errorElement.textContent = '';
  };

  // Проверка валидности всех полей формы
  _isValid(inputElement) {
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
  _toggleButtonState() {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput()) {
      // сделай кнопку неактивной
      this.disabledButton();
    } else {
      // иначе сделай кнопку активной
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._settings.SUBMIT_BUTTON_DISABLED);
    }
  };

  // Проверка валидности всех полей формы
  _hasInvalidInput() {
    // проходим по этому массиву методом some
    return this._inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся фунцкция
      // hasInvalidInput вернёт true
      return !inputElement.validity.valid;
    })
  };

  // Добавить обработчик всем полям ввода
  _setEventListeners() {
    this._toggleButtonState();
    // Обойдём все элементы полученной коллекции
    this._inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  disabledButton() {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._settings.SUBMIT_BUTTON_DISABLED);
  }

  resetValidation() {
    this.disabledButton();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    })
  }

}
