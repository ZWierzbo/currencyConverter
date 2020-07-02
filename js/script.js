{
    const rateEUR = 4.42
    const rateGBP = 4.90
    const rateUSD = 3.94


    const calculatePlnValue = (amount, currency) => {
        switch (currency) {
            case "PLN":
                return amount;


            case "GBP":
                return amount * rateGBP;


            case "USD":
                return amount * rateUSD;


            case "EUR":
                return amount * rateEUR;
        }


    }

    const calculateResult = (plnValue, currency2) => {
        switch (currency2) {
            case "GBP":
                return plnValue / rateGBP;

            case "USD":
                return plnValue / rateUSD;

            case "EUR":
                return plnValue / rateEUR;

            case "PLN":
                return plnValue

        }
    }

    const updatedResult = (amount, result, currency, currency2) => {
        const resultElement = document.querySelector(".js-result")
        resultElement.innerHTML = `${amount.toFixed(2)} ${currency} = <strong> ${result.toFixed(2)} ${currency2}</strong>`;
    }

    const onFormSubmit = () => {

        event.preventDefault();

        const amountElement = document.querySelector(".js-amount")
        const fromCurrencyElement = document.querySelector(".js-from")
        const toCurrencyElement = document.querySelector(".js-to")


        const amount = +amountElement.value;
        const currency = fromCurrencyElement.value;
        const currency2 = toCurrencyElement.value;


        const plnValue = calculatePlnValue(amount, currency);
        const result = calculateResult(plnValue, currency2);

        updatedResult(amount, result, currency, currency2);


    };

    const init = () => {

        const formElement = document.querySelector(".js-form")

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();


}