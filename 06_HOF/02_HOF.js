/*
    Foreach doesnt return any value , 
    So when we need to perform operations like a condition checking 
    in an array of object , then foreach doesnt work 
    
    So we have other methods like Filter , Map & reduce 
*/

//FILTER 

//Example to filettr out number that are greater then 4
const nums = [1,2,3,4,5,6,7,8,9]
let newNums = nums.filter((num) => {
    return num>4
})

// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((book) => book.genre == "History")

userBooks = books.filter((book) => book.publish >= 1950 && book.genre == 'Science')

// console.log(userBooks)


//MAP
/*
  It autmoatically always return a value everytime 
*/
let mapNum = nums.map((num)=> num+10)
// console.log(mapNum)


//CHAINING 


