async function greet() {
    return "hello world";
}
greet()
.then((result) => {
    console.log("promise was resolve");
    console.log("result was : ",result);
})
.catch((err) =>{
    console.log("promise was rejected with err : ",err);
});

let demo = async() => {
    return 5;
}