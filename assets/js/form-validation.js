const forms = document.querySelectorAll("#contact-form");
const form = forms[0];

Array.from(form.elements).forEach((input) => {
  input.addEventListener("focus", function () {
    if (input.labels[0].htmlFor !== "message") {
      input.labels[0].classList.add("labelfocused");
      input.classList.add("inputfocused");
    }
  });
  input.addEventListener("focusout", function () {
    if (!input.value) {
      input.labels[0].classList.remove("labelfocused");
      input.classList.remove("inputfocused");
    }
  });
});
