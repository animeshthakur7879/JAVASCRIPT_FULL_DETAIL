//IIFE
/*
    It is a function that immediatly excecute after its 
    declaration
    Global scope ke variable se pollution hoti he bhout baar 
    toh uss global scope ke pollution ko hatane ke liye IIFE use kiya

    IN IIFE ()() ; always use a semicon afeter invoking 
    as in IIFE it doesnt know ki usse rokna kaha he toh aage ki lines nhi chalegi 
    agar ; nhi lagaya toh
    
*/

(function chai () {
    console.log("DB connected")
})() ;

// () ();

( () => {
    console.log("This si new")
} ) () ;

( (name) => {
    console.log(`Hello ${name}`)
} ) ("Animesj") ;
