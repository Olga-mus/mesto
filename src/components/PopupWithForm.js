import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
  }



//собирает данные всех полей формы.
  _getInputValues() {
// создаём пустой объект
const data = {};
// добавляем в этот объект значения всех полей
this._inputList.forEach(input => {
  data[input.name] = input.value;
});
// возвращаем объект значений
return data;
}

_setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit', this._submitForm);
}

_submitForm() {
  this._handleSubmitForm(this._getInputValues())
}

_removeEventListeners() {
  super._removeEventListeners()
  this._form.removeEventListener('submit', this._submitForm)
}

setEventListeners() {
  super.setEventListeners()
  this._form.addEventListener('submit', this._submitForm)
}

close() {
  super.close();
  this._form.reset()
}
}






