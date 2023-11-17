// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//     il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     va applicato uno sconto del 20% per i minorenni
//     va applicato uno sconto del 40% per gli over 65. 

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

let risultato = "";

// Chiediamo a User numero chilometri che vuole percorrere
const userKm = parseInt(prompt("Quanti chilometri vorresti percorrere?"));

console.log("Numero chilometri scelti: ", userKm, 'km');

// Chiediamo a User la sua età
const userEta = parseInt(prompt("Quanti anni hai?"));

console.log(`Età: ${userEta} anni`);

// Calcoliamo il prezzo del biglietto in base ai km
const ticketPrice = userKm * 0.21;

console.log(`Il prezzo del biglietto in base ai chilometri selezionati è di: ${ticketPrice}€`);

// Analizziamo se il cliente è minorenne o over 65
if (userEta < 18) {
    console.log("Sei minorenne! Hai accesso ad uno sconto del 20% sul prezzo del biglietto!");
} else if (userEta >= 65) {
    console.log("Sei un over 65! Hai accesso ad uno sconto del 40% sul prezzo del biglietto!");
}

// Applichiamo uno sconto del 20% per i minorenni + Applichiamo uno sconto del 40% per gli over 65
if (userEta < 18) {
    risultato = ticketPrice - [(ticketPrice / 100) * 20];
} else if (userEta >= 65) {
    risultato = ticketPrice - [(ticketPrice / 100) * 40];
} else {
    risultato = ticketPrice
}

console.log(`Il prezzo del biglietto con eventuale sconto applicato è quindi di: ${risultato.toFixed(2)}€`);

// Output prezzo finale con massimo due decimali
document.getElementById("mio_id").innerHTML = `Cifra finale da corrispondere per il biglietto: ${risultato.toFixed(2)}€`;

document.getElementById("tuo_id").innerHTML = "Grazie e buon viaggio!";