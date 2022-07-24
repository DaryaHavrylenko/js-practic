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

let user = [
{
  name: "John",
  age: 30
},
{
  name: "Bob",
  age: 21
},
{
  name: "Anna",
  age: 19
    }
]

let isSorted;
// let isNotSorted;
do {
    isSorted = true;
    for (let i = 0; i < user.length - 1; i += 1) {
        const current = user[i];
        const next = user[i + 1];
        // console.log(user[i].age, user[i + 1].age);
        const isNotSorted = user[i].age > user[i + 1].age;
        // console.log(isNotSorted);

        if (isNotSorted) {
            user[i] = next;
            user[i + 1] = current;
            isSorted = false;
        }
    }
}
while (!isSorted);
console.log(user);

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

