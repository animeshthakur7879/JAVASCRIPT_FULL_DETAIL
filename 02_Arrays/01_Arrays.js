//Arrays 

const myArray = [0,1,2,3,4,5]
console.log(myArray)

/*
    JavaScript array operations create shallow copy 
    
    SHALLOW COPY - shallow copy of an object is the copy that 
                   shares the same references 
                   => Changes in the copy will reflect in the original 
                   => It uses the heap memory 

    DEEP COPY    - Deep copy of an object is the copy that doesnt 
                   share the same reference point 
                   => The changes in the copy will not affect the original 
                   => It uses Stack memory 

*/

//DECLARARIION OF ARRAY 
const arr1 = [1,2,3,4,5] 
const arr2 = new Array(1,2,3,4,5)

console.log(arr1)
console.log(arr2)


//ARRAY METHODS 

arr1.push(6)
arr1.pop()
arr1.unshift(0)
arr1.shift()

console.log(arr1.includes(4))
console.log(arr1.indexOf(4))

const newArr = arr1.join() //add all elements of an array into a string 
// console.log(newArr)
// console.log(arr1)

//SLICE , SPLICE 

console.log("A " , arr1)

const myn1 = arr1.slice(1,3)  //[1,3)
console.log(myn1)
console.log("B " , arr1)


const myn2 = arr1.splice(1,3)   //[1,3]
console.log(myn2)
console.log("C " , arr1)

/*
    The differrence b/w slice & splice is that
    Slice => It wont affect the original array as seen in the example 
    Splice => It will affect the original array , it will remove the elements 
              from the original array & then place it in new array 
              so the original array is only left with elements that are not used in 
              the range of splice ... 
              
    for better understanding run the above code 
*/





