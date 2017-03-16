//Do not change any of the function names

function multiplyByTen(num) {
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  var difference = num - 5;
  return difference;
}

function areSameLength(str1, str2) {
if (str1.length === str2.length)
{
  return true;
}
return false;
}

function areEqual(x, y) {
if (x === y)
{
  return true;
}
return false;
}

function lessThanNinety(num) {
  if (num < 90)
  {
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  if (num > 50)
  {
    return true;
  }
  return false;
}

function add(x, y) {
var sum = x + y;
return sum;
}

function subtract(x, y) {
  var difference = x - y;
  return difference;
}

function divide(x, y) {
  var quotient = x/y;
  return quotient;
}

function multiply(x, y) {
 var product = x * y;
 return product;
}

function getRemainder(x, y) {
  var remainder = x % y;
  return remainder;
}

function isEven(num) {
 if (num % 2 == 0)
 {
   return true;
 }
 return false;
}

function isOdd(num) {
  if (num % 2 == 1)
  {
    return true;
  }
  return false;
}

function square(num) {
var square = Math.pow(num , 2);
return square;
}

function cube(num) {
var cube = Math.pow(num , 3);
return cube;
}

function raiseToPower(num, exponent) {
  var power = Math.pow(num, exponent);
  return power;
}

function roundNumber(num) {
  var round = Math.round(num);
  return round;
}

function roundUp(num) {
  var round = Math.ceil(num);
  return round;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  var greeting = str + '!';
  return greeting;

}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  var combination = firstName + ' ' + lastName;
  return combination;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
  var greeting = 'Hello' + ' ' + name + '!';
  return greeting;
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
 var area = length * width;
 return area;
}

function getTriangleArea(base, height) {
var area = .5*base*height;
return area;
}

function getCircleArea(radius) {
  var area = Math.round(3.14 * Math.pow(radius, 2));
  return area;
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
  var area = length * width * height;
  return area;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
