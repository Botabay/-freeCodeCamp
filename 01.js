// a,b must be defined before using of their

/*
   let a,b;
   a=1;
   b=a+2;
   console.log(a,b)
*/

// var a=9;

// //Declare String Variables
// var myFirstName='MyName', myLastName='MyLastName';


//Uninitialized Variables
// Only change code below this line
// var a=5;
// var b=10;
// var c="I am a";
// // Only change code above this line

// a = a + 1;
// b = b + 5;
// c = c + " String!";

// //camalCase
// // Variable declarations
// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;

// // Variable assignments
// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;

// //replaced var by let
// let catName = "Oliver";
// let catSound = "Meow!";

// //using let and const
// const FCC = "freeCodeCamp"; // Change this line
// let fact = "is cool!"; // Change this line
// fact = "is awesome!";
// console.log(FCC, fact); // Change this line

// //Add Two Numbers with JavaScript
// const sum = 10 + 10;

// //Subtract One Number from Another with JavaScript
// const difference = 45 -33;

// //Multiplied Two Numbers with JavaScript
// const product = 8 * 10;

// //Divide One Number by Another with JavaScript
// const quotient = 66 / 33;

// //Increment a Number with JavaScript
// let myVar = 87;
// // Only change code below this line
// myVar++;

// //decrement a Number with JavaScript
// let myVar = 87;
// // Only change code below this line
// myVar--;

// const ourDecimal = 5.7;
// // Only change code below this line
// let myDecimal=5.7;

//const product = 2.0 * 2.5;

// const quotient = 4.4 / 2.0; // Change this line

//const remainder = 11%3;

// //Compound Assignment With Augmented Addition
// let a = 3;
// let b = 17;
// let c = 12;
// // Only change code below this line
// a += 12;
// b += 9 ;
// c += 7;

// //Compound Assignment With Augmented Subtraction
// let a = 11;
// let b = 9;
// let c = 3;
// // Only change code below this line
// a -=  6;
// b -=  15;
// c -=  1;

// //Compound Assignment With Augmented Multiplication
// let a = 5;
// let b = 12;
// let c = 4.6;
// // Only change code below this line
// a *= 5;
// b *= 3;
// c *= 10;

// //Compound Assignment With Augmented Division
// let a = 48;
// let b = 108;
// let c = 33;
// // Only change code below this line
// a /= 12;
// b /= 4;
// c /= 11;

//Escaping Literal Quotes in Strings
//const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// //Quoting Strings with Single Quotes
// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// //using length of string
// // Setup
// let lastNameLength = 0;
// const lastName = "Lovelace";
// // Only change code below this line
// lastNameLength = lastName.length;

// //created function of sum
// function functionWithArgs(a,b){console.log(a+b)}
// functionWithArgs(1,2)

// created function of multiply
// function timesFive(x){
//    return x*5;
// }

// function caseInSwitch(val) {
//    let answer = "";
//    // Only change code below this line
//    switch(val){
//      case 1: return 'alpha';
//              break;
//      case 2: return 'beta'
//              break;
//      case 3: return 'gamma'
//              break;
//      case 4: return 'delta'
//    } 
//    // Only change code above this line
//    return answer;
//  } 
//  caseInSwitch(1);

// function chainToSwitch(val) {
//    let answer = "";
//    // Only change code below this line
//    switch(val){
//    case "bob": answer = "Marley";
//      break;
//    case 42: answer = "The Answer";
//      break;
//    case 1: answer = "There is no #1";
//      break;
//    case 99: answer = "Missed me by this much!";
//      break;
//    case 7: answer = "Ate Nine";
//    }
//    // Only change code above this line
//    return answer;} 
//  chainToSwitch(7);

// function isLess(a, b) {
//    // Only change code below this line
//    return (a < b)
//    // Only change code above this line
//  }
//  isLess(10, 15);

// //Return Early Pattern for Functions
// // Setup
// function abTest(a, b) {
//    // Only change code below this line
//    if (a<0 || b<0) return undefined; 
//    // Only change code above this line 
//    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
//  } 
//  abTest(2,2);

//Counting Cards
let count = 0;
function cc(card) {
   // Only change code below this line
   card = +card;
   if (card < 7){count++; return count > 0 ?  count + " Bet" : count + ' Hold';};
   if (card < 10){return count>0 ? count+" Bet":count+' Hold';};
   count--;
   return count > 0 ? count + " Bet": count+' Hold';
   // Only change code above this line
 } 
 cc(2); cc(3); cc(7); cc('K'); cc('A');