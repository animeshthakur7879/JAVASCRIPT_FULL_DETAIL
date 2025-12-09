//FOR OF LOOP 

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val)
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(greet)
}

/* For of loop does not work on the itertion of obejcts */


//For IN loop


const myObj = {
    js : "javascript" ,
    cpp : "C++" ,
    rb : "ruby" ,
}

for (const key in myObj) {
    // console.log(myObj[key])
    console.log(`${key} shortcut is for ${myObj[key]}`)
    
}

const programming = ["js" , "java" , "cpp" , "html"]

for (const key in programming) {
    console.log(programming[key])
    
}

//FOR EACH LOOP


programming.forEach( (item) => {
    console.log(item)
} )


programming.forEach((item , index , arr) => {
    console.log(item , index , arr)
})


const coding = [
    {
        language : "js" ,
        rating : 5
    } ,
    {
        language : "java" ,
        rating : 4
    } ,
    {
        language : "cpp" ,
        rating : 3
    } ,
    
]

coding.forEach((item) => {
    console.log(item.language , item.rating)
})

//Foreach doesnt return any value 

const nums = [1 , 2 , 3 , 4 ,5 ,6 ,7 ,8]

