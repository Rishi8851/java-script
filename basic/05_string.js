const name = "rishi"
const count  = 50

console.log(`My name is ${name.toUpperCase()} and my count is ${count}`)

// String object
const name2 = new String("rishi")

console.log(name2[0])
console.log(name2.length)
console.log(name2.__proto__) // String object

const str = name2.substring(0, 3)
console.log(str) // ris

const str2 = name2.slice(-5, -1)
console.log(str2) // ris

const str3 = "  rishi FIROE  "
console.log(str3.trim()) // rishi

const url = "https://www.google.com/search?q=javascript"


console.log(url.replace("https","www"))