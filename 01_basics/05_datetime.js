//Dates 

let myDate = new Date() 
// console.log(myDate)      Not Readable 

console.log(myDate.toString())     
console.log(myDate.toISOString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleDateString())   //Most readble (DDMMYYYY)

// console.log(typeof myDate)     //Object 

let myCreatedDate = new Date(2023 , 0 , 23)
console.log(myCreatedDate.toLocaleDateString())


//TimeStamps 
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.floor(Date.now()/1000))

let newDate = new Date () 
// console.log(newDate.getMonth())
// console.log(newDate.getDate())
// console.log(newDate.getHours())
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())
// console.log(newDate.getMinutes())
// console.log(newDate.getTimezoneOffset())

console.log(newDate.toLocaleString('default' , {
    weekday : "long" ,
    
})
)

