const submitBtn = document.getElementById("submitBtn");
const continueBtn = document.getElementById("continue-btn");
const thankYouName = document.getElementById("thankYouName");
const thankYouSection = document.getElementById("thank-u-container");
const form = document.getElementById("form");
const expiryErrorMessage = document.getElementById("expiry-error");
const cardHolderErrorMsg = document.getElementById("cardHolderErrorMsg");
const cardHolder = document.getElementById("card-holder-name");
const cardNumber = document.getElementById("card-holder-number");
const monthInput = document.getElementById("expiry-month");
const yearInput = document.getElementById("expiry-year");
const cvc = document.getElementById("cvc");
const cardName = document.getElementById("cardName");
const cardSerialNumber = document.getElementById("cardSerialNumber");
const cardExpiryYear = document.getElementById("card-expiry-year");
const cardExpiryMonth = document.getElementById("card-expiry-month");
const cardCvc = document.getElementById("card-cvc");
const errorMsg = document.getElementById("errorMsg");


function nameInput() {
  cardName.innerHTML = cardHolder.value;
  thankYouName.innerHTML = `${cardHolder.value}`;
}
function numberInput(input) {
  let cardNum = input.value.replace(/\D/g, '');
  if (cardNum.length > 0) {
    cardNum = cardNum.slice(0, 16);
    cardNum = cardNum.match(/.{1,4}/g).join(' ');
  }
  input.value = cardNum;
  cardSerialNumber.innerHTML = cardNumber.value;
}
function expiryMonthInput(input) {
  let expiry = input.value.replace(/\D/g, '');
  input.value = expiry;
  cardExpiryMonth.innerHTML = monthInput.value;
}
function expiryYearInput(input) {
  let expiry = input.value.replace(/\D/g, '');
  input.value = expiry;
  cardExpiryYear.innerHTML = yearInput.value;
}
function cvcInput(input) {
  let expiry = input.value.replace(/\D/g, '');
  input.value = expiry;
  cardCvc.innerHTML = cvc.value;
}

/******************************************************************************************************************* */
submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  thankYouSection.style.display = "flex";
  form.style.display = "none";
})

continueBtn.addEventListener("click", function(e) {
  e.preventDefault();
  thankYouSection.style.display = "none";
  form.style.display = "flex";
})
