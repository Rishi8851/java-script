const score = 4000;
console.log(score);


const balance = new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));

const num2 = 233.323;
console.log(num2.toPrecision(3));

const hundred = 10000;
console.log(hundred.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));

// Math

console.log(Math.PI);
console.log(Math.round(4.6));
console.log(Math.floor(4.9));

console.log(Math.random());   // give value 0 to 1
console.log((Math.random()*10)+1);

const min = 10;
const max = 20;
// that give a random number between min and max (inclusive)
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);