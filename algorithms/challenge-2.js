function fizzBuzz(input){
    if (input % 3 == 0 && input % 5) {
      return "fizzbuzz"
    } else if (input % 3 == 0) {
        return"fizz"
    } else if (input % 5 == 0) {
        return "buzz"
    } 
  }
  
console.log(fizzBuzz((3)));
console.log(fizzBuzz((5)));
console.log(fizzBuzz((15)));
console.log(fizzBuzz((7)));
// console.log(fizzBuzz([4, "z", "f", 5]);
// console.log(fizzBuzz(["$%^", 567, "&&&"]);
// module.exports = fizzBuzz
