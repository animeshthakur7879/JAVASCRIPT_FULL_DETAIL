let score = "33"
console.log(typeof score) //String


let valueInNumber = Number(score)  //Number
console.log(typeof valueInNumber)


let val = "33abc"
let val2 = Number(val)
console.log(typeof val2)  //O/p : Number , but "33abc" is not a number
console.log(val2)         // O/P : NAN


//"33" => 33
//"33abc" => NAN
//true => 1 
//false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

// 1 => true 
// "" => false 
// 2 , ... => true 
//"Ani" => false 

let someNumber = 33 

let stringNumber = String(someNumber)
console.log(stringNumber)