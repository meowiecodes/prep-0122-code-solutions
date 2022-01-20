// Add 2 BNumbers Exrcise

var num1 = 2; var num2 = 2;

function addTwoNumbers(num1, num2) {
  return num1 + num2;

}

var sum = addTwoNumbers(num1, num2);
console.log('addTwoNumbers Exercise: ', sum);

// Hours to Minute Exercise

function convertHoursToMinutes(hours) {
  return (hours * 60) + ' minutes';

}

console.log(convertHoursToMinutes(2));

// Get Greeting Exercise

function getGreeting(name) {
  console.log('Hello, ' + name + '!');
}

getGreeting('Charlene');

// Add & Multiply by 5

function addAndMultiplyBy5(num1, num2) {
  var product = (num1 + num2) * 5;
  console.log(product);
}

addAndMultiplyBy5(10, 5);

// Multiply and Divide by 5

function multiplyAndDivideby5(num1, num2) {
  var quotient = (num1 * num2) / 5;
  console.log(quotient);
}

multiplyAndDivideby5(35, 10);

// Subtract 2 Numbers

function subtractTwoNumbers(num1, num2) {
  var difference = (num1 - num2);
  console.log(difference);
}

subtractTwoNumbers(22, 7);

// Circle Circumference

function getCircleCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log(circumference);

}

getCircleCircumference(5);

// Get Full name Exercise

function getFullName(firstName, lastName) {
  console.log(firstName + ' ' + lastName);
}

getFullName('Juan', 'Ramirez');

// Cube Exercise

function cube(number) {
  console.log(number * number * number);
}

cube(5);
