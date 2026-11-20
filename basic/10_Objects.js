  // singleton object  (have only one type of object)

//  Object literals 
const mysymbol = Symbol("mySymbol");

const user = {
[mysymbol]: "mySymbolValue",  // [] that is use to declasre the symbol in object
name: "Rishabh",
"fullname": "John Doe",
 age: 30,
islogin: false
};

  console.log(user.name) // John
  console.log(user["age"]) // 30
  console.log(user["fullname"]) // John Doe

  console.log(user[mysymbol]) // mySymbolValue


  // Change is object

  user.name = "Rishabh Kumar"
  //Object.freeze(user) // freeze the object so we can't change the object
  console.log(user.name) 


  // greeting function in object

user.greeting = function(){
    console.log("hello")
  }
  
  user.greeting1  = function(){
      console.log(`hello , ${this.name}`)
  }
  
  
console.log(user.greeting());
console.log(user.greeting1());