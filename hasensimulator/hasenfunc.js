
let fibonacciPrev = 0;
let fibonacciCurr = 1;
let monthsofYear = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
let monthNum = 0;

function showMonth() {
    monthNum++;
    ausgabe = " Jahr "+(Math.floor(monthNum/12)+1)+" - ";
    ausgabe += monthsofYear[monthNum%12];
    document.querySelector("#hasenMonat").innerHTML= ausgabe;
    
}

function showHasen(hasenNum) {
    document.querySelector("#hasenText").innerHTML="Aktuell "+hasenNum+" Hasenpaar(e).";

    let sHasen = "";
    if (hasenNum > 20000) {
        sHasen = '<div class="hasenPaar"><span class="haseEins">&#128007;</span>&#128007;</div><p>Das werden langsam zu viele Hasen zum Anzeigen!';
    }
    else {
        for(i = 0; i<hasenNum; i++) {
            sHasen += '<span class="hasenPaar"><span class="haseEins">&#128007;</span><span class="smolHeart">&#x2764;&#xFE0F;</span>&#128007;</span>';
        }
    }   
    document.querySelector("#hasenanzeige").innerHTML="<p>"+sHasen+"</p>";
}

function calcHasen() {
    let fibonacciNext=fibonacciPrev+fibonacciCurr; // Berechnung fibonacci
    fibonacciPrev = fibonacciCurr;  // weiterschieben des previous
    fibonacciCurr = fibonacciNext;  // und current

    return fibonacciNext;
}

function hasensimulator() {
    showMonth();
    showHasen(calcHasen());
}