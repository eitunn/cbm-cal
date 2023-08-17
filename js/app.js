// Exchange Rates

const rates = {
  USD: 2100.0,
  SGD: 1547.5,
  JPY: 1443.3,
  EUR: 2295.3,
  MMK: 1,
};

// selector
const from = document.getElementById("from");
const to = document.getElementById("to");
const userInput = document.getElementById("userInput");
const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");

// function

const calculateAmount = (amount, fromCurrency, toCurrency) =>
  amount * (rates[fromCurrency] / rates[toCurrency]);

const handleClick = () => {
  let result = calculateAmount(userInput.valueAsNumber, from.value, to.value);
  currentAmount.innerText = userInput.value + ` ${from.value}`;
  exAmount.innerText = result.toFixed(2) + ` ${to.value}`;
  userInput.value = null;
};

const clear = () =>{
  currentAmount.innerText=null;
  exAmount.innerText=null;
}



// process

calculateBtn.addEventListener("click", handleClick);
clearBtn.addEventListener("click",clear)