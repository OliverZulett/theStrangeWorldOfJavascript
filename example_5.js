// DECLARACIONES

function functionDeclaration() {
  console.log('soy una declarative function');
}
functionDeclaration();

// anonymous
const functionExpression = function fe() {
  console.log('soy una function expression');
}
functionExpression();

const anonymousFunction = function () {
  console.log('soy una anonymous function');
}
anonymousFunction();

const arrowFunction = () => {
  console.log('arrow function');
}
arrowFunction();

(() => {console.log('soy una immediately invoke function')})();

// PARAMETROS

function functionWithParams(param1, param2 = "value_by_default", param3) {
  console.log(`param1: ${param1}; param2: ${param2}, param3: ${param3}`);
}

functionWithParams(10, 11);
functionWithParams("param_1");
functionWithParams();
functionWithParams(10, 20, 30, 40, 50);
let params_array = ["a", "b", "c", "d", "e"];
functionWithParams(...params_array);

// RETURN
function multiply(param1, param2) {
  return param1 * param2;
}

let result = multiply(6, 9);
console.log(result);

let direct_result = ((param1, param2) => param1 * param2)(7, 8);
console.log(direct_result);

console.log(((param1, param2) => param1 * param2)(7, 8));

let array_numbers = [10, 20, 30, 40, 50];
const super_multiply = (...args) => {
  let result = 1;
  for (const value of args) result *= value;
  return result;
}

const super_multiply2 = (...args) => args.reduce((accumulator, value) => accumulator * value, 1);

console.log(super_multiply2(...array_numbers));

// NESTED
const nestedFunction = (...args) => {
  (() => console.log('Greetings coders !!!'))();
  function printStrings(string_value) {
    console.log(`I'm a string value: ${string_value}`);
  }
  var printNumbers = (number_value) => console.log(`I'm a number value: ${number_value}`);
  args.forEach(element => {
    if (typeof element === 'string') {
      printStrings(element)
    } else if (typeof element === 'number') {
      printNumbers(element)
    } else console.log('ninguna');
  });
}

var super_array_values = [
  1,2,54,65, "fdsa", "vfgdsaf", {
    a: "HB"
  }, 
  false,
  []
];

nestedFunction(...super_array_values);


// CLOUSURE

function closurePow(pow) {
  return (number) => number**pow;
};

let square = closurePow(2);
console.log(square(5));