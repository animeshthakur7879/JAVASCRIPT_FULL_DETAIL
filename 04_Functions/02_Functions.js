//Dynamic parameters in a funciton 

/*
    When we have a problem where we dont know the number of arguments 
    that will come in the function , so we can't define the parameters 
    while declaration , 
    To fix this prblem we can use the rest operator 
       => ...
       It will take all the values & the bundle it in a single array 
*/

function calculateCartPrice (...num1) {
    return num1 
}

console.log(calculateCartPrice(2 , 3 ,4 ,5))


//PASSIG OBJECT AS AN ARGUMENT 

const user = {
    name : "Aimesh" ,
    age : 21
}

function handleObject (obj) {
    console.log(`username is : ${obj.name}`)
}
handleObject(user)

handleObject({
    name : "Mahak" ,
    age : 22
})

//PASSING ARRAY AS AN ARGUMENT
const newArr = [1,2,3,4]
function fun(arr) {
    return arr[2]
}

console.log(fun(newArr))