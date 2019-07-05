// ***Functions

function factorialFn(entNum) {
  return (entNum * factorial(entNum - 1));
}
factorial(4);

// function isEven(entNum) {
//   if (entNum % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// isEven(4);

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
//
// var city = "paris";
// var capital = capitalize(city);

// function square(x) {
//   return (x * x);
// }
//
// square(12);

// function sayHello(name) {
//   console.log("Hello there, " + name);
// }
//
// sayHello("Matt");

// **Loops

// for (var i = 5; i <= 50; i++) {
//   if (i % 5 == 0 && i % 3 == 0) {
//     console.log(i);
//   }
// }

// for (var i = 300; i <= 333; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// for (var i = 10; i <= 40; i++) {
//   if (i % 2 == 0) {
//       console.log(i);
//   }
// }

// for (var i = -10; i <= 19; i++) {
//   console.log(i);
// }

// var str = "ashdlkfjahsdjklfg"
// for (var i = 1; i < str.length; i+=2) {
//   console.log(str[i]);
// }
//
// for (var i = 0; i < 16; i+=8) {
//   console.log(i);
// }

// for (var i = 0; i < 6; i++) {
//   console.log(i);
// }

// var annoy = prompt("Are we there yet?");
// while (annoy.indexOf("yes") === -1) {
//
// while (annoy !== "Yeah" && annoy !== "Yes" && ) {
//   var annoy = prompt("Are we there yet?");
// }
//
// alert("Yay, we made it!");
// var num = 5
// while (num < 51) {
//   if ((num) % 5 == 0 && (num) % 3 == 0) {
//     console.log(num);
//   }
//   num++;
// }

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
