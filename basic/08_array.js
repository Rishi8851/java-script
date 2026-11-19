const arr = [1, 2, 3, 4, 5, true, "rishi"]

console.log(arr[6])

// Array methods
arr.push("rishabh") // add element at the end of the array

arr.unshift(33)  // add element atstart  of array
console.log(arr.includes(33)) // true

const newarr = arr.join()
console.log(newarr) // 33,1,2,3,4,5,true,rishi,rishabh
console.log(typeof newarr) // string


// slice , splice
console.log("A", arr);
const ar = arr.slice(1,3)
console.log(ar) // [1, 2]
console.log("B ", arr)

// splices
const ar2 = arr.splice(1,3)
console.log(ar2) // [1, 2, 3]
console.log("C ", arr) // [33, 4, 5, true, "rishi", "rishabh"]