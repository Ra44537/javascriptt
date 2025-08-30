// let smallImages = document.getElementsByClassName("oldImg");

// for (let i=0; i<smallImages.length; i++) {
//     smallImages[i].src = "ironman.wallpaper - Copy.jpg";
//     console.log(`value of image no. ${i} is changed.`);
// }


//Query selectors
// console.dir(document.querySelector("h1"));


// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));





let links = document.querySelectorAll(".box a");

// for (let i=0; i<links.length; i++) {
//     links[i].style.color = "green";
// }

for (link of links) {
    link.style.color = "purple";
}

