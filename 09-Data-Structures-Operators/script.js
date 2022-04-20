'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
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
    },

    order: function (staterIndex, mainIndex) {
        return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({
                                 staterIndex = 1,
                                 mainIndex = 0,
                                 time = '20:00',
                                 address,
                             }) {
        console.log(
            `Oder received! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, otherIngredients)
    }
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

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, BUT not Objects

const str = 'Danail';
const letters = [...str, ' ', 'Z.'];
console.log(letters);
console.log(...str);

const ingredients = [
    prompt("Let's make a pasta! " + ' Ingredient 1?'),
    prompt('Ingredient 2?'),
    prompt('Ingredient 3?'),
];
restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = {foundIn: 1988, ...restaurant, founder: 'Giuseppe'};
console.log(newRestaurant);

// Destructuring

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects

const {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays);

// Functions

const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};

add(5, 5, 5);

const x = [15, 15, 15];
add(...x)

