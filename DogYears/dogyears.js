//variable for my age
const myAge = 32;
//changeable variable for early years
let earlyYears = 2;
earlyYears = (earlyYears *= 5);
//myAge minus 2, value changeable
let laterYears = (myAge - 2 );
//calculate number of dog years accounted for by your later years
laterYears = (laterYears *= 4);
console.log(earlyYears);
console.log(laterYears);
//adding early years and later years, store in a variable named my age in dog years
let myAgeInDogYears = (earlyYears + laterYears);
//Write your name as a string but return all as lowercase letters
let myName = 'Romina'.toLowerCase();
//print my name with human age and dog age in a sentence
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
