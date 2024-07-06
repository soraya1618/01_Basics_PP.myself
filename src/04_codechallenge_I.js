
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

/********* Variante 1 **********/
// Vorteil: gute lesbarkeit | aber viele Variablen 

let ziffer1, ziffer2, Zahl1, Zahl2,summe;

ziffer1 = prompt("Bitte Zahl 1 eingeben:"); 
ziffer2 = prompt("Bitte Zahl 2 eingeben:");

 console.log("Datentyp: " + typeof ziffer1);
 console.log("Datentyp: " + typeof ziffer2);

//  console.log(ziffer1 + ziffer2); --> ziffer gibt Text mit string als Datentyp

// Typkonvertierung 1: ziffer --> Zahl (mit Nachkomma)
Zahl1 = parseFloat(ziffer1);
Zahl2 = parseFloat(ziffer2);


console.log("Datentyp: " + typeof Zahl1);
console.log("Datentyp: " + typeof Zahl2);


summe = Zahl1 + Zahl2;
console.log("Die Summe der Zahlen ist: " + summe);

