let amount = document.querySelectorAll(".amount"),
  billIn = document.getElementById("Bill"),
  PeopleIn = document.getElementById("people"),
  tipButtons = document.querySelectorAll(".tip button"),
  error = document.querySelector(".number-people"),
  reset = document.querySelector("[type='reset']"),
  inputs = document.querySelectorAll(".in"),
  custom = document.querySelector(".custom");

let tipPercentge = 0;
let tipAmount = 0;
let totalAmount = 0;

// --------------------------------------------------------------

custom.onfocus = () => {
  tipButtons.forEach((ele) => {
    ele.classList.remove("active");
  });
};

custom.onblur = () => {
  if (custom.value == "") {
    tipButtons[0].classList.add("active");
  } else return;
};

PeopleIn.oninput = checkInput;
billIn.oninput = checkInput;
custom.oninput = customFun;

function tipPercentage() {
  tipButtons.forEach((but) => {
    but.addEventListener("click", (event) => {
      tipButtons.forEach((ele) => {
        ele.classList.remove("active");
      });
      event.currentTarget.classList.add("active");
      tipPercentge = parseInt(but.textContent) / 100;
      checkInput();
    });
  });
}
tipPercentage();

function calc() {
  tipAmount = tipPercentge * billIn.value;
  totalAmount = tipAmount * PeopleIn.value;
  amount[0].textContent = `$${parseFloat(tipAmount).toFixed(2)}`;
  amount[1].textContent = `$${parseFloat(totalAmount).toFixed(2)}`;
}

function checkInput() {
  if (PeopleIn.value === "" || PeopleIn.value == 0) {
    error.classList.add("error");
    return false;
  } else {
    error.classList.remove("error");
    calc();
  }
}

function customFun() {
  tipPercentge = custom.value / 100;
  checkInput();
}
// --------------------------------------------------------------
reset.onclick = () => {
  amount.forEach((e) => {
    e.textContent = "$0.00";
  });
  inputs.forEach((inp) => {
    inp.value = "";
  });
  tipPercentge = 0;
};
//---------------------------------------------------------------

// change active class on click ( tip button )

// let tipButtons = document.querySelectorAll(".tip-button");
