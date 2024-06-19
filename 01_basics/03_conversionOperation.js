let score = "33hgj"

// const {score} = req.body

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abs" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true ; 0 => false
// "" => false
// "raj" => true

let someNumber  = 33
let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);