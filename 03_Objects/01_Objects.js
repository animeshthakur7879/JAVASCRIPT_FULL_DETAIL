//DECLARATION OF OBJECTS

/*
    There are 2 methods to declare an object ....
    1. Using Literals       => Singleton
    2. Using Constructors   => No Singleton
       => eg. 
              Object.create()
*/

//1. Obeject Literal

const user = {
     name : "Animesh" ,
     "full name" : "Animesh Thakur" ,
     age : 21 ,
     location : "Jaipur" ,
     isLoggedIn : false
}
     //Acces Obejcts 
console.log(user.name)
console.log(user["name"])
/*
    This console.log(user["name"]) square notation is very important 
    as it is the only way to access the value of "full name" key 
*/

console.log(user["full name"])


//MAnipulation of values in object 
user.email = "ani@gmail.com"
// console.log(user["email"])

// Object.freeze(user)  //It will freeze the object & make it immutable 
                     //That means any chanegs in the obejct will not be reflect anymore 

user.email = "new@gmail.com"
console.log(user.email)     //No changes 


//adding a function in an object 

user.greeting = function () {
    console.log("Hello user")
}

// console.log(user.greeting)     //[Function (anonymous)]
console.log(user.greeting())    



