// Primitive

// 7 type : String, Number, Boolean, Null, Undefined, Symbol, BigInt



const score = 33;
const scorevalue = 33
const temp = null;

const id = Symbol("id");
const id2 = Symbol("id");

console.log(id === id2) // false
console.log(id)
//Reference type(Non-Primitive) : Object, Array, Function

const hero  = ["Superman", "Batman", "Spiderman"]

const user = {
    name: "John",
    age: 30}

    console.log(user)

    const myfun = function(){
        console.log("Hello World")
    }
    
    myfun()