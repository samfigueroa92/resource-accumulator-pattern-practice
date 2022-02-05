/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
  let combinedStr = '';
  for(let str of words){
    combinedStr += str;
  }
  return combinedStr;
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of whole numbers.
 */
function repeatAllWords(words) {
  let repeatedArr = [];
  for(let i = 0; i < words.length; i++){
    repeatedArr.push(words[i] + words[i])
  }
  return repeatedArr;
}

/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */
function getSmallWords(words) {
  let smallWords = [];
  for(let i = 0; i < words.length; i++){
    if(words[i].length <= 4){
      smallWords.push(words[i])
    }
  }
  return smallWords;
}

/**
 * Return the first word that includes the character. If no word is found, return `null`.
 *
 * @param {string[]} words - An array of strings.
 * @param {string} character - A single character.
 * @returns {string|null} - The found word or `null`.
 */
function findWordWithCharacter(words, character) {
  let foundWordWithChar = null;
  for(let char of words){
    if(char.includes(character)){
      foundWordWithChar = char;
      break;
    }
  }
  return foundWordWithChar;
}

/**
 * Return `true` if all words are in all caps. Otherwise, return `false`.
 *
 * @param {string[]} words - An array of strings.
 * @returns {boolean} - Whether or not all words are in all caps.
 */
function allWordsAreAllCaps(words) {
  let allUpperCase = true;
  for(let i = 0; i < words.length; i++){
    if(words[i] !== words[i].toUpperCase()){
      allUpperCase = false;
    }
  }
  return allUpperCase;
}

/**
 * Return the first longest word.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - The first word that is the longest.
 */
function getLongestWord(words) {
  let longestWord = words[0];
  for(let i = 1; i < words.length; i++){
    if(words[i].length > longestWord.length){
      longestWord = words[i]
    }
  }
  return longestWord;
}

module.exports = {
  combineAllWords,
  repeatAllWords,
  getSmallWords,
  findWordWithCharacter,
  allWordsAreAllCaps,
  getLongestWord,
};
