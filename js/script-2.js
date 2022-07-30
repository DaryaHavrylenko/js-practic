"use strict"
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
//         console.log(item);
//         userBob = item;
//     }
// }
// }
// console.log('UserBob', userBob);


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

