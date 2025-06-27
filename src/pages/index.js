import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from "../components/UserInfo.js";
import { initialCards, validationConfig } from '../utils/constants.js';
import "../pages/index.css";


const profileEditButton = document.querySelector("#profile-edit-button");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileEditForm = document.querySelector("#profile-edit-modal .modal__form");
const addCardFormElement = document.querySelector("#add-card-modal .modal__form");
const cardTitleEl = addCardFormElement.querySelector(".modal__input_type_title");
const cardInputUrl = addCardFormElement.querySelector(".modal__input_type_url");
const addNewCardButton = document.querySelector(".profile__add-button");


const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description"
});


const imagePopup = new PopupWithImage('#image-viewer-modal');
imagePopup.setEventListeners();

function openImageModal(name, link) {
  imagePopup.open({ name, link });
}


const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, '#card-template', openImageModal);
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    }
  },
  '.cards__list'
);
cardSection.renderItems();


const profileEditPopup = new PopupWithForm('#profile-edit-modal', (formData) => {
  userInfo.setUserInfo({
    name: formData.title,
    job: formData.description
  });
  profileEditPopup.close();
});
profileEditPopup.setEventListeners();


const addCardPopup = new PopupWithForm('#add-card-modal', (formData) => {
  const card = new Card(
    { name: formData.title, link: formData.url },
    '#card-template',
    openImageModal
  );
  const cardElement = card.generateCard();
  cardSection.addItem(cardElement);
  addCardPopup.close();
});
addCardPopup.setEventListeners();


profileEditButton.addEventListener("click", () => {
  const currentUserData = userInfo.getUserInfo();
  profileTitleInput.value = currentUserData.name;
  profileDescriptionInput.value = currentUserData.job;
  profileFormValidator.resetValidation();
  profileEditPopup.open();
});


addNewCardButton.addEventListener("click", () => {
  addCardFormElement.reset();
  addCardFormValidator.resetValidation();
  addCardPopup.open();
});


const profileFormValidator = new FormValidator(validationConfig, profileEditForm);
profileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationConfig, addCardFormElement);
addCardFormValidator.enableValidation();




