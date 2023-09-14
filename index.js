const main = document.querySelector("main");
const form = document.querySelector("form");
const emailInput = document.querySelector("input");
const errorMsg = document.querySelector("span");
const sucessMsg = document.querySelector(".success");

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

errorMsg.style.display = "none";
sucessMsg.style.display = "none";

form.addEventListener("submit", e => {
  e.preventDefault();
  if (form.email.value === "" || !form.email.value.match(validRegex)) {
    errorMsg.style.display = "block";
    emailInput.style.backgroundColor = "#ffa9a4";
    emailInput.style.setProperty("--c", "#ff6257");
    emailInput.style.borderColor = "#ff6257";
  } else {
    main.style.display = "none";
    sucessMsg.style.display = "flex";
    sucessMsg.innerHTML = `
  <div>
  <img src="/assets/images/icon-success.svg" alt="" />
    <h1>Thanks for subscribing!</h1>
    <p>
      A confirmation email has been sent to
      <strong>${form.email.value}</strong>. Please open it and click the
      button inside to confirm your subscription.
    </p>
  </div>
  <div>
    <a href="/">Dismiss message</a>
  </div>`;
  }
});
