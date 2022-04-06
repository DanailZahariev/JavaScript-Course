"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-20, -10, -6, -1, "error", 9, 23, 17, 15, 14, 36, 5];
const concated = temperatures.concat(temperatures2);
const calcTempAmplitude = function (tempArr) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < tempArr.length; i++) {
    if (typeof tempArr[i] !== "number") {
      continue;
    }

    if (tempArr[i] < min) {
      min = tempArr[i];
    } else if (tempArr[i] > max) {
      max = tempArr[i];
    }
  }
  return max - min;
};

console.log(calcTempAmplitude(concated));
