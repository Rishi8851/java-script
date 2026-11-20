let a = 10
const b = 20
var c = 30 

                  
// console.log(a)
// console.log(b)
// console.log(c)

// {} that is scope for function, loop and if else

if(true){
    let a = 100
const b = 20
var c = 300 
// console.log(a)
}

// console.log(c)
// console.log(a)

function one(){
    const username = "rishi"
    
    function two(){
        const email = "@gmail.com"
        console.log(username);
    }
    // console.log(email);
    two()
}

one()

if(true){
const username = "rishi"
if(username === "rishi"){
    const web = " yt"
    console.log(username + web);
}
// console.log(web)

// console.log(username)
}



console.log(addone(5))
function addone(num){
return num+1
}

// console.log(addtwo(5))
const addtwo = function(num){
    return num+2


}
 console.log(addtwo(5)) 