// #PRIMITIVE 

// 7types: String, Number, Boolean, null, undefined , Symbol, BigInt

const score= 100
const scoreValue= 100

const isLoggedIn = false
const OutsideTemp= null
let userEmail ;

const id = Symbol('123')
const   anotherId = Symbol('123')
console.log(id === anotherId)

//BigInt
// Reference (Non primitive)
// Array, Objects, Funtions

const heros = ["shaktiman","nagraaj" , "doga"];
let myObj= {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction)