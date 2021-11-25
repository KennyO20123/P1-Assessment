// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
  { brand: "Ford", model: "mustang", type: "convertible" },
  { brand: "Toyota", model: "camry", type: "sedan" },
  { brand: "Ram", model: "1500", type: "pickup" },
  { brand: "Hyundai", model: "Sonata", type: "sedan" },
  { brand: "Jeep", model: "wrangler", type: "suv" },
  { brand: "Nissan", model: "frontier", type: "pickup" },
];

let sedanTypes = carBrands.filter(function(type) {
  return type.type == "sedan";
});

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(string) {
  if (string === "")
    return "";
  else
    return reverseString(string.substr(1)) + string.charAt(0); //recursive call to return portion of the string + 1st char
}

console.log(reverseString("blue"));

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

const icecreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Rocky Road", "Neopolitan", "Butter Pecan"];

let longestData = cecreamFlavors.reduce(function (accumulator, value) {
  return accumulator.length > value.length ? accumulator : value
}, '');

console.log(longestData);

// 4.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005
let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];
function shop(arr) {
  const result = arr.reduce(function (acc, value) {
    return acc + value.price;
  }, 0);
  return result;
}

console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

//*Recursion is a different way of writing solutions that solves the problem (array) by breaking it into smaller problems and solving each separately.  Much like an infinite loop that's reiterating that calls upon itself to an end point.  Recursion apparently is everywhere and a developer may have used a form of the function without knowing i.e document.getElementById.

// *As stated earlier, Recursion functions by calling upon the same function again and again which is known as different input.  Once this process reaches its endpoint where there is an empty (or final) array, that is called the base case.  is the base case.  The first recursive input is countdown which prints numbers from whichever is imputed and counts down to 1.  The second function is sumRange which finds the range of numbers between 0 and what ever number is inputted (num).  Factorial is the third function ie: 4factorial =4! (4*3*2*1), this function works similar to sumRange.

// Example of sumRange algorithm:
function recursiveRange(x){
  if (x === 0 ) return 0;
  console.log(`x is: ${x}`)
  return x + recursiveRange(x-1);
}


//console.log(recursiveRange(5));

//*This creates a function that accepts a number then adds up all the numbers from 0 to the number passed to the function


//6. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

// *Inheritance is when a mechanism obtains the property of another class stated previously.
// *It allows you to reuse the fields and methods of that previously stated class.
// *Basically copying the information from the pior class into that new derived class
// *Example:
function Person(firstName, lastName) {
  this.FirstName = firstName || "unknown";
  this.LastName = lastName || "unknown";            
}

Person.prototype.getFullName = function () {
  return this.FirstName + " " + this.LastName;
}
function Student(firstName, lastName, schoolName, grade)
{
  Person.call(this, firstName, lastName);

  this.SchoolName = schoolName || "unknown";
  this.Grade = grade || 0;
}
//Student.prototype = Person.prototype;
Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("Bruce","Wayne", "XYZ", 10);
          
alert(std.getFullName()); // Bruce Wayne
alert(std instanceof Student); // true
alert(std instanceof Person); // true


/*  7.
 * flipBool takes an array of Boolean values
 * it should call map on the array and flip
 * each Boolean value to its opposite,
 * e.g., flipBool([true]) => [false]
 *       flipBool([false, true]) => [true, false]
 *       etc
 * then return the new array
 * Be sure to use map()!
 */

const flipBool = (arr) => {                
  let flipped = arr.map(function (bool) {
    return !bool                          
  })

};

// 8.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
