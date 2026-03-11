// valid voter
// var ans = Number(prompt('what is your age ?'))

// if (isNaN(ans)) {
//     console.log('wrong input');
// } else if (ans >= 18) {
//     console.log('you can vote');
// } else {
//     console.log('you can not vote');
// }

// shop discount
// Amount — Discount
// 0 – 5000 → 0%
// 5001 – 7000 → 5%
// 7001 – 9000 → 10%
// More than 9000 → 20%                    

let amount = Number(prompt('what is the final amount ?'))
let dis = 0
if (amount > 0 && amount <= 5000) {
    dis = 0
} else if (amount > 5001 && amount <= 7000) {
    dis = 5
} else if (amount > 7001 && amount <= 9000) {
    dis = 10
} else if (amount > 9000) {
    dis = 20}
console.log(amount - Math.floor((20 * amount) / 100));