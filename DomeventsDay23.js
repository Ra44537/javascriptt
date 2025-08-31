// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("you entered a button");
//     };
//     console.dir(btn)
// };

// function sayHello() {
//     alert("hello");
// };



//event listeners
let btns = document.querySelectorAll("button");
for (btn of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayName;

   // btn.addEventListener("click", sayHello);
   // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("you double clicked me");
    });


};

function sayHello() {
    alert("hello");
}

function sayName() {
    alert("apna college")
}

