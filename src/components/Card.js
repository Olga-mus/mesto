export default class Card {

  constructor(data, cardTemplateSelector, handleCardClick, handleDeleteClick, handleLikeClick, userId) {
    this._template = document.querySelector(cardTemplateSelector).content;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

  }


  isLiked() {
  const userHasLikeCard = this._likes.find(user => user._id === this._userId);
  return userHasLikeCard;
}

  deleteCard() {
    this._newCard.remove();
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id));
    this._image.addEventListener('click', () => {
      this._handleCardClick({
        name: this._name,
        link: this._link
      })
    });
  }

  _fillCard() {
    this._newCard.querySelector('.element__title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
  }



  _fillLike() {
    this._likeButton.classList.add('element__like_active');
  }

  _deleteFillLike() {
    this._likeButton.classList.remove('element__like_active');
  }

  createCard() {
    this._newCard = this._template.querySelector('.element').cloneNode(true);
    this._likeButton = this._newCard.querySelector('.element__button-like');
    this._deleteButton = this._newCard.querySelector('.element__button-delete');
    this._likeCountElement = this._newCard.querySelector('.element__like-count');

    this._image = this._newCard.querySelector('.element__image');
    this._fillCard();
    this._setEventListeners();
    this.setLikes(this._likes);

    if(this._ownerId !== this._userId) {
      this._deleteButton.style.display = 'none';
    }

    return this._newCard;
  }

    //находит спан с лайком
    setLikes(newLikes) {
      this._likes = newLikes;
      this._likeCountElement.textContent = this._likes.length;
      if(this.isLiked()) {
        this._fillLike();
      } else {
        this._deleteFillLike();
      }
    }
}
