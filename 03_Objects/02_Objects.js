//SINGLETON OBJECT 
const tinderUser = new Object()

tinderUser.id = "12345"
tinderUser.name = "Ani" 
tinderUser.isLoggedIn = false 

// console.log(tinderUser)

//Obejct nesitng
const regularUser = {
    email : "email@gmail.com" ,
    fullName : {
        userFullName : {
            first : "Animesh" ,
            last : "Thakur"
        }
    }
}

// console.log(regularUser.fullName.userFullName.first)


//Combining of obejcts 
const obj1 = {
    1 : 'a' ,
    2 : 'b'
}
const obj2 = {
    3 : 'a' ,
    4 : 'b'
}

const obj3 = {obj1 , obj2}   //Not Suitable 
// console.log(obj3)

const obj4 = Object.assign(obj1 , obj2)  //Better but not used  
// console.log(obj4)

const obj5 = {...obj1 , ...obj2}   //MOstly used
// console.log(obj5)


//ARRAY OF OBJECTS 
const users = [
    {
        name : "Aniemsh"
    } ,
    {
        name : "Aniemsh"
    } ,
    {
        name : "Aniemsh"
    } ,
    {
        name : "Aniemsh"
    } ,
    {
        name : "Aniemsh"
    } ,
    
]

// console.log(users[1])


//METHODS OF OBJECT S

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

