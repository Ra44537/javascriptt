// let arr = [1,2,3, 4, 5];
// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);

// //or 
// arr.forEach(function (el) {
//     console.log(el);
// });

let array = [{name: "aman",
    marks: 95
}, {
    name : "shradha",
    marks:94.4
}, {
    name: "raj",
    marks: 94
}];

array.forEach((student) => {
    console.log(student.marks);
});