// const handleView = (name, link) => {
//   imgImageWindow.src = link; // на каком элементе произошел клик (меняем картинку)
//   imgImageWindow.alt = name; // на каком элементе произошел клик (меняем alt картинки)
//   textTitleImageWindow.textContent = name; // на каком элементе произошел клик (меняем текст картинки)
//   openPopup(popupImageWindow);
// }

export class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {//{name, link }, '#card_template'
    this._template = document.querySelector(cardTemplateSelector).content; //ссылка на темплейт с контентом
//templete = cardTemplate
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  }

  _handleDelete = () => {
    this._newCard.remove(); // удаляем картинку
  }

  _handleLike = () => {
    this._likeButton.classList.toggle('element__like_active'); //меняем лайк и дизлайк
  }


  // handleView = () => { // = handlePreviewPicture
  //   imgImageWindow.src = this._link; // на каком элементе произошел клик (меняем картинку)
  //   imgImageWindow.alt = this._name; // на каком элементе произошел клик (меняем alt картинки)
  //   textTitleImageWindow.textContent = this._name; // на каком элементе произошел клик (меняем текст картинки)
  //   openPopup(popupImageWindow);
  // }


_setEventListeners() { //выносим слушателей в отдельную функцию
  const deleteButton = document.querySelector('.element__button-delete'); //кнопка удаления
  deleteButton.addEventListener('click', this.handleDelete); //подписка на  кнопку удаления
  this._likeButton.addEventListener('click', this.handleLike); //подписка на кнопку лайк
  cardImage.addEventListener('click', () => handleCardClick(this._name, this._link)); //подписка на  картинку

}

_fillCard() {
  this._newCard.querySelector('.element__title').textContent = this._name ;

  this._image.src = this._link;
  this._image.alt = this._name ;
}

  createCard() { //=getCardElement
    //нашли
    this._newCard = this._template.cloneNode(true); //newCard = cardElement
    this._likeButton = document.querySelector('.element__button-like'); //кнопка лайка
    this._image = this._newCard.querySelector('.element__image'); //image = cardImage
    // this._cardImage = document.querySelector('.element__image');//картинка

    //заполнили
    this._fillCard();

    //подписались
    _setEventListeners();


    // addListeners(newCard);
    return this._newCard;
  }

// Добавляем слушателей на карточку с местом
// addListeners(card) {
//   card.querySelector('.element__button-delete').addEventListener('click', handleDelete); //находим кнопку удаления, добавляем слушателя (клик)
//   card.querySelector('.element__button-like').addEventListener('click', handleLike); //находим кнопку лайк, добавляем слушателя (клик)
//   card.querySelector('.element__image').addEventListener('click', handleView); //находим картинку, добавляем слушателя (клик)
// }


}


//в index.js
// const data = {name: 'name', link: 'link'}
// import {imgImageWindow, textTitleImageWindow, popupImageWindow} from './constants.js';
// import { openPopup } from './utils.js';
// const handleCardClick = () => {
//   imgImageWindow.src = this._link; // на каком элементе произошел клик (меняем картинку)
//   imgImageWindow.alt = this._name; // на каком элементе произошел клик (меняем alt картинки)
//   textTitleImageWindow.textContent = this._name; // на каком элементе произошел клик (меняем текст картинки)
//   openPopup(popupImageWindow);
// }

// const card = new Card(data, '#card_template', handleCardClick);
