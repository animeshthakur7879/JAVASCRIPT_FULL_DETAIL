const name = "Animesh"
let email = "animesh@gmail.com"
var pass = '12345'

// name = "Ani"     //Cannot assign to the constant variables 

//Var & Let can be reassigned
email = 'ani@gmail.com'
pass = '123'

// console.log(a)   //Cannot access a before assigning 

console.log(b)   //output : undefined .... due to hoisting

let a 
var b 

console.table([name , email , pass , a , b]);