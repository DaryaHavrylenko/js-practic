"use strict"
// практика 16.07

// задача1
// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check sum. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3. For an empty string or cancelled input, show “Canceled.”
// 4.	You need to validate the input data: both values should be numbers, check sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.	You need to calculate tip amount and total sum to pay.
// 7.	Show message: (example). Use ”alert” function
// Check number: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230

// const checkSum = prompt('Please enter check sum');
// console.log(checkSum);
// const tipPercentage = prompt('please enter tip percent');
// if (checkSum === "" || checkSum === null || tipPercentage === "" || tipPercentage === null) {
//     alert('Canceled');
// } else {
//     const parseCheckSum = Number.parseFloat(checkSum);
//     const parseTipPercentage = Number.parseFloat(tipPercentage);
//     if (parseCheckSum <= 0 || parseTipPercentage < 0 || parseTipPercentage > 100 || Number.isNaN(parseCheckSum) || Number.isNaN(parseTipPercentage)) {
//         alert("Invalid input data");
//     } else {
//         const tipSum = (parseTipPercentage / 100) * parseCheckSum;
//         const totalSum = parseCheckSum + tipSum;
//         const message = `Check sum: ${parseCheckSum} Tip: ${parseTipPercentage}% Tip amount: ${tipSum.toFixed(2)} Total sum to pay:${totalSum.toFixed(2)}`;
//         alert(message);
//     }
// }

// задача2
// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

// const word = prompt("input a word please");

// if (word.trim() === "" || word === null) {
//     alert("Invalid value");
// } else {
//     if (word.length % 2 === 0) {
//         const lengthWord = word.length / 2;
//         console.log(word.slice(lengthWord - 1, lengthWord + 1));
//     } else {
//         const lengthWord = word.length / 2;
//         console.log(word.slice(lengthWord, lengthWord + 1));
//     }
// }

// задача3
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// Result: ["a", "b", "c", 0, 1, 2, 3];

// var1
// const d = b.flat();
// console.log(d);

// const e = a.concat(d);
// console.log(e);

// const f = e.splice(3, 0, c);
// console.log(e);
 
// var2
// const d = [b[0]].concat(b[1]);
// console.log(d);
// console.log(a.concat(c, d));

// task4
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// var1
// const b = a.splice(3, 3);
// console.log(a);
// const d = a.splice(3, 0, "a", "b", "c");
// console.log(a);


// var2

// const b = a.splice(3, 3, 'a', 'b', 'c');
// console.log(a, b);

// var3
// console.log(a.copyWithin(3, 0, 3));



// HW
// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!


let userLogin = prompt("plese enter your login");

console.log(userLogin);

if (userLogin === "" || userLogin === null) {
    alert('Canceled');
} else if (userLogin.length < 4) {
    let message = `I don't know any users having name length less than 4 symbols`;
    alert(message);
} else if (userLogin.toLowerCase() === "User".toLowerCase() || userLogin.toLowerCase() === "Admin".toLowerCase()) {
    
    let userPassword = prompt("Please enter your pasword");
    if (userPassword === "" || !userPassword) {
        alert('Canceled');
    } else if (userLogin.toLowerCase() === "User".toLowerCase() && userPassword === "UserPass") {
        console.log('user come in');
    } else if (userLogin.toLowerCase() === "Admin".toLowerCase() && userPassword === "RootPass") {
        console.log('admin come in');
    } else {
        alert('Wrong password');
    }
       }
else {
    let message = `I don’t know you`;
    alert(message);
}


if (userLogin.toLowerCase() === "User".toLowerCase()) {
            const hours = new Date().getHours();
console.log(hours);
    if (hours > 5 && hours < 20) {

    alert('Good day, dear User!');
} else {
   alert('Good evening, dear User!');
    }

}

if (userLogin.toLowerCase() === "Admin".toLowerCase()) {
            const hours = new Date().getHours();
console.log(hours);
    if (hours > 5 && hours < 20) {
        alert('Good day, dear Admin!');
    }
    else {
        alert('Good evening, dear Admin!');
    }
}





// var by Valeri
// const userLogin = prompt('Please enter login');
// const hours = new Date().getHours();
// if (userLogin === '' || userLogin === null) {
//     alert('Canceled');
// }
// else if (userLogin.length < 4) {
//     alert("I don't know any users having name length less than 4 symbols");
// }
// else if (userLogin === 'User' || userLogin === 'Admin') {
//     const password = prompt('Please enter password')
//     if (password === '' || password === null) {
//         alert('Canceled');
//     }
//     else if (userLogin === 'User' && password === 'UserPass') {
//         if (hours > 5 && hours < 20) {
//             alert(`Good day, dear ${userLogin}!`);
//         }
//         else {
//             alert(`Good evening, dear ${userLogin}!`);
//         }
//     }
//     else if (userLogin === 'Admin' && password === 'RootPass') {
//         if (hours > 5 && hours < 20) {
//             alert(`Good day, dear ${userLogin}!`);
//         }
//         else {
//             alert(`Good evening, dear ${userLogin}!`);
//         }
//     }
//     else { alert('Wrong password'); }
// }
// else { alert("I don't know you"); }

