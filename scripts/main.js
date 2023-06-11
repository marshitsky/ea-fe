// Modal
const openModal = (title, text) => {
  document.body.style.overflow = "hidden";
  const modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.append(modal);

  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modal__wrapper");

  const closeButton = document.createElement("img");
  closeButton.classList.add("modal__close");
  closeButton.src = "../assets/modal/btn-close.svg";
  closeButton.onclick = function () {
    document.body.removeChild(modal);
    document.body.style.overflow = "auto";
  };

  const modalTitle = document.createElement("h1");
  modalTitle.classList.add("modal__title");
  modalTitle.innerText = title;

  const modalText = document.createElement("p");
  modalText.classList.add("modal__text");
  modalText.innerText = text;

  const modalButton = document.createElement("button");
  modalButton.classList.add("modal__button");
  modalButton.innerText = "Close";
  modalButton.onclick = function () {
    document.body.removeChild(modal);
    document.body.style.overflow = "auto";
  };

  modal.append(modalWrapper);
  modalWrapper.append(closeButton, modalTitle, modalText, modalButton);
};

// Modal props

const modalProps = {
  success: {
    title: "SUCCESS!",
    text: "You have successfully subscribed to the email newsletter",
  },
  failure: {
    title: "FAIL!",
    text: "Something went wrong! Try to refresh the page!",
  },
  wrongValidation: {
    title: "OOPS!",
    text: "Email is wrong! Check entered email",
  },
};

// Form (validation and data post)
const URL = "https://6483434ff2e76ae1b95c3849.mockapi.io/ea-fe-test/emails";
const submitButton = document.querySelector(".footer__form-button");
const input = document.querySelector(".footer__input");

submitButton.onclick = (event) => {
  event.preventDefault();
  sendForm();
  input.value = "";
};

function validateEmail(value) {
  const validData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
  return value.match(validData) ? true : false;
}

const sendForm = async () => {
  validateEmail(input.value)
    ? await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          email: input.value,
          date: new Date().toLocaleString(),
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => {
          openModal(modalProps.success.title, modalProps.success.text);
        })
        .catch(() => {
          openModal(modalProps.failure.title, modalProps.failure.text);
        })
    : openModal(
        modalProps.wrongValidation.title,
        modalProps.wrongValidation.text
      );
};
