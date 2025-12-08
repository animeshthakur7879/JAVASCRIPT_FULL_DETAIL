//THIS KEYWORD 
/*
    This keyword tell us about the current context
    It is used to refer to the current context
*/

const user = {
    name : "animesh" ,
    price : 9999 ,
    
    welcomeMessage : function() {
        console.log(`${this.name} , Welcome to website`)
        // console.log(this)    //Try it 
    }

}

user.welcomeMessage()

user.name = "Mahak"  
user.welcomeMessage()

console.log(this)        //Empty {} ......
                        /**
                            But when console.log(this) in the brower 
                            it will print the window object 
                            as the defalt context of the browsr is the window 
                            but here in node environment there is no default 
                            context , so it will pritn empty {}
                         */


//ARROW FUNCITON

function chai() {
    name : "Animesh"
    console.log(this.name)     //undefined as this onlu works in object 
}

chai()

const chai2 = () => {
    let userName = "ANiemsh" 
    console.log(this.userName)
}

chai2()

