// // Instructions
// // 1.Create a function using function declaration named sum with one parameter of Array type, the returned result is the sum of all elements which are greater than 20.

function sum(arr) {
  const sumOfGreaterThan20 = arr
    .filter((num) => num > 20)
    .reduce((accum, current, index, array) => {
      return accum + current;
    }, 0);
  return sumOfGreaterThan20;
}
console.log(sum([15, 20, 25, 30, 35]));

// // 2. Create a function using function expression named getNewArray with one parameter of String Array, return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.

const getNewArray = function (strArr) {
  const newArr = strArr.filter(
    (str, index, strArr) => str.length > 5 && str.includes("a")
  );
  return newArr;
};
console.log(getNewArray(["hello", "belaya", "endeya", "abebe"]));

// // 3. Implement an arrow function with feature below:
// // concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']
const str = "hi";
const arr1 = [1, 2, 3];
const arr2 = ["Hello", "world"];
const concatAll = (a, b, c) => {
  return [...str, ...arr1, ...arr2];
};
console.log(concatAll(str, arr1, arr2));
