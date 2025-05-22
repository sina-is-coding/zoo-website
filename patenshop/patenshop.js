// produkte für #shop generieren
function loadProducts() {
    const SHOPDIV = document.querySelector("#shop");
    const PRODUCTS = [
        {
            name: "Stoff-Giraffe",
            preis: "36,99€",
            bild: "produktBilder/stofftier_giraffe.jpg"
        },
        {
            name: "Schluesselanhaenger",
            preis: "7,49€",
            bild: "produktBilder/schluesselanhaenger.jpg"
        },
        {
            name: "Stoff-Loewe",
            preis: "22,99€",
            bild: "produktBilder/stofftier_loewe.jpg"
        },
        {
            name: "Elefantentasse",
            preis: "18,99€",
            bild: "produktBilder/elefantentasse.jpg"
        },
        {
            name: "Geschirrset",
            preis: "59,99€",
            bild: "produktBilder/geschirr_voegel.jpg"
        },
        {
            name: "Faultiertasse",
            preis: "13,99€",
            bild: "produktBilder/slothtasse.jpg"
        },
        {
            name: "Tierfutter",
            preis: "8,00€",
            bild: "produktBilder/tierfutter.jpg"
        },
        {
            name: "Handtuch",
            preis: "32,99€",
            bild: "produktBilder/zoohandtuch.jpg"
        },
        {
            name: "Liebe",
            preis: "100,00€",
            bild: "produktBilder/heart.jpg"
        },

    ];

    PRODUCTS.forEach((product) => {
        SHOPDIV.innerHTML += `
          <div class="shopObject">
            <img src="${product.bild}" alt="${product.name}" class="shopImg">
            <div class="shopDescription">
              <h3 class="description">${product.name}</h3>
              <p class="preis">${product.preis}</p>
            </div>
            <div class="shopButtons">
              <button class="verkaufen" onclick="verkaufen(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-dash" viewBox="0 0 16 16">
                  <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
              </button>
              <button class="kaufen" onclick="kaufen(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
              </button>
            </div>
          </div>
        `;
    });
}

let guthaben = 400.00;
let totalSpende = 0.00;
let spendenBonusAusgeloest = false;
let rechnungTable = document.querySelector("#rechnungsTable");

function refreshGuthaben() {
    document.querySelector("#guthaben").innerHTML = guthaben.toFixed(2);
    // spendenbonus
    if (totalSpende >= 100.00 && !spendenBonusAusgeloest) {
        spendenBonusAusgeloest = true;
        window.alert("Yay, du hast 100€ in unserem Patenshop ausgegeben! Danke für deine Unterstützung!");
        // Konfetti
        confetti({
            particleCount: 250,
            spread: 360,
            startVelocity: 30,
            gravity: 0.3,
            ticks: 300,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#FFD700', '#FFC700', '#FFEC8B'] 
          });
          
        // dinge gold machen
        let productImages = document.querySelectorAll(".shopImg");
        productImages.forEach((productImage) => {
            productImage.classList.add("goldborder");
        });
        document.querySelector("#guthabenBereich").style.backgroundColor = "#d4af37";
        document.querySelector("#pGesamtPreis").style.backgroundColor = "#d4af37";
        document.querySelector("h1").style.color = "#d4af37";
    }
    //gesamtPreis aktualisieren
    document.querySelector("#gesamtPreis").innerHTML = (String(totalSpende.toFixed(2))).replace(",", ".") + "€";
}

function verkaufen(element) {
    // rechnung updaten
    let currShopObject = element.parentElement.parentElement;
    let description = currShopObject.querySelector(".description").innerText;
    let priceText = currShopObject.querySelector(".preis").innerText;
    let priceFloat = parseFloat(priceText.replace("€", "").replace(",", "."));

    let alrDefinedTR = rechnungTable.querySelector("#tr_" + description);
    if (alrDefinedTR) {
        totalSpende -= priceFloat;
        trAnzahl = parseInt(alrDefinedTR.children[0].innerText);
        if (trAnzahl == 1) {
            alrDefinedTR.remove();
        }
        else {
            // Anzahl verringern
            trAnzahl--;
            alrDefinedTR.children[0].innerHTML = trAnzahl;
            // Preis verringern
            trPreis = parseFloat(alrDefinedTR.children[2].innerText.replace("€", "").replace(",", "."));
            trPreis -= priceFloat;
            trFormattedPreis = (String(trPreis.toFixed(2))).replace(".", ",") + "€";
            alrDefinedTR.children[2].innerHTML = trFormattedPreis;
        }

        // Guthaben erhöhen
        guthaben += priceFloat;
        refreshGuthaben();
    }
    else {
        // row gibts garnicht
        window.alert("Du kannst nichts verkaufen, was du nicht besitzt!")
    }
}

function kaufen(element) {
    // variaben deklarieren
    let currShopObject = element.parentElement.parentElement;
    let description = currShopObject.querySelector(".description").innerText;
    let priceText = currShopObject.querySelector(".preis").innerText;
    let priceFloat = parseFloat(priceText.replace("€", "").replace(",", "."));

    // Abfrage, ob genug guthaben vorhanden
    if (guthaben < priceFloat) {
        window.alert("Du brauchst mehr Geld!");
        return;
    }
    totalSpende += priceFloat;

    // rechnung updaten
    let alrDefinedTR = rechnungTable.querySelector("#tr_" + description);
    if (alrDefinedTR) {
        // Anzahl erhöhen
        trAnzahl = parseInt(alrDefinedTR.children[0].innerText);
        trAnzahl++;
        alrDefinedTR.children[0].innerHTML = trAnzahl;
        // Preis erhöhen
        trPreis = parseFloat(alrDefinedTR.children[2].innerText.replace("€", "").replace(",", "."));
        trPreis += priceFloat;
        trFormattedPreis = (String(trPreis.toFixed(2))).replace(".", ",") + "€";
        alrDefinedTR.children[2].innerHTML = trFormattedPreis;
    }
    else {
        let neueZeile = document.createElement("tr");
        neueZeile.id = "tr_" + description;
        let zelleAnzahl = document.createElement("td");
        let zelleDescription = document.createElement("td");
        let zellePreis = document.createElement("td");
        zelleAnzahl.textContent = "1";
        zelleDescription.textContent = description;
        zellePreis.textContent = priceText;

        neueZeile.appendChild(zelleAnzahl);
        neueZeile.appendChild(zelleDescription);
        neueZeile.appendChild(zellePreis);

        rechnungTable.appendChild(neueZeile);
    }

    // Guthaben vermindern
    guthaben -= priceFloat;
    refreshGuthaben();
}



window.onload = function () {
    loadProducts();
    refreshGuthaben();
};
