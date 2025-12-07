console.log("2" > 1)  // true 
console.log("02" > 1)  // true 

console.log(null > 0)   //false 
console.log(null == 0)  //flase
console.log(null >= 0)   //false

//The reason is that the == & comparision check operator
// works differrently , comparision converts null to a number 
// treating as a 0 

console.log(undefined == 0)  //Always flase 

//=== Strict check .... it checks the datatype of the value also 

console.log("2" ===  2)  //false 
