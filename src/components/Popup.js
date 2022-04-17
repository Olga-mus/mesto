export default class Popup {
  consrtuctor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = handleEscClose.bind(this); //содержит логику закрытия попапа клавишей Esc.
    this._handleClickClose = handleClickClose.bind(this); //закрытие по крестику или оверлэю
  }

  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
    console.log(this._popup);
  }


  close() {
    this._popup.classList.remove('popup_opened');
    this._removeEventListeners();
  }

//содержит логику закрытия попапа клавишей Esc.
_handleEscClose(evt) {
  if (evt.key === 'Escape') {
    this.close();
  }
}

_handleClickClose(evt) {
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
    this.close();
  }
}


//добавляет слушатель клика иконке закрытия попапа.
setEventListeners() {
  this._popup.addEventListener('mousedown', this._handleClickClose);
  document.addEventListener('keydown', this._handleEscClose);
  }

  //удаляет слушатель клика иконке закрытия попапа.
  _removeEventListeners() {
    this._popup.removeEventListener('mousedown', this._handleClickClose);
    document.removeEventListener('keydown', this._handleEscClose);
}


}


