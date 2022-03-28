// Экспортровать по умолчанию
export class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._template = document.querySelector(cardTemplateSelector).content;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;

    this._handleLike = this._handleLike.bind(this)
  }

  // Убрать стрелочную  функцию
  _handleDelete() {
    this._newCard.remove();
  }

  // Убрать стрелочную функцию
  _handleLike() {
    this._likeButton.classList.toggle('element__like_active');
  }

  _setEventListeners() {
    // Не находит кнопку, потому что она в темплейте. Это значит, что в DOM ее не существует?!. Если делать так, то нужно искать кнопку в методе createCard
    // const deleteButton = document.querySelector('.element__button-delete');
    // Добавить стрелочную функцию (чтобы не потерять контекст, у стрелочной функции нет контекста) или забиндить метод
    // Добавить _
    this._deleteButton.addEventListener('click', () => this._handleDelete());
    // Добавить стрелочную функцию
    // Добавить _
    this._likeButton.addEventListener('click', this._handleLike);
    // cardImage не существует нужно выбрать картинку на созданной карточке -  this._image
    // В handleCardClick добавить this._
    this._image.addEventListener('click', () => this._handleCardClick(this._name, this._link));

  }

  _fillCard() {
    this._newCard.querySelector('.element__title').textContent = this._name;

    this._image.src = this._link;
    this._image.alt = this._name;
  }

  createCard() {
    // добавить поиск элемента querySelector('.element')
    this._newCard = this._template.querySelector('.element').cloneNode(true);
    // нужно искать не в документе, этой кнопки там не существует, она в темплейте
    this._likeButton = this._newCard.querySelector('.element__button-like');
    // Коммент для кнопки удалить выше
    this._deleteButton = this._newCard.querySelector('.element__button-delete');
    this._image = this._newCard.querySelector('.element__image');

    this._fillCard();

    // добавить this
    this._setEventListeners();

    return this._newCard;
  }

}
