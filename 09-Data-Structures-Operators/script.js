'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours,

    order(staterIndex, mainIndex) {
        return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({
                      staterIndex = 1,
                      mainIndex = 0,
                      time = '20:00',
                      address,
                  }) {
        console.log(
            `Oder received! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, otherIngredients)
    },
};

// 01.Destructuring Arrays

/* const arr = [2, 3, 4];
 const a = arr[0];
 const b = arr[1];
 const c = arr[2];

 const [x, y, z] = arr;
 console.log(x, y, z);
 console.log(arr)

 let [main, , secondary] = restaurant.categories;

 console.log(main, secondary)

 // Switching variables

 const temp = main;
 main = secondary;
 secondary = temp;
 console.log(main, secondary);

 [main, secondary] = [secondary, main];
 console.log(main, secondary)

 console.log(restaurant.order(2, 0));
 const [starter, mainCourse] = restaurant.order(2, 0);
 console.log(starter, mainCourse)

// Nested destructuring

 const nested = [2, 4, [5, 6]];
 const [i, , j] = nested;
 console.log(i, j)

 const [i, , [j, k]] = nested;
 console.log(i, j, k);

 // Default values

 const [p = 1, q = 1, r = 1] = [8, 9]
 console.log(p, q, r)

 // 02.Destructuring Objects

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags)

// default values

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters)

// Mutating variables

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b)

// Nested objects

const {fri: {open: o, close: c}} = openingHours;
console.log(o, c) */

//03. The Spread Operator (...)

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);
//
// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets, BUT not Objects

// const str = 'Danail';
// const letters = [...str, ' ', 'Z.'];
// console.log(letters);
// console.log(...str);
//
// const ingredients = [
//     prompt("Let's make a pasta! " + ' Ingredient 1?'),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredients);

// Objects

// const newRestaurant = {foundIn: 1988, ...restaurant, founder: 'Giuseppe'};
// console.log(newRestaurant);

// Destructuring

// const [pizza, , risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects

// const {sat, ...weekDays} = restaurant.openingHours;
// console.log(weekDays);

// Functions

// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum);
// };
//
// add(5, 5, 5);
//
// const x = [15, 15, 15];
// add(...x);

// 04. Short Circuiting (&& and ||)

// Use ANY data type, return ANY data type, short-circuiting
// restaurant.numGuest is undefined => falsy value

// console.log('-----OR-----')

// setting a default value
// restaurant.numGuest = 0;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);
//
// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);
//
// console.log('-----AND-----')
//
// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushroom', 'spinach');
// }
//
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// 05. The Nullish Coalescing Operator (??)

// restaurant.numGuest = 0;
// const guest = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest);

// Nullish values : null and undefined
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// 06. Logical Assignment Operators

// const rest1 = {
//     name: 'Capri',
//     // numGuest: 20,
//     numGuest: 0,
// };
//
// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Rossi',
// };

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// OR assigment operator
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// Nullish assigment operator (null or undefined)

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// AND assigment operator

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';

// is replaced by '<ANONYMOUS>', because the value is true
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// 01. CODING CHALLENGE

// const game = {
//     team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ], [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//         'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };
//
// // 1.
//
// const [players1, players2] = game.players;
// console.log(players1, players2);
//
// //2.
//
// const [gk, ...filedPlayers] = players1;
// console.log(gk, filedPlayers);
//
// //3.
//
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
//
// //4.
//
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
//
// //5.
//
// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);
//
// //6.
//
// const printGoals = function (...players) {
//     console.log(`${players.length} goals where scored`);
//     console.log(players.toString());
// };
//
//
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Lewandowski', 'Kimmich');
// printGoals(...game.scored);
//
// //7.
//
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');


// 07. Looping Arrays: The for-of Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//
// for (const item of menu) {
//     console.log(item);
// }

// destruction

// for (const [i, el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}`);
// }


// 08. Enhanced Object Literals

// console.log(restaurant);

// 09. Optional Chaining (?.)

// With optional chaining

// console.log(restaurant.openingHours.mon?.open);

// Example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`)
// }
//
// // Method
//
// // True method exist
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
//
// // False method does not exist, and we go to second operand
// console.log(restaurant.orderIce?.(0, 1) ?? 'Method does not exist');
//
// // Arrays
//
// const users = [{name: 'Dani', email: 'hello@hello.com'}];
//
// console.log(users[0]?.name ?? 'user array empty');
