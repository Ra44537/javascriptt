function sum(...args){//arguments
   for (let i=0; i<args.length; i++) {
    console.log("you gave us: ", args[i]);
   }
}


function min(a,b, c, d) {
    console.log(arguments);
    arguments.push(a);// it was not runing . it was an array function
}




function sums(...args) {
   return args.reduce((sum, el) => sum + el); 
}


