/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */


// INPUT
// chiedo all user di inserire la sua età e quanti KM deve fare
const eta = parseInt(prompt("inserisci la tua età"));
const km = parseInt(prompt("inserisci quanti Km devi fare"))
console.log("età utente:", eta);
console.log("Km da percorrere:", km);

// PREZZI BIGLIETTO
let tripPrice = (0.21 * km);

//condizioni per stabilire prezzo biglietto bambini e over65
if (eta < 18) {
     tripPrice = tripPrice - ((tripPrice * 20 / 100));
} else if (eta >= 65) { 
     tripPrice = tripPrice - ((tripPrice * 40 / 100));
}

// PREZZO FINALE
console.log(tripPrice.toFixed(2));














