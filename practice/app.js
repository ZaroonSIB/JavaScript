const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";
const dropDowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btnCoverter");
const fromCurn = document.querySelector(".from select");
const toCurn = document.querySelector(".to select");

for (let select of dropDowns) {
  for (currcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currcode;
    newOption.value = currcode;
    if (select.name === "from" && currcode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currcode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/shiny/32.png`;
  let img = element.parentElement.querySelector(".dropdown img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateRate();
});
window.addEventListener("load", () => {
  updateRate();
});

const updateRate = async () => {
  let amount = document.querySelector(".amount input");
  let amountVal = amount.value;
  if (amountVal === "" || amountVal < 1) {
    amountVal = 1;
    amount.value = "1";
  }

  let url = `${BASE_URL}/${fromCurn.value.toLowerCase()}.json`;
  let response = await fetch(url);
  let data = await response.json();
  let rate = data[fromCurn.value.toLowerCase()][toCurn.value.toLowerCase()];
  let finalAmount = amountVal * rate;
  let msg = document.querySelector(".msg");
  msg.innerText = `${amountVal} ${fromCurn.value} = ${finalAmount} ${toCurn.value}`;
};
