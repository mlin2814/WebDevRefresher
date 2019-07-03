// **Loops

var num = 5
while (num < 51) {
  if ((num) % 5 == 0 && (num) % 3 == 0) {
    console.log(num);
  }
  num++;
}

// var num = 300;
// while (num < 334) {
//   if ((num) % 2 == 1) {
//     console.log(num);
//   }
//   num++;
// }

// var num = 10;
// while (num < 41) {
//   if ((num) % 2 == 0) {
//       console.log(num);
//   }
//   num++;
// }

// var num = -10;
// while (num < 20) {
//   console.log(num);
//   num++;
// }

// var num = 100;
// while (num < 150) {
//   console.log(num + 1);
//   num--;
// }
// var num = 1;
// while (num <= 20) {
//   if (num % 4 === 0) {
//     console.log(num);
//   }
//   num++
// }
// while (num <= 10) {
//    console.log(num);
//    num +=2;
//  }

// var str = "hello";
// var count = 0;
//
// while (count < str.length) {
//   console.log(str[count]);
//   count++
// }

// var count = 1;
// while (count < 6) {
//   console.log(count);
//   count++;
// }

// **Conditional logic**
// var secretNum = 4;
//
// var guess = Number(prompt("Guess a number"));
//
// if (guess === secretNum) {
//   console.log("You're right!");
// } else if (guess > secretNum) {
//   console.log("Too high! Get off the pipe!");
// } else {
//   console.log("Sorry, try again!");
// }

// var userAge = prompt("What is your age?");
//
// if (userAge < 18 && userAge > 0) {
//   console.log("You're underage, get out!");
// } else if (userAge < 21 && userAge > 18) {
//   console.log("You can enter, but no drinking!");
// } else if (userAge <= 0) {
//   console.log("Error! Breach in the time continuum!");
// } else if (userAge == 21) {
//   console.log("Happy 21st birthday!");
// } else if ((userAge)%2 == 1) {
//   console.log("Your age is odd");
// } else {
//   console.log("Come on in!");
// }

// **Prompts and concatenation
// var userFirstName = prompt("What is your first name?");
// var userLastName = prompt("What is your last name?");
// var userAge = prompt("What is your age?");
//
// console.log("Nice to meet you, " + userFirstName + " " + userLastName + ". You're " + userAge + " years old, yes?");


// var userName = prompt("What is your name?");
// console.log("Nice to meet you, " + userName);
