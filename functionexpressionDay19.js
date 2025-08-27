let name = "shradha";
let sum = function(a,b){
    return a+b;
}

let hello = function() {
    console.log("hello");
}

hello = function() {
    console.log("namaste");
}

// higher order function

function multipleGreet (func, count) {
    for(let i = 1; i<=count; i++){
        func();
    }
}

let greet = function() {
    console.log("hello");
}

multipleGreet(greet, 10);

