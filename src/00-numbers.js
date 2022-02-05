/**
 * Add all numbers in the array together to produce a single number.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The sum of all numbers in the array.
 */

function addAllNumbers(values) {
  let singleNumSum = 0;
  for(let i = 0; i < values.length; i++){
    singleNumSum += values[i];
  }
  return singleNumSum;
}

/**
 * Multiply each number in the array by 2 and return a new array with the doubled values.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of whole numbers.
 */
function doubleAllNumbers(values) {
  let doubledValues = [];
  for(let value of values){
    doubledValues.push(value * 2)
  }
  return doubledValues
}

/**
 * Return an array of only the even numbers in the inputted array.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of only even numbers.
 */
function getAllEvenNumbers(values) {
  let evenNums = [];
  for(let even of values){
    if(even % 2 === 0){
      evenNums.push(even);
    }
  }
  return evenNums;
}


/**
 * Return the number given if it is in the array. Otherwise, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @param {number} val - A specific value to find.
 * @returns {number|null} - The found number or `null`.
 */
function findNumberByValue(values, val) {
  let foundNum = null;
  for(let found of values){
    if(found === val){
      foundNum = val;
    }
  }
  return foundNum;
}

/**
 * Return `true` if all numbers in the array are negative. Otherwise, return `false`. Ignore `0` in determining whether or not an array includes all negative numbers.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {boolean} - Whether or not all numbers in the array are negative.
 */

function allNumbersAreNegative(values) {
 let negNums = true;

 if(values.length === 0){
   return false;
 }

  for(let i = 0; i < values.length; i++){
    if(values[i] > 0){
      negNums = false;
    }
  }
 return negNums;
}


/**
 * Return the largest number in the array. If the array is empty, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The largest number in the array.
 */
function getLargestNumber(values) {
  let largestNum = null;
  let bigNum = values[0]

  for(let i = 1; i < values.length; i++){
    if(bigNum < values[i]){
      bigNum = values[i];
      largestNum = bigNum;
    }
  }
return largestNum;
}

module.exports = {
  addAllNumbers,
  doubleAllNumbers,
  getAllEvenNumbers,
  findNumberByValue,
  allNumbersAreNegative,
  getLargestNumber,
};
