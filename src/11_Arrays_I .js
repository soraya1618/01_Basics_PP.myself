
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */
/*** 02. Theorie: Array */ 

// let arr;
// arr = new Array(); //Konstruktor
//// arr =[]; // Literal
// arr = [2,11,7,8,12];


// output(arr);
// output(arr.length); // Anzahl der Elemente
// output(arr[0]); //  index 0 (1. POs. im Array ) (*Index ist zeiger und zeigt erste element:2*)
// output (arr[arr.length-1])



/********* Überlegungen - Transponierung **********/

/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1; // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 2 + 1
// output("inhalt von a: " + a);

/* Besser: mit FOR-Schleife */

// let a = 0; // Anfangswert
// for (let i = 0; i < 10; i++) {
  
// //  a = a + 1
//    a += 1; 
//    output("inhalt von a: " + a);
// }


/*
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Verkettung eines Strings // Transponierung
*/

// let str = ""; // Anfangswert
// for (let i = 0; i < 10; i++) {
//    str += "Test" + " "; // a = a + 1
//    output(str);
// }







/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
//output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
// function getSentence(word1,word2,word3,word4,word5,word6) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   word1 + GAP +
//                 word2 + GAP +
//                 word3 + GAP +
//                 word4 + GAP +
//                 word5 + GAP +
//                 word6 +
//                 PUNCT;

//     return str;
// }




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
// function output(outputStr) {
    // console.log(outputStr);
// }

/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem
// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
// function getSentenceArr(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   arr[0] + GAP +
//                 arr[1] + GAP +
//                 arr[2] + GAP +
//                 arr[3] + GAP +
//                 arr[4] + GAP +
//                 arr[5] + 
//                 PUNCT;

//     return str;
// }

/* 02a. Theorie: Schleifen (for-schleife) */
/* For -Schleifen als allg. Wiederholungs-Struktur */
//for (let index = 0; index < array.length; index++) {
    // const element = array[index];
    
// }
// Inkrement (untere Grenze --> obere Grenze)
//for (let i = 0; i < 5; i++) // i--> schleifen-Index
// {
//  output(i);   
// //

// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--) {
//    output(i);   
// }

// Inkrement (var. Schrittweite)
// for (let i = 10; i <= 100; i += 5) 
// {
//    output(i);   
// }


// function output(outputData) {
//     console.log(outputData);
// }

/* 02b. For-Schleife für Array-Index (Iteration)*/

// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
// for (let i = 0; i < arr.length; i++) 
// {
//    output(i); // interner Index
//    output(arr[i]); // Mapping intern ---> extern
// }

/* 02b. For-Schleife für Array-Index (Iteration)*/

// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
// for (let i = 0; i < arr.length; i++) 
// {
// //    output(i); 
//    output(arr[i]);
// }


/*** 01b. Funktionalität mit Array 2  */
// Transponierung:  untereinander ---> nebeneinander
// Helge Schneider: Anananandereihung ...


output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = "";


    // for (let i = 0; i < 10; i++) {
    //     str += "Test" + " "; // a = a + 1
    //     output(str);
    //  }

     for (let i = 0; i < arr.length; i++) {
        if (i != arr.length - 1){  // wenn du noch nich am Ende des Arrays bist ...
            str += arr [i] + GAP; //ebtweder
        } else {
            str += arr [i] + PUNCT; // oder
        }





        // str += arr [i] + GAP; // a = a + 1
        // str += arr []
        
        // output(str);


     }
     
    //  return str + PUNCT;
        return str ;
}
   

//     for (let i = 0; i < arr.length; i++) 
//     {

//             output(arr[i]);
//     }
       
       
//     return str;
// }





// Modul: Ausgabe in Konsole : Test
// output("hi"); 

function output(outputData) {
    console.log(outputData);
}
	
