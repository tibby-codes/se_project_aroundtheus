const initialCards = [ 
  {
    name: "Yoseimite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/*-------------------------------------------------------------------------------*/
/*                          Elements                                             */
/*-------------------------------------------------------------------------------*/
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription =  document.querySelector('.profile__description');
const profileTitleInput = document.querySelector('#profile-title-input');
const profileDescriptionInput = document.querySelector('#profile-description-input');
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const cardTitleEl = addCardFormElement.querySelector(".modal__input_type_title");
const cardInputUrl = addCardFormElement.querySelector(".modal__input_type_url");

const cardListEl = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const addNewCardButton = document.querySelector(".profile__add-button");

// Form data 
const nameInput = addCardFormElement.querySelector


/*--------------------------------------------------------------------------------*/
/*                            Functions                                           */
/*--------------------------------------------------------------------------------*/

function closePopup(modal) {
  profileEditModal.classList.remove("modal_opened");
  addCardModal.classList.remove("modal_opened");
}


 function openPopup(modal) {
  editProfileModal.classList.add("modal_opened");
 }


function openPopup(modal) {
  modal.classList.add("modal_opened");

}

function renderCard(cardData, cardListEl) {
const cardElement = getCardElement(cardData);
cardListEl.prepend(cardElement);
}

function getCardElement(cardData) {
 const cardElement = cardTemplate.cloneNode(true);
 const cardImageEl = cardElement.querySelector(".card__image");
 const cardTitleEl = cardElement.querySelector(".card__title");
 cardImageEl.src = cardData.link;
 cardImageEl.alt = cardData.name;
 cardTitleEl.textContent = cardData.name; 

return cardElement;
}

/*---------------------------------------------------------------------------------*/
/*                             Event Handlers                                      */
/*----------------------------------------------------------------------------------*/
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value
  profileDescription.textContent = profileDescriptionInput.value; 
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleEl.value;
  const link = cardInputUrl.value;
  renderCard({name, link}, cardListEl);
  closePopup(addCardModal);
}

/*---------------------------------------------------------------------------------*/
/*                             Event Listeners                                     */
/*----------------------------------------------------------------------------------*/


//Form listeners 
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal)});



profileEditCloseButton.addEventListener("click",() => 
  closePopup(profileEditModal)
);
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
// add new card  
addNewCardButton.addEventListener("click", () => openPopup(addCardModal));
addCardModalCloseButton.addEventListener("click", () => closePopup(addCardModal));


initialCards.forEach((cardData) => renderCard(cardData, cardListEl)); 
