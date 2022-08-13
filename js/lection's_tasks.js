"use strict"

// lesson 1

// ## Example 1 - Базові математичні оператори

// Вивести на екран сумарну вартість товарів без знижок
// const apples = 47;
// const grapes = 135;
// const appleDiscount = 5;

// const totalNoDiscount = apples + grapes;
// console.log('totalNoDiscount', totalNoDiscount);

// // Вартість яблук з урахуванням знижки?
// const applesWithDiscount = apples - appleDiscount;
// console.log({ applesWithDiscount, totalNoDiscount });

// ## Example 2 - Комбіновані оператори

// let students = 100;
// students = students + 50
// students += 50;

// students = students - 50
// students -= 50;

// students = students * 2
// students *= 2;

// console.log('students', students);

// ## Example 3 - Пріорітет операторів

// const result = 10 + 200 - (2 < 10) * 5;

// // (2 < 10) = false a false * 5 - приводиться к числу, т.е = 5 (если бы было true - то true приводится к числу 1, т.е 5*1)
// // 10 + 200 - 5 = 205
// console.log({ result }); //205

// Написати скрипт, який буде виводити округлені вверх/вниз значення для
// змінної `value`. Math.floor(), Math.ceil(), Math.round()
// Що відбувається із значеннями 42.3, 42.5 і 42.9 ?

// const value1 = 42.3;
// const value2 = 42.5;
// const value3 = 42.9;

// console.log('Math.floor', 'Math.ceil', 'Math.round');
// console.log(Math.floor(value1), Math.ceil(value1), Math.round(value1));
// console.log(Math.floor(value2), Math.ceil(value2), Math.round(value2));
// console.log(Math.floor(value3), Math.ceil(value3), Math.round(value3));

// ## Example 5 - Шаблонні строки

// Вивести фразу `A has B bots in stock`, де A, B - надані змінні.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;

// const totalBots = repairBots + defenceBots;(можна не делать доп переменную)

// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ## Example 6 - Методи строк

// Написати скрипт що розрахує індекс маси тіла людини.
// Для цього потрібно: розділити вагу в кг на квадрат вистоти особи в метрах.

// Вага і зріст хранятся в змінних `weight` и `height`, але не як числа - строки.
// Дробні числа можуть бути задані у вигляді `xx.x` чи `xx,x` _(крапка vs кома)_

// Отримане значення необхідно округлити до десятих (до однієї цифри після коми)
// const weight = '88,3';
// const height = '1.75';
// const weightFixed = weight.replace(',', '.');
// const bmi = weightFixed / Math.pow(height, 2);
// console.log('bmi', bmi.toFixed(1)); // 28.8

// ## Example 7 - Оператори порівняння, приведення типів

// Які будуть результати виразів?

// console.log('5 > 4', 5 > 4);//true
// console.log("10 >= '7'", 10 >= '7');//true
// console.log('');
// console.log("'2' > '12'", '2' > '12');//true
// console.log("'2' < '12'", '2' < '12');//false
// console.log("'4' == 4", '4' == 4);//true
// console.log("'6' === 6", '6' === 6);//false
// console.log('');
// console.log("'false' === false", 'false' === false);//false
// console.log('1 == true', 1 == true);//true
// console.log("1 === true", 1 === true);//false
// console.log("'0' == false", '0' == false);//true
// console.log("'0' === false", '0' === false);//false
// console.log('');
// console.log("'Papaya' < 'papaya'", 'Papaya' < 'papaya');//true
// console.log("'Papaya' === 'papaya'", 'Papaya' === 'papaya');//false
// console.log('');
// console.log('undefined == null', undefined == null);//true
// console.log('undefined === null', undefined === null);//false
// console.log('NaN == null', NaN == null);//false
// console.log('NaN === null', NaN === null);//false
// console.log('NaN == NaN', NaN == NaN);//false
// console.log('NaN === NaN', NaN === NaN);//false
// console.log('isNaN', Number.isNaN(NaN));//false

// ## Example 8 - Логічні оператори

// Який буде результат?

// console.log('true && 3', true && 3);//3
// console.log('false && 3', false && 3);//false
// console.log("true && 4 && 'kiwi'", true && 4 && 'kiwi');//'kiwi'
// console.log("true && 0 && 'kiwi'", true && 0 && 'kiwi');//0
// console.log('true || 3', true || 3);//true
// console.log('true || 3 || 4', true || 3 || 4);//true
// console.log('true || false || 7', true || false || 7);//true
// console.log('null || 2 || undefined', null || 2 || undefined);//2
// console.log('(1 && null && 2) > 0', (1 && null && 2) > 0);//false
// console.log('null || (2 && 3) || 4', null || (2 && 3) || 4);//3

// ## Example 9 - Значення за замовчанням, нульове злиття

// Змінити код так, щоб в змінну `value` отримати значення із `incomingValue`,
// якщо воно НЕ `undefined` чи `null`.
// Інакше, там має опинитись значення із `defaultValue`.
// Перевірити на значеннях `incomingValue`: null, undefined, 0, false.
// Используй оператор `??` (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;

// const incomingValue = 0;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue; (оператор нульового поглинання(??), якщо хочемо залишити нуль і далі з ним працювати)
// console.log({ value });
// const value = incomingValue || defaultValue;
// console.log({ value });

// ## Example 10 - Опертор % і методи строк

// Створити скрипт який переведе значення `totalMinutes` (кількість хвилин) в
// строку в форматі 'години:хвилини': `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// const totalMinutes = 450;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// 4 / 2 = 2
// console.log('4 / 3', 4 / 3)
// console.log('4 % 3', 4 % 3)

// console.log(hours);
// console.log(minutes);

// // '123'.padStart(2, 0) => '123'
// // '1'.padStart(2, 0) => '01'

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);

// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// lesson 2

// ## Example 1 - Запрос даних від користувача. if-else

// Написати код який запитає у користувача: 'Який ваш улюблений фільм Тарантіно?'
// Якщо відповідь "Pulp Fiction" - показати текст 'Вітаю фанатів класики!',
//  інакше - 'Передивіться Pulp Fiction!'
// Використайте prompt, alert
// Бажано щоб введена строка перевірялась незалежно від регістра літер(case-insensitive)

//
// const movieName = prompt('Який ваш улюблений фільм Тарантіно?');
// if (movieName.toLowerCase() === 'Pulp Fiction'.toLowerCase()) {
//   alert('Вітаю фанатів класики!');
// } else {
//   alert('Передивіться Pulp Fiction!');
// }

// default alert
// let response = 'Передивіться Pulp Fiction!';
// if (movieName.toLowerCase() === 'Pulp Fiction'.toLowerCase()) {
//   response = 'Вітаю фанатів класики!';
// }
// alert(response);

// ternary
// let response = movieName.toLowerCase() === 'Pulp Fiction'.toLowerCase()
//     ? 'Вітаю фанатів класики!'
//     : 'Передивіться Pulp Fiction!'

// ## Example 2 - prompt, alert, console, вкладені if-else

// Написати код, що буде пропонувати користувачу залогінитись на сайт (prompt):

// - Якщо користувач пише `admin`, запитати пароль
//   - Якщо нічого не введено, чи користувач закриває prompt - вивести в консоль строку 'Скасування входу'
// - Для всіх інших логінів показати користувачу alert з текстом 'Такий користувач не існує'

// Пароль для admin перевірити так:
// - Якщо введено '12345', вивести в консоль 'Адмін зайшов успішно'
// - В інших випадках показати alert 'Невірний пароль'



// const userName = prompt('введіть юзернейм )');
// if (userName === 'admin') {
//   const password = prompt('і ще пароль');
//   if (!password) {
//     console.log('Скасування входу');
//   } else {
//     // only if password exists
//     if (password === '12345') {
//       console.log('Адмін зайшов успішно')
//     } else {
//       alert('Невірний пароль');
//     }
//   }
// } else {
//   alert('Такий користувач не існує');
// }

// ## Example 3 -Виведення часу в консоль (if...else)

// Створити скрипт для виведеня годин і хвилин в консолі у форматі строки: `14 ч. 26 мин.`
// Якщо значення в змінній `minutes` дорівнює `0`, то виводити строку `14 ч.`, без хвилин.

// const hours = 14;
// const minutes = 0;

// let timestring = !minutes ? `${hours} ч.` : `${hours} ч. ${minutes} мин.`;
// let anotherTs = `${hours} hrs. ${!minutes ? '' : minutes+' min.'}`;

// // if-else
// timestring = `${hours} ч.`;
// if (minutes) {
//   timestring += `${minutes} мин.`;
// }

// console.log('timestring', timestring);

// ## Example 4 - Розгалудження vs тернарний оператор?

// Скрипт має виводити в консоль 'Positive number' якщо користувач ввів число більше нуля.
// Якщо введений нуль, вивести в консоль 'Zero!'.
// На вводі значення менше нуля в консолі має бути 'Negative number'.
// Запитати тричі в циклі, спростити за можливості


// const userInput = prompt('Введіть число');
// if (userInput < 0) {
//   console.log('Negative number');
// } else if (userInput > 0) {
//   console.log('Positive number')
// } else {
//   console.log('Zero!')
// }

//
// for (let i = 0; i < 3; i++) {
//   const userInput = prompt('Введіть число');

//   if (userInput < 0) {
//     console.log('Negative number');
//     continue;
//   }

//   if (userInput > 0) {
//     console.log('Positive number');
//     continue;
//   }

//   console.log('Zero!');
// }

// ## Example 5 - Форматування посилання (endsWith)

// Написати скрипт що перевіряє чи закінчується значення змінної `link` символом `/`.
// Якщо ні, то додати цей символ в кінець `link`


// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   link += '/';
// }

// if (link.charAt(link.length - 1) === '/') {
// // ...
// }

// console.log('link', link);

// ## Example 6 - Форматування посилання (includes + логічне &&)

// Написати скрипт що перевіряє чи закінчується значення змінної `link` символом `/`.
// Якщо ні - додати, але тільки у випадку коли в значенні змінної є підстрока `"my-site"`.


// let link = 'https://my-site.com/about';
// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// //
// let isEndsWithSlash = !link.endsWith('/');
// let includesMySide = link.includes('my-site');
// if (isEndsWithSlash && includesMySide) {}

// console.log('link', link);

// ## Example 7 - Форматирование ссылки (тернарный оператор)

// Рефакторінг кода із задачі #6 за допомогою тернарки

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }


// link += !link.endsWith('/') && link.includes('my-site') ? '/' : '';

// console.log('link', link);

// ## Example 8 - if...else + AND , OR

// Скрипт має виводити в консоль строку в залежності від значення змінної `hours`.

// Якщо `hours`:
// - менше 17, вивести строку `Pending`
// - в проміжку від 17 до 24 (включно), вивести строку з попередженням `Expires soon`
// - більше `24` , вивести строку з помилкою `Expired`
// 'qwer', "tyu", `uiop`

// const hours = -30;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.warn('Expires soon');
// } else {
//   console.error(`Expired`);
// }


// ## Example 9 - Страшне слово Дедлайн! (if...else  vs switch)

// Скрипт що визначає поточний стан проекта і інформує щодо дати дедлайну.
// Написати з використанням `if...else`.

// - Якщо до дедлайна 0 днів - виведи строку `Deadline is TODAY`
// - Якщо до дедлайна 1 день - виведи строку `Deadline is tomorrow`
// - Якщо до дедлайна 2 дні - виведи строку `2 days before deadline`
// - Якщо до дедлайна 3+ дні - виведи строку `Relax, deadline is not there`

// OK

// Відрефакторити код із задачі на switch
// const daysTillDeadline = 10;

// switch (daysTillDeadline) {
//   case 0:
//     console.error('Deadline is TODAY');
//     break;
//   case 1:
//     console.warn('Deadline is tomorrow');
//     break;
//   case 2:
//     console.log('2 days before deadline');
//     break;

//   default:
//     console.log('Relax, deadline is not there');
//     break;
// }

// ## Example 10 - Цикл for

// Вивести в консоль числа по порядку від min до max, але тільки якщо число кратне 5.


// const min = 20;
// const max = 100;

// for (let index = min; index <= max; index++) {
//   if (index % 5 === 0) {
//     console.log(index);
//   }
// }

// // for (let index = min; index <= max; index += 5) {}

// const user = {
//   name: 'admin',
//   pass: '12345'
// }

// const users = [];

// const name = 'admin';

