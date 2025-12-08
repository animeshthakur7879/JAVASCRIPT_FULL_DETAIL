//DESTRUCTURING OF OBJECTS

const course = {
    name : "xyz" , 
    price : 999 ,
    instructor : "animesh"
}

// const {instructor} = course
const {instructor : ins} = course

console.log(ins)

