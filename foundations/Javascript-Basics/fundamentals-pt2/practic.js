// Length property returns the length of a string

let txt = 'The Rising will not stop with me Roque. I am just the figure of a tide.';
let lengthnum = txt.length;
console.log(lengthnum)

// slice() extracts part of a string and returns the extracted part in a new string.
// It takes 2 parameters: the start positions, and the end position (end not included).

let str = 'Apples, Bananas, Watermelon';
let part = str.slice(8,15);
console.log(part)

// If the parameter is negative, the position is counted from the end of the string.

let str2 = "Apples, Bananas, Watermelons";
let part2 = str2.slice(-20,-13);
console.log(part2);

//substring() is similar to slice() but the start and end values less than 0 are treated as 0.
let str3 = "Ragnar, Darrow, Pax, Sevro";
let part3 = str3.substring(-3,14);
console.log(part3);

//substr() is similar to slice but the second parameter specifies the length of the extracted part.
let str4 = "Ragnar, Darrow, Reaper, Lionheart";
let part4 = str4.substr(8,6);
console.log(part4);

// replace() methods returns a new string by replacing a specified value from another string.

let text = "Please find my son Holiday.";
let newtext = text.replace('find','help');
console.log(text);
console.log(newtext);

// to replace all matches, use a regular expression with a /g
let text2 = 'help help help';
let newtext2 = text2.replace(/help/g, 'die');
console.log(text2);
console.log(newtext2);


// First code with button

const button = document.querySelector('button');

const hour = new Date().getHours();

let greeting;
    if (hour < 10) {
        greeting = "Good morning";
      } else if (hour < 20) {
        greeting = "Good day";
      } else {
        greeting = "Good evening";
      }
function greet() {
    const name = prompt('What is your name?');
    alert(`${greeting} ${name}, nice to see you!`);
}

button.addEventListener('click', greet);

// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
const day = new Date().getDay();

switch (day) {
	case 0:
		console.log("It's Sunday, time to relax!");
		break;
	case 1:
		console.log("Happy Monday!");
		break;
	case 2:
		console.log("It's Tuesday. You got this!");
		break;
	case 3:
		console.log("Hump day already!");
		break;
	case 4:
		console.log("Just one more day 'til the weekend!");
		break;
	case 5:
		console.log("Happy Friday!");
		break;
	case 6:
		console.log("Have a wonderful Saturday!");
		break;
	default:
		console.log("Something went horribly wrong...");
}

//Grade evaluator

const grade = prompt('What was the grade?', '');

switch (true) {
  case grade > 100:
    console.log('You are too powerful for this world and must be stopped!');
    break;
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log('B');
    break;
  case grade >= 70:
    console.log('C');
    break;
  case grade >= 60:
    console.log('D');
    break;
  case grade < 60:
    console.log('F');
    break;
  default:
    console.log('This is weird....')
}