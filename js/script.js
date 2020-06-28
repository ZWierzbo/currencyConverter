let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount")
let fromCurrencyElement = document.querySelector(".js-from")
let toCurrencyElement = document.querySelector(".js-to")
let resultElement = document.querySelector(".js-result")


let rateEUR = 4.42
let rateGBP = 4.90
let rateUSD = 3.94
let plnValue;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = fromCurrencyElement.value;
    let currency2 = toCurrencyElement.value;

    
    let plnValue;
    let result;

    switch (currency) {
        case "PLN":
            plnValue = amount;
            break;

        case "GBP":
            plnValue = amount * rateGBP;
            break;

        case "USD":
            plnValue = amount * rateUSD;
            break;

        case "EUR":
            plnValue = amount * rateEUR;
    }


    switch (currency2) {
        case "GBP":
            result = plnValue / rateGBP;
            break;
        case "USD":
            result = plnValue / rateUSD;
            break;
        case "EUR":
            result = plnValue / rateEUR;
            break;
        case "PLN":
            result = plnValue

    }

    resultElement.innerHTML = `${amount.toFixed(2)} ${currency} = <strong> ${result.toFixed(2)} ${currency2}</strong>`;


});
