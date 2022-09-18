'use strict';
// task1
// У нас есть следующий объект:

// let user = {
//   name: "John",
//   age: 30
// };
// Проверьте, что этот объект не пустой и что в нем есть ключ age.

// let user = {
//     name: "John",
//     age: 30
// }
// const keys = Object.keys(user);
// console.log(keys);
// for (const key of keys) {
//     if (key === 'age') {
//         console.log(`yes`);
//     }
// }

// task2
// Имеется массив объектов:

// let user = [
// {
//   name: "John",
//   age: 30
// },
// {
//   name: "Bob",
//   age: 21
// },
// {
//   name: "Anna",
//   age: 19
// }
// ]
// // Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.

// let userBob = {};
// for (const item of user) {
//     // const values = Object.values(item);
// for (const item of user) {
//     if (item.name === 'Bob') {
//         // console.log(`${item.name}`);
//         // console.log(item);
//         userBob = item;
//     }
// }
// }
// console.log('UserBob', userBob);

// var2
// const userBob = user.find(item => item.name === "Bob");
// console.log(userBob);

// task3
// Удалите из массива объектов (задание 2) объект с name == "Anna".
// let user = [
// {
//   name: "John",
//   age: 30
// },
// {
//   name: "Bob",
//   age: 21
// },
// {
//   name: "Anna",
//   age: 19
//     }
// ]

// for (const item of user) {
//     if (item.name === 'Anna') {
//         const indexItem = user.indexOf(item);
//     user.splice(indexItem, 1);
//     }

//     console.log(user);
// }

// var2

// user.splice(user.findIndex(item => item.name === 'Anna'), 1);

// console.log(user);

// TASK4
// Отсортируйте массив объектов в пункте 2 по свойству age в порядке возрастания.

// let user = [
// {
//   name: "John",
//   age: 30
// },
// {
//   name: "Bob",
//   age: 21
// },
// {
//   name: "Anna",
//   age: 19
//     }
// ]

// let isSorted;
// // let isNotSorted;
// do {
//     isSorted = true;
//     for (let i = 0; i < user.length - 1; i += 1) {
//         const current = user[i];
//         const next = user[i + 1];
//         // console.log(user[i].age, user[i + 1].age);
//         const isNotSorted = user[i].age > user[i + 1].age;
//         // console.log(isNotSorted);

//         if (isNotSorted) {
//             user[i] = next;
//             user[i + 1] = current;
//             isSorted = false;
//         }
//     }
// }
// while (!isSorted);
// console.log(user);

// var 2
// user.sort(function (a, b) {
//   if (a.age > b.age) {
//     return 1;
//   }
//   if (a.age <= b.age) {
//     return -1;
//   }

//   return 0;
// });
// console.log(user);

// var 3
// user.sort((firstAge, secondAge) => firstAge.age - secondAge.age);
// console.log(user);

// autocheck 5/48
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // let totalPrice = 0;
//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   // return totalPrice;
//   orderedItems.forEach(function (item)
//   {
//     totalPrice += item;
//     console.log(totalPrice);
//    });
//   return totalPrice;

// }
// calculateTotalPrice([12, 85, 37, 4]);

// autocheck 13/48
// function changeEven(numbers, value) {
//    const newArray = numbers.map(number => number % 2 === 0 ? number += value : number
//     );
//     console.log(newArray);
//      for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//     return newArray;
// }
// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([44, 13, 81, 92, 36, 54], 100);

// 27.07
// task 1
// Получите из объекта obj значение id в константу id не используя выражение obj.id

// const obj = {
// id: 5,
// token: 12343423
// };
// const { id } = obj;
// console.log(id);

// Получите из объекта obj значение id и разместите его в константу userId.
//  const obj = {
// id: 5,
// token: 12343423
// };
// const { id } = obj;
// const userId = id;
// console.log(userId);

// task 2
// Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.
// var arr = ['Привет, ', 'мир', '!'];
// console.log(arr.join(" "));

// task 3
// Задача. Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной.
// var arr = ['Привет, ', 'мир', '!'];
// const text = [...arr].join(" ");

// console.log(text);

// task 4
//Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.

//Этот объект дан:
// var obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };

// const result = Object.entries(obj).map(item => ({ name: item[0], salary: Number(item[1]) }));
// result.splice(1,1);
// console.log(result);

// task-1 by Lera)
// Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
//   * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
//   * Сложность задачи: 1 of 5

// function isObject(arg) {
//   if (arg === null) {
//     return false;
//   }
//   if (Array.isArray(arg)) {
//     return false;
//   } else {
//     return typeof arg === 'object';
//   }
// }
// console.log(isObject({ a: 1 }));

// function isObject(arg) {
// return arg !== null && !Array.isArray(arg) && typeof arg === "object";
// }
// console.log(isObject([1, 2, 3]));

// let isObject = (arg) => arg !== null && !Array.isArray(arg) && typeof arg === "object";

// console.log(isObject([1, 2, 3]));
// console.log(isObject({ a: 1 }));

// tas-2 by Lera
// Описание задачи: Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]].
//   * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
//   * Сложность задачи: 1 of 5

// DOM

// НАВИГАЦИЯ ПО DOM
// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// ПОИСК ЭЛЕМЕНТОВ
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// 14/08
// Задача 1. Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

// Попробуйте реализовать эту функцию не только с помощью if...else, но и с помощью тернарного оператора, и в виде стрелочной функции.

// function returnNumber(x, y) {
//     if (x > y) {
//         return '1';
//     } else if(x < y) {
//         return '-1';
//     }
//     return '0';
// }
// console.log(returnNumber(4, 1));

// var 2

// const returnNumber = (x, y) => {
//         let z;
//     if (x > y) {
//         z = '1';
//     } else if (y > x) {
//         z = '-1';
//     }
//     return (x === y) ? '0' : z;
// }

// console.log (returnNumber(0, 4));

// task 2
// Обращаем массив вспять. Напишите две функции, reverseArray и reverseArrayInPlace.
//  Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов.Вторая работает как оригинальный метод
// reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента.Не используйте
//  стандартный метод reverse.

// function reverseArray(array) {

//     let a = [];
//     for (let i = 0; i <= array.length - 1; i += 1) {
//         a[i] = array[(array.length - 1) - i];
//     }
//     return a;
// }

//     console.log(reverseArray(['h', 'b', 'c', 'a']));


// 28.08
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.


// 18/09
// task 1
// Як знайти пропущене число у заданому масиві цілих чисел від 1 до 100?

// const array = [1, 2, 3, 4, 6, 7, 8, 9, 10];

// for (let i = 0; i < array.length - 1; i += 1) {
//     // console.log(array[i]);
//     if (array[i + 1] !== array[i] + 1) {
// let missingNumber = array[i] + 1;
//         console.log(missingNumber);
       
//     }
// }

// task 2
// Як знайти число, що повторюється, в заданому масиві цілих чисел?
// const array = [1, 2, 3, 3, 4, 6, 7, 7, 8, 9, 10];

// for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < i; j++)
//         if (array[j] === array[i]) {
//             console.log(array[i])
//         }
// }
    
// task 3

// Як знайти найбільше та найменше число в невідсортованому масиві?
// const array = [1, 2, 3, 4, 11, 8, 15, 20, 6, 7, 8, 9, 10];

// console.log(Math.min(...array));
// console.log(Math.max(...array));

// task 4
// Як знайти всі пари в масиві цілих чисел, сума яких дорівнює заданому числу?
// const array = [1, 2, 3, 4, 11, 8, 15, 20, 6, 7, 8, 9, 10];
// function findSumm(num) {
//     for(let i = 0; i < array.length; i++) {
//         for (let j = 0; j < i; j++)
//         if (num === (array[j] + array[i])) {
//             console.log(array[i], array[j])
//         }
// }
// }
    
// findSumm(16);

