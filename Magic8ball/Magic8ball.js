//input your name 
let userName = 'Berry';
userName ? console.log(`Hello, ${userName}!`) 
  :console.log('Hello!');
//input your question
const userQuestion = 'Should I walk outside this afternoon?';
console.log(`Your question: "${userQuestion}" has been asked. Alright, be ready ${userName} `)

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 1:
  eightBall = 'It is certain';
  break;
  case 2:
  eightBall = 'It is decidedly so';
  break;
  case 3:
  eightBall = 'Reply hazy try again';
  break;
  case 4:
  eightBall = 'Cannot predict now';
  break;
  case 5:
  eightBall = 'Do not count on it';
  break;
  case 6:
  eightBall = 'My sources say no';
  break;
  case 7:
  eightBall = 'Outlook not so good';
  break;
  case 8:
  eightBall = 'Signs point to yes';
  break;
  default:
  eightBall = 'Please try again later';
  break;
}

console.log(`The 8 ball thought about your question, ${userName} and says: "${eightBall}"`)
