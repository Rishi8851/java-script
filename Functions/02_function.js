// ... here it is rest operator 
// that help to take(pass) multiple values

function carprice(...n1){
    return n1
}
console.log(carprice(2,3,3))

// if have multiple parameter then?

function num(a1, b,...c){
    return [a1,b,c]
    
}

// console.log(num(12,12,34,53))

// make a function for many other  objects
const user ={
    name:"rishi",
    price: 342
}

function handleobj(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price} `)
}

handleobj(user)


// pass arry in functions

const arr = [2,3,4,5]
function retuarr(getarray){
return getarray;
}

console.log(retuarr(arr))