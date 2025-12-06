// Ṛelation between string and number
let a = 10
let b = '20' // number + string its reture a string 

console.log(typeof(a+b)) // this is not addation | this is concatinations 

// sum and message
console.log('sum of 10 and 20 is ' + a + b) // op : sum of 10 and 20 is 1020

let x = 10
let y = 20
console.log('sum of 10 and 20 is ' + (x + y)) // sum of 10 and 20 is 30 high prioratiy of breckets ()

// type coercion
console.log('1'-1) // op : 0 js compiler convert the  string "1" to number 


// Accept and print the answer
let age = prompt('enter a age')
age = Number(age) // prompt return string | type casting
console.log(age)

    