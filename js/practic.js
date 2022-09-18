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


// let userLogin = prompt("plese enter your login");

// console.log(userLogin);

// if (userLogin === "" || userLogin === null) {
//     alert('Canceled');
// } else if (userLogin.length < 4) {
//     let message = `I don't know any users having name length less than 4 symbols`;
//     alert(message);
// } else if (userLogin === "User" || userLogin === "Admin") {
    
//     let userPassword = prompt("Please enter your pasword");
//     if (userPassword === "" || !userPassword) {
//         alert('Canceled');
//     } else if (userLogin === "User" && userPassword === "UserPass") {
//         console.log('user come in');
//     } else if (userLogin === "Admin" && userPassword === "RootPass") {
//         console.log('admin come in');
//     } else {
//         alert('Wrong password');
//     }
//        }
// else {
//     let message = `I don’t know you`;
//     alert(message);
// }


// if (userLogin === "User") {
//             const hours = new Date().getHours();
// console.log(hours);
//     if (hours > 5 && hours < 20) {

//     alert('Good day, dear User!');
// } else {
//    alert('Good evening, dear User!');
//     }

// }

// if (userLogin === "Admin") {
//             const hours = new Date().getHours();
// console.log(hours);
//     if (hours > 5 && hours < 20) {
//         alert('Good day, dear Admin!');
//     }
//     else {
//         alert('Good evening, dear Admin!');
//     }
// }





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

// practic 30.07.22

// const users = [
//     {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
// {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
// {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },

// ]
// let newObject = {};
// const newKeys = Object.keys(users[0]);
// const newValues = Object.values(users[0]);
// // console.log(newValues);
// // console.log(newKeys);
// // newObject = { ...newKeys };
// for (const key of newKeys) {
//     newObject[key] = [];
//     // console.log(key);
   
// }
// // console.log(newObject);
// for (const key in newObject) {
//     // console.log(key);
//     for (const user of users) {
//         // console.log(user[key]);
//         if (Array.isArray(user[key])) {
//             newObject[key].push(...user[key]);
//         } else {
//            newObject[key].push(user[key]);
//        }
       
//     }
     
// }

// console.log(newObject);


// task 2
// Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.

// const convert = (...args) =>
//     args.map(arg =>
//         typeof arg === 'string' ? Number(arg) : String(arg)
// );

// console.log(convert('1', 2, 3, '4'));
// convert('1', 2, 3, '4') // [1, '2', '3', 4]

// task 3

// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition. But you must calculate only positive numbers and omit negative if any presents.
// const positiveSum = (array) =>
//     array.filter(value => value >= 0)
//         .reduce((total, number) =>
//         total + number
//     , 0)


// // For example:
// console.log(positiveSum([2, 4, 6, 8]))  // => 20
// console.log(positiveSum([0, -3, 5, 7]))  // => 12


// 13.08
// task 1
// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0

// function letterCount(string, letter) {
//   const  normalizeString = string.toLowerCase()
//     const arrayString = normalizeString.split("")
//         .filter((oneLetter) => letter === oneLetter).length;
//     console.log(arrayString);
//     return arrayString;
//         }

// letterCount("Maggy", "g");
// letterCount("", "z");

// var 2
// function letterCount(string, letter) {
//     const normalizeString = string.toLowerCase()
//     const arrayString = normalizeString.split("")
//         .reduce((totalLetter, oneLetter) => {
//             if (letter === oneLetter) {
//             totalLetter += 1;
//         }
            
//             return totalLetter
            
//         , 0);
//     console.log(arrayString);

// }

// letterCount("Maggy", "g");
// letterCount("Barry", "b"); // => 1
// letterCount("", "z"); // => 0

// function letterCount(string, letter) {
//   const normolizeString = string.toLowerCase();
//   const arrayString = normolizeString
//     .split("")
//     .reduce((totalLetter, oneLetter) => {
//       return letter === oneLetter ? totalLetter += 1 : totalLetter;
//     }, 0);
//   console.log(arrayString);
// };

// task 2
// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]
 
// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// • if x > y   - 3 points
// • if x < y   - 0 point
// • if x = y   - 1 point
 
// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12


// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]
 
// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// • if x > y   - 3 points
// • if x < y   - 0 point
// • if x = y   - 1 point
 
// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12

// function countPoints(array = []) {
  
//     const newArray = (array.map(element => (element.split(":"))));
//     let total = 0;
//     for (let number of newArray) {
        
//         if (number[0] > number[1]) {
//             total += 3;
            
//         } else if(number[0] === number[1]) {
//             total += 1;
//             }
//        }
//     // console.log(newArray);
//     console.log(total);
// return total;
// }
    
// var 2
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0'])
// function countPoints(array = []) {
  
// //     const newTotal = (array.map(element => (element.split(":")))).reduce((total, number) => {
// // if (number[0] > number[1]) {
// //             total += 3;
// //     // console.log(total);
// //         } else if(number[0] === number[1]) {
// //             total += 1;
// //         }
// //         return total;
// //     }, 0)
// //     console.log(newTotal);
// //     return newTotal;
// // }
// var 3
// function countPoints(array = []) {
  
//     const newTotal = (array.map(element => (element.split(":"))))
//         .filter(number => number[0] > number[1]);
//     const secondTotal = (array.map(element => (element.split(":"))))
//         .filter(number => number[0] === number[1]);
//     const total = newTotal.length * 3 + secondTotal.length;
//     console.log(total);
    
// }

// task3
// function getSums(array = []) {
//     let total = 0;
//     let newArray = [];
//     for (let arr of array) {
//         total += arr;
//         newArray.push(total);
//     }
//     console.log(newArray);
//     return newArray;
// }
// getSums([1, 2, 3, 4, 5]);//[1, 3, 6, 10, 15]

// var 2
// function getSums(array = []) {
//     const newArray = array.reduce((total, arr, index) => {
//         if (index === 0) {
//             total.push(arr);
//             return total;
//         } else {
//             total[index] = total[index - 1] + arr;
//             return total;
//         }
//         console.log(total);
//     },[])
//     console.log(newArray);
// }

// var 3
// function getSums(array = []) {
	
// 	const newArray = array.reduce((total, arr, index) => {
// 		return index === 0 ? [arr] : [...total, total[index - 1] + arr];
// 		// console.log(total);
// 	}, []);
// 	console.log(newArray);
// }
// getSums([1, 2, 3, 4, 5]); // [1, 3, 6, 10, 15]


// 27.08

// task 1
const books = [{
    id: "1",
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
},
  
  {
    id: "2",
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
  },
{
    id: "3",
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
  },

]

const rootEl = document.querySelector('#root');
const firstDiv = document.createElement('div');
const secondDiv = document.createElement('div');
firstDiv.classList.add('firstDiv');
secondDiv.classList.add('secondDiv');

rootEl.append(firstDiv, secondDiv);

const headingEl = document.createElement('h1');
headingEl.textContent = 'Library';
const ulEl = document.createElement('ul');

const btnEl = document.createElement('button');
btnEl.textContent = 'Add';
btnEl.setAttribute("type", "button");


firstDiv.append(headingEl, ulEl, btnEl);


function renderList() {
  const bookTitle = books.map(({ title, id }) => {
  return `<li id='${id}'><p>${title}</p>
    <button class='edit'>edit</button>
    <button class='delete'>delete</button>
</li> 
       `
    }).join('');
    ulEl.insertAdjacentHTML('beforeend', bookTitle);
    const titleEl = document.querySelectorAll('p');

    titleEl.forEach(element => {
        element.addEventListener('click', renderPreview);
    });
   
    const btnEdit = document.querySelectorAll('.edit');
    const btnDelete = document.querySelectorAll('.delete');
    btnEdit.forEach((element) => {
        element.addEventListener('click', renderEdit);
    })
     btnDelete.forEach((element) => {
        element.addEventListener('click', renderDelete);
    })
}
renderList();
function renderEdit(event) {
    const bookId = event.target.parentNode.id
    console.log(bookId);
    console.log('edit');
}
function renderDelete(event) {
      const bookId = event.target.parentNode.id
    console.log(bookId);
    console.log('delete');
}

function renderPreview(event) {
    const titleTC = event.target.textContent;
    console.log(titleTC);
    
 const titleObj = books.find(options => options.title === titleTC);
    console.log(titleObj);
    const markUp = createPreviewMarkUp(titleObj);
    secondDiv.insertAdjacentHTML('beforeend', markUp);
}

function createPreviewMarkUp({ title, author, img, plot }) {
 const oneBook = `<div>
    <h2>${title}</h2>
    <p>${author}</p>
    <img src="${img}" alt="" />
    <p>${plot}</p>
</div>`     
      
    return oneBook;
}



