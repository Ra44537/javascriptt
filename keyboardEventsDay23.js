// let btn = document.querySelector("button");
// btn.addEventListener("click", function(event) {
//     console.log(event);
//     console.log("button clicked");
// });

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("code = ", event.code);//ArrowUp(U) , ArrowDown(D) , ArrowLeft(L), ArrowRight(R)
    if (event.code == "keyU") {
        console.log("character moves forward");
    }else if (event.code == "keyD"){
        console.log("charater moves backward");
    }else if (event.code == "keyL"){
        console.log("charater moves left");
    }else if (event.code == "keyR"){
        console.log("charater moves right");
    }
 });

// inp.addEventListener("keyup", function(){
//     console.log("key was released");
// });