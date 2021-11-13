// if-else
if (true) console.log("simple if");
if (true) {
  console.log("simple if");
  console.log("something else");
}
let value = false;
if (value) {
  console.log("if true");
} else {
  console.log("if false");
}

let new_value = "10";
if (typeof new_value === "number") {
  console.log(`I'm a number`);
} else if (new_value === 10) {
  console.log(`I'm strict equal to 10`);
} else if (new_value == 10) {
  console.log(`I'm equal to 10`);
}

// switch

let switch_value = 40;
switch (switch_value) {
  case 10:
    console.log(`I'm 10`);
    break;
  case 20:
    console.log(`I'm 20`);
    break;
  case 30:
    console.log(`I'm 30`);
    break;
  default:
    console.log(`I'm ${switch_value}`);
    break;
}


// while
let while_value = 0;
while(while_value) console.log(`While something is true`);

while (while_value < 0) {
  console.log(`Hello World!!!`);
  while_value ++;
}

do {
  console.log(`Do while`);
  while_value ++;
} while (while_value < 0);

// for
for (let index = 0; index < 3; index++) {
  console.log('Hello from for!',  index);
}
for (let index = 3; index > 0; index--) {
  console.log('Hello from for inverse!', index);
}

// for in ---> solo con objetos
let person = {
  name: 'javier',
  age: 34,
  dni: '544325 - LP',
  phone: '+591 - 7894510',
  gender: true,
  // name: 'orlando',
}

// let person_name;
for(const property in person) {
  var person_name;
  // let person_name;
  console.log(`${property}: ${person[property]}`);
  console.log(typeof property);
  if (property == "name") {
    person_name = person[property];
  }
  if (property == 'age') {
    if (person[property] > 18) {
      console.log(`${person_name} es mayor de edad`);
    } else {
      console.log(`${person_name} es menor de edad`);
    }
  }
}


// for of

let array_value = [
  person,
  10, 
  `soy un string`,
  false,
  undefined,
  [
    person_name,
  ]
];

for (let index = 0; index < array_value.length; index++) {
  const element = array_value[index];
  console.log(element);
}

for (const value of array_value) {
  console.log(value);
}

// jumps
for (let index = 0; index < 3; index++) {
  if (index === 1) {
    break;
  }
  console.log('Hello from for!',  index);
}

for (let index = 0; index < 3; index++) {
  if (index === 1) {
    continue;
  }
  console.log('Hello from for!',  index);
}


for (let index = 0; index < array_value.length; index++) {
  if (typeof array_value[index] === 'undefined') {
    continue;
  }
  const element = array_value[index];
  console.log(element);
}