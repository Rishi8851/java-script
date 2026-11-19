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


    // Stack(Premitive) and Heap(Non-Primitive) memory allocation

    let name = "rishi"
    let name2 = name;
    
    name2 = "Rishabh"

    console.log(name) // rishi
    console.log(name2) // Rishabh
               
    let user1 = {
        name: "John",
        age: 30
    }
// heap memory allocation
    let user2 = user1;
    user2.name = "rishi";

    console.log(user1.name) // Jane
    console.log(user2.name) // Jane