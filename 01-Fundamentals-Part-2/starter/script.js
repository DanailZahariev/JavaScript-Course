// 'use strict';

// const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);


// const checkWinner = function (avgDolphins, avgKoalas) {

//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins wins! ${avgDolphins} vs. ${avgKoalas}`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas wins! ${avgKoalas} vs. ${avgDolphins}`)
//     } else {
//         console.log("No one wins.")
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

// const bills = [125, 555, 44];

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// tip.forEach(t => console.log(t))

// const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];

// total.forEach(t => console.log(t))


// const markData = {
//     fullName: 'Mark Miller',
//     weight: 78,
//     height: 1.69,
//     calcBmi: function () {
//         this.bmi = this.weight / this.height ** 2
//         return this.bmi;
//     }
// };

// const johnData = {
//     fullName: 'John Smith',
//     weight: 92,
//     height: 1.95,
//     calcBmi: function () {
//         this.bmi = this.weight / this.height ** 2
//         return this.bmi;
//     }
// };
// johnData.calcBmi();
// markData.calcBmi();

// const output = johnData.bmi > markData.bmi ? `
// ${johnData.fullName} BMI ${johnData.bmi.toFixed(2)} is higher than ${markData.fullName} ${markData.bmi.toFixed(2)}!`
//     : `Mark's BMI ${markData.bmi.toFixed(2)} is higher than John's ${johnData.bmi.toFixed(2)}!`;

// console.log(output)



// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// const tips = [];

// const totals = [];

// for (let i = 0; i < bills.length; i++) {

//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// tips.forEach(t => console.log(`The tips is ${t}`))
// console.log("-----------")
// totals.forEach(t => console.log(`The total spend is ${t}`))
// console.log("-----------");
// console.log(`The average spend is ${calcAverage(totals)}`);
// console.log("-----------");
// console.log(`The average tip is ${calcAverage(tips)}`);