window.onload = loadRates();

document.querySelector("#rates-go").addEventListener("click", () => {
    loadRates();
});

// print currency rate
function loadRates() {
    let basecurrency = document.querySelector("#rates").value.toUpperCase();

    let url = "https://api.exchangeratesapi.io/latest?base=" + basecurrency;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let rates = document.querySelector("#rates").value.toUpperCase();
            let ratesList = document.querySelector("#rates-list");

            ratesList.innerHTML = "";

            for (const property in data.rates) {
                let rate = `${property}: ${data.rates[property]} / ${rates}`;
                // console.log(rate);

                let li = document.createElement("li");

                // console.log("foo " + property);

                li.innerHTML = `                
                <span class="icon">
                    <div class="flag"><img src="../img/icons/flags/${property}.png" alt=""></div>
                </span>
                <span class="currency">${property}</span>
                <span class="value">${parseFloat(data.rates[property]).toFixed(
                  4
                )}</span>
                `;

                ratesList.appendChild(li);
            }
        });
}