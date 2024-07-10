/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */
/** 02. Theorie: Array */

let arr;
arr = [2,11,7,8,10]

output(arr);

/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//output(getSentence("Ich","bin","Max","Mütze"));
//output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 + 
                PUNCT;

    return str;
}


function output(outputstr)
{
    console.log(outputstr);
}