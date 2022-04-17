export default class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._template = document.querySelector(cardTemplateSelector).content;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;

    this._handleLike = this._handleLike.bind(this)
  }

  _handleDelete() {
    this._newCard.remove();
  }

  _handleLike() {
    this._likeButton.classList.toggle('element__like_active');
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => this._handleDelete());
    this._likeButton.addEventListener('click', this._handleLike);
    this._image.addEventListener('click', () => {
      this._handleCardClick({ name: this._name, link: this._link })});
  }

  _fillCard() {
    this._newCard.querySelector('.element__title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
  }

  // createCard() {
  //   this._newCard = this._template.querySelector('.element').cloneNode(true);
  //   this._likeButton = this._newCard.querySelector('.element__button-like');
  //   this._deleteButton = this._newCard.querySelector('.element__button-delete');
  //   this._image = this._newCard.querySelector('.element__image');
  //   this._fillCard();
  //   this._setEventListeners();
  //   return this._newCard;
  // }

  generateCard() {
    this._newCard = this._template.querySelector('.element').cloneNode(true);
    this._likeButton = this._newCard.querySelector('.element__button-like');
    this._deleteButton = this._newCard.querySelector('.element__button-delete');
    this._image = this._newCard.querySelector('.element__image');
    this._fillCard();
    this._setEventListeners();
    return this._newCard;
  }
}
