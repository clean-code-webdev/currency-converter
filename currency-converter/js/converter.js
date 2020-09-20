window.onload = convertCurrency();

document.querySelector("#converter-go").addEventListener("click", () => {
    convertCurrency();
});

function convertCurrency() {
    let basecurrency = document
        .querySelector("#convert-from")
        .value.toUpperCase();

    let url = "https://api.exchangeratesapi.io/latest?base=" + basecurrency;

    // console.log(url);

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // TODO start working with fetch api
            // get currency base
            let basecurrency = document
                .querySelector("#convert-from")
                .value.toUpperCase();

            // get toconvert
            let toConvert = document.querySelector("#convert-to").value.toUpperCase();

            // get input value
            let v = document.querySelector("#dollar-quantity").value;
            // console.log(data.rates[toConvert] * v);

            let amount = (document.querySelector("#amount").innerText = (
                data.rates[toConvert] * v
            ).toFixed(2));

            // let curr = (document.querySelector("#currency").innerText = toConvert);

            document.querySelector("#from").innerText = `1 ${basecurrency}`;
            document.querySelector("#to").innerText = `${(amount / v).toFixed(
        2
      )} ${toConvert}`;
            // console.log(data);
        });
}

function fillInput(el) {
    if (el.value === "") {
        el.value = 1;
    }
}

document.querySelector("#nav-converter").addEventListener("click", () => {
    changeNavIndicator("converter");
    changeContent("converter");
});

document.querySelector("#nav-rates").addEventListener("click", () => {
    changeNavIndicator("rates");
    changeContent("rates");
});

document.querySelector("#nav-info").addEventListener("click", () => {
    changeNavIndicator("info");
    changeContent("info");
});

function changeContent(el) {
    let infoContent = document.querySelector(`#${el}-content`);
    let contents = document.querySelectorAll(".content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    infoContent.style.display = "block";
}

function changeNavIndicator(el) {
    let indicators = document.querySelectorAll(".indicator");
    let indicator = document.querySelector(`#${el}-indicator`);

    for (let i = 0; i < indicators.length; i++) {
        indicators[i].style.display = "none";
    }
    indicator.style.display = "block";
}