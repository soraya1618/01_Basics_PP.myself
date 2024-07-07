
/* Berechnung Alter */

// Deklaration
// let ageJohn, ageMark;
// const birthYearJohn = 1980;
// const birthYearMark = 1990;

// // Berechnung Alter
// let year = 2024;
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);

// Deklaration + Assignment
const ageJohn = 20;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);


// if(true)
// if(ageJohn > ageMark)
//     {
//        console.log("John ist älter.");
//     }

// else
//     {
//        console.log("John ist jünger.");
//     }


console.log((isJohnOlder) ? "ja,John ist älter" : "nein,John ist jünger");


const cond = true;
const value = 10;

switch (cond) {

    case (value == 10):
        console.log("Value hat den Wert 10.");
    case ("aref"):
        console.log("Value hat den Wert aref.");
        break;

    default:
        console.log("Value hat einen anderen Wert.");
        break;
}