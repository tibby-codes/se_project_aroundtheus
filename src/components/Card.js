export default class Card {
    constructor({ name, link }, cardSelector, handleImageClick) {
      this._name = name;
      this._link = link;
      this._cardSelector = cardSelector;
      this._handleImageClick = handleImageClick;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);
  
      return cardElement;
    }
  
    _setEventListeners() {
      this._likeButton.addEventListener('click', () => {
        this._likeButton.classList.toggle('card__like-button_active');
      });
  
      this._deleteButton.addEventListener('click', () => {
        this._element.remove();
        this._element = null;
      });
  
      this._image.addEventListener('click', () => {
        this._handleImageClick(this._name, this._link);
      });
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._likeButton = this._element.querySelector('.card__like-button');
      this._deleteButton = this._element.querySelector('.card__delete-button');
      this._image = this._element.querySelector('.card__image');
      this._title = this._element.querySelector('.card__title');
  
      this._image.src = this._link;
      this._image.alt = this._name;
      this._title.textContent = this._name;
  
      this._setEventListeners();
  
      return this._element;
    }
  }