export const initialCards = [
    { name: "Yosemite Valley", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg" },
    { name: "Lake Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg" },
    { name: "Bald Mountains", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg" },
    { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg" },
    { name: "Vanoise National Park", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg" },
    { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg" },
  ];


export const validationConfig = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  };
  
  function showInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(config.errorClass);
    errorElement.style.display = "block"; 

  }
  
 
  function hideInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    if (!errorElement) {
      console.error(`Error element not found for input: ${inputElement.id}`);
      return; 
  }
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(config.errorClass);
  }
  
  
  function checkInputValidity(formElement, inputElement, config) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, config);
    } else {
      hideInputError(formElement, inputElement, config);
    }
  }
  
  
  function toggleButtonState(inputList, buttonElement, config) {
    const isFormValid = inputList.every(input => input.validity.valid);
    if (isFormValid) {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.disabled = false;
    } else {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = true;
    }
  }
  
  function setEventListeners(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
  
   
    toggleButtonState(inputList, buttonElement, config);
  
    inputList.forEach(inputElement => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
      });
    });
  }
  
 
  function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach(formElement => {
      setEventListeners(formElement, config);
    });
  }
  
  
  enableValidation(validationConfig);