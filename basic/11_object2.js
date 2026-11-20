// const user = new object()
// nested object
const user = {}
user.id = "123"
user.name = "Rishabh"
user.email = "@gmail.com"
console.log(user) 

const user2 = {
    email : "@gmail.com",
    name : {
        username :{
            firstname :"rishabh",
            lastname: "kumar"
        }
    }


}
console.log(user2);
console.log(user2.name.username.firstname);
// Adding two objects
const obj1 ={1:"a",
    2:"b"}
const obj2 = {3:"c", 4:"f"
}

// const obj3 = {obj1, obj2}

const obj3 = Object.assign({}, obj1,obj2)

console.log(obj3)
// or
const obj4 = {...obj1, ...obj2}
console.log(obj4)


const users = [
    {
    id:1
,email:"gaumfn"

},
    {
    id:1
,email:"gaumfn"

},
    {
    id:1
,email:"gaumfn"

},


]

console.log(users[1].email)
// for find key
console.log(Object.keys(user));
console.log(Object.entries(user))