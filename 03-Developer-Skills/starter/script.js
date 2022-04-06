"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-20, -10, -6, -1, "error", 9, 23, 17, 15, 14, 36, 5];

const calcTempAmplitude = function (arr1, arr2) {

    const concated = arr1.concat(arr2);
    let min = 0;
    let max = 0;
    for (let i = 0; i < concated.length; i++) {
        if (typeof concated[i] !== "number") {
            continue;
        }

        if (concated[i] < min) {
            min = concated[i];
        } else if (concated[i] > max) {
            max = concated[i];
        }
    }
    return max - min;
};

console.log(calcTempAmplitude(temperatures, temperatures2));
