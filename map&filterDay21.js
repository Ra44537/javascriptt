let num = [1, 2, 3, 4, 5];
let double = num.map((el) => {
    return el * el;
});






let student = [{name: "aman",
    marks: 95
}, {
    name : "shradha",
    marks:94.4
}, {
    name: "raj",
    marks: 94
}];

let gpa = student.map((el) => {
    return el.marks / 10;
});


let nums = [1, 2, 3, 4, 20];
let ans = nums.filter((el) => {
    return el % 2 == 0; //even -> true , odd ->false  // for odd chandge condition != 0;
})