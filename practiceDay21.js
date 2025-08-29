// check if all numbers in our array are multiple of 10 or not
// let nums = [10, 20, 30, 40];
// let ans = nums.every((el) => el % 10 ==0);
// console.log(ans);

//create a function to find the min number in an array.
let num = [10, 20, 30, 40, 5];
 function getMin(num){
    let min = num.reduce((min, el) => {
    if (min < el ) {
      return min;
    }else { 
        return el;
    }

});

return min;
 }
