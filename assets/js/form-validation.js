const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

const forms = document.querySelectorAll("#contact-form");
const form = forms[0];

Array.from(form.elements).forEach((input) => {
  input.addEventListener("focus", function () {
    input.labels[0].classList.add("labelfocused");
    input.classList.add("inputfocused");
  });
  input.addEventListener("focusout", function () {
    if (!input.value) {
      input.labels[0].classList.remove("labelfocused");
      input.classList.remove("inputfocused");
    }
  });
});
