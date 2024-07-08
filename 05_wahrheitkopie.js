//let ageJohn, ageMark;//
const birthyearJohn = 1980;
const birthyearMark = 1990;

//let year = 2024;
//ageJohn= year - birthyearJohn;
//ageMark = year - birthyearMark;

let date = new Date();
//console.log("Datum: " + date);
// console.log("ageJohn:" + ageJohn);
 //console.log("ageMark: " + ageMark);


 let year = date.getFullYear();
 console.log("Datum: " + date);
console.log("Jahr " + year);

function getFullYear() {
    return "2023";
} 
let year2 = getFullYear(); 
console.log(year2);
 //const ageJohn = 20;
 //const ageMark = 30;

 //let istJohnolder, istJohnEqual;

 //istJohnolder = (ageJohn < ageMark);
// istJohnEqual = (ageJohn == ageMark);

//if(true)
//if(ageJohn > ageMark)
//{console.log("John ist älter.");

//}
//else{
   // console.log("John ist jünger.");
//} 

class MyDate {

    getFullYear(){
        return "2024";
    }
    getFullMonth()
    {
        return "Jan";
    }
    getFullDay()
    {
        return "07";
    }
}

let m_Date = new MyDate();

let m_year = m_Date.getFullYear();
console.log("My year is: " + m_year);