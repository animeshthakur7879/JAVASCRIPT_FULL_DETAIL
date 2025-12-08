function sayHello () {
    console.log("H")
    console.log("E")
    console.log("L")
    console.log("L")
    console.log("O")
    console.log("H")
}

// sayHello()

function add (num1 , num2) {
    // console.log(num1 + num2)
    let result = num1 + num2 
    // return result
    return num1 + num2
}

// add(2 , 3)
// add(2 , null)
// add("2" , 3)
// add(3 , "2")

const result = add(2 , 3)

// console.log("Result : " , result) // Undefined if there is no return

function loginUser(userName) {
    return `${userName} just logged in`
}

const msg = loginUser("Animesh")
console.log(msg)

console.log(loginUser("Maahk"))