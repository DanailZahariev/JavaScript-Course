"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-20, -10, -6, -1, "error", 9, 23, 17, 15, 14, 36, 5];

const calcTempAmplitude = function (arr1, arr2) {

    const concat = arr1.concat(arr2);
    let min = 0;
    let max = 0;
    for (let i = 0; i < concat.length; i++) {
        if (typeof concat[i] !== "number") {
            continue;
        }

        if (concat[i] < min) {
            min = concat[i];
        } else if (concat[i] > max) {
            max = concat[i];
        }
    }
    return max - min;
};

console.log(calcTempAmplitude(temperatures, temperatures2));
