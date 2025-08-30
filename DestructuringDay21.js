let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner, runnerup, secondRunnerup, ...others] = names;

const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd",
};


let {username : user, password: secret, city: place = "mumbai"} = student;