const marvel = ["Iron Man","Captain America"]

  const dc = ["Batman","Superman"]
// Push
  // marvel.push(dc);
  // console.log(marvel) 

//Concat
// const allHeroes = marvel.concat(dc);

// console.log(allHeroes); 

// spread operator(...)
  const allnewh = [...marvel, ...dc]
  console.log(allnewh);

  // Flat 
  const arr2 = [1,2,4,[4,5,6],7,[6,4,5]]
  const temp = arr2.flat(1)
  console.log(temp)

//From (to make array from string)
const str = "Hello"
const arr = Array.from(str)
console.log(arr)

//Of (to make array from multiple values)
let sc1 = 100
let sc2 = 200
let sc3 = 300
console.log(Array.of(sc1,sc2,sc3))