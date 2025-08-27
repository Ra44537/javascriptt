let sum = 54; // Global scope


function calSum (a, b) {
    let sum = a+b; // function Scope
    console.log(sum);
}

calSum( 1, 2);
console.log(sum);


//Block scope
// {
//    let  a = 25; 
   

// }

// console.log(a);

let age = 25;
if (age >= 18) {
    let str = "adult";
    console.log(str);

}

//lexical scope

function outerfunc() {
    let x = 5;
    let y = 6;
    function innerfunc() {
        console.log(x);
        console.log(y);
    }
    innerfunc();
}
//hoisting 