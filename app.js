console.log("am ready");

// Write a program that prints the numbers from 1 to 100.

const countToHundred = () => {
    for (let i = 0; i < 101; i++) {
        console.log( `numbers ${i}`)
    } 
}

// Write a program that prints the odd numbers from 1 to 100.

const oddNumberCheck = () => {
    for (let i = 0; i < 100; i++) {
        if (i % 2 !== 0 ) {
            console.log( `the odd numbers are ${i}`)
        }
    }
}

const evenNumberCheck = () => {
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0 ) {
            console.log( `the even numbers are ${i}`)
        }
    }
}

// Write a program that prints the sum of all numbers from 1 to 100.

const printAllSum = () => {
    let start = 0;
    for (i=0; i <= 100; i++) {
        start += i
    } return start
}

// Write a program that prints the sum of all even numbers from 1 to 100.
const sumAllEven = () => {
    let start = 0
    for (i=0; i <= 100; i+=2) {
        start += i 
    } return start
}

// Write a program that prints the sum of all odd numbers from 1 to 100.

const sumAllOdds = () => {
    let start = 0
    for (i=1; i <= 100; i+=2) {
        start += i 
    } return start
}

// Write a program that finds the maximum number in an array.


let arr = [10,26,32,65,87,98,29,62,171,100,42,76,10, 82, 45, 32, 86, 13, 82, 93, 40, 53]
const findMaxNum = () => {
    let maxNum = Math.max(...arr)
    return maxNum
}

// Write a program that finds the minimum number in an array.

const findMinNum = () => {
    let minNum = Math.min(...arr)
    return minNum
}

// Write a program that finds the average of an array of numbers.

const findAverage = (array) => {
    let start = 0;
    let average;
    for (i of array) {
        start += i
        average = Math.floor(start / array.length)
    } return average 
}

// Write a program that checks whether a number is prime or not. 

function isPrime(num) {
    // check if number is less than 2
    if (num < 2) {
      return false;
    }
  
    // check if number is 2
    if (num === 2) {
      return true;
    }
  
    // check if number is even
    if (num % 2 === 0) {
      return false;
    }
  
    // check odd divisors up to square root of num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
  
    // number is prime
    return true;
  }


// Write a program that generates a random number between 1 and 100

const randomNumGen = () => {
    const randomNum = Math.floor(Math.random() * 101)
    return randomNum
}

// Write a program that checks whether a string is a palindrome or not

let str = 'hannah'

const palindrome = (str) => {
    let newStr = str.split('').reverse().join('')
    if (str === newStr) {
        return `this is a palindrom`
    }  else return `this is not a palindrom`
}
console.log(palindrome(str))


// Write a program that converts a string to title case

const stringCaser = () => {
    let upperCaser = str.toUpperCase()
    return upperCaser
}

// Write a program that finds the length of the longest word in a string
function findLongestWord(str) {
    // split the string into an array of words
    const words = str.split(' ');
  
    // initialize a variable to store the longest word length
    let longestWordLength = 0;
  
    // loop through each word in the array
    for (let i = 0; i < words.length; i++) {
      // get the length of the current word
      const wordLength = words[i].length;
  
      // update the longest word length if the current word is longer
      if (wordLength > longestWordLength) {
        longestWordLength = wordLength;
      }
    }
  
    // return the length of the longest word
    return longestWordLength;
    }


// Write a program that reverses a string


let word = "the dog jumped over the lazy fox"    
    const reverseString = () => {
        let newWord = word.split('').reverse().join('')
        return newWord
    }

console.log(reverseString())