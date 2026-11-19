let date = new Date();
console.log(date.toDateString()) // current date and time
console.log(date.toLocaleDateString()) // current date and time in local format

console.log(typeof date) // object

// declare a particular date
let date2 = new Date("2023-06-01");
console.log(date2.toDateString()) // Thu Jun 01 2023

let mytimestamp = Date.now()
console.log(mytimestamp) // 1685664000000  that is the timestamp in milliseconds since January 1, 1970

// console.log(mytimestamp.getTime()) // Thu Jun 01 2023

date2.toLocaleDateString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}) // 6/1/2023 in local format
console.log(date2)