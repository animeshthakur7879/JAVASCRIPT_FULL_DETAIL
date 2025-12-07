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


//---------------------OPERATIONS-------------------

let str1 = "hello" 
let str2 = " world"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)    //12
console.log(1 + "2")    //12
console.log("1" + 2 + 2)//122
console.log(1 + 2 + "2")//32


console.log(+true)     //1
console.log(+"")       //0

//prefix & postfix operations is very important 
let gameCounter = 100
++gameCounter
console.log(gameCounter)


