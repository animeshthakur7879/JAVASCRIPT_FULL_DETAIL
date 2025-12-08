/*
    To combine 2 arrays there are 3 methods 
    1. use push() 
    2. use concat() 
    3. use Spread operator 

    push() does the changes in the original array 
    but concat() & spead... returns a new array 
*/

const heros1 = ["thor" , "ironman" , "spiderman"]
const heros2 = ["superman" , "flash" , "batman"]

// heros1.push(heros2)

// console.log(heros1)
// console.log(heros1[3])
// console.log(heros1[3][1])


const allHeros = heros1.concat(heros2)
console.log(allHeros)


const allHeros2 = [...heros1 , ...heros2]
console.log(allHeros2)



console.log(Array.from("Animesh"))
console.log(Array.from({name : "Animesh"}))


let score1 = 100 
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1 , score2 ,score3))


