// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// Result: ["a", "b", "c", 0, 1, 2, 3];
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


const a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];
// const b = a.splice(3, 3);
// console.log(a);
// const d = a.splice(3, 0, "a", "b", "c");
// console.log(a);


// var2

// const b = a.splice(3, 3, 'a', 'b', 'c');
// console.log(a, b);

// var3
console.log(a.copyWithin(3, 0, 3));