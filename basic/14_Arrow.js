const user = {
    username: "rishi",
    price : 324,

    welcomemes: function(){
        // console.log(`${this.username}, welcome`)
        // console.log(this)
    }


}
user.welcomemes()
user.username = "rihs"
user.welcomemes()

// console.log(this)


// Arrow 

function one(){
    let username = "rhis"
    console.log(this.username);

}
// one()

// const two = function () {
//     let userna = "rishi"
//     console.log(this.userna)
//   }

//   two()
const two = ()=>{
    let userna = "rishi"
    console.log(this.userna)
  }

  two()

   
// Arrow function
const add  = (a,b)=>{
return a+b
}

//or 
const sub = (a,b)=> a-b

console.log(add(3,4))
console.log(sub(3,4))


// arrow in objecct

const news = (c,d) =>({usernames: "risih"})

console.log(news(2,3))


