// CREACION DE OBJETOS

// ----> object literal
const new_literal_object = {};

// ----> new Object
const new_object = new Object(); // == {}
const new_array = new Array();
const new_date = new Date();
const new_map = new Map();

// ----> Object create
const new_object_create = Object.create({});


// Object function
function ObjectFunction(name, surname) {
  this.name;
  this.surname;
  this.printName = function() {
    return `I'm ${name} ${surname}`
  }
}

let person = new ObjectFunction('felipe', 'ramirez');


// ----> asignacion de parametros
const object_literal = {
  prop1: "property_1",
  prop2: 2,
  prop3: false,
  prop4: null,
  prop5: undefined,
  prop6: [
    1,2,3
  ],
  prop7: {
    name: "a name",
    age: 23,
    address: {
      street: "45",
      zone: "zone 1"
    }
  },
  prop8: (x) => (y) => x**y,
  "prop 9": `prop nine` 
}

object_literal["special property"] = new Date();
object_literal[""] = new Array();
object_literal[45] = new Map();

object_literal[false] = new Map();
object_literal[new_literal_object] = 'tengo un objeto como llave';



new_object.prop1 = "prop1";
new_object.prop2 = 2;
new_object.prop3 = false;
new_object.prop4 = null;
new_object.prop5 = undefined;
new_object.prop6 = [
  1,2,3
];
new_object.prop7 = {
  name: "a name",
  age: 23,
  address: {
    street: "45",
    zone: "zone 1"
  }
};
new_object.prop8 = (x) => (y) => x**y;


// access to object props dot, brackets
console.log(object_literal.prop1);
console.log(new_object["prop2"]);
console.log(object_literal["prop 9"]);
console.log(object_literal['special property']);
console.log(object_literal['']);
console.log(object_literal[45]);
console.log(object_literal[false]);
console.log(object_literal[new_literal_object]);

console.log((object_literal.prop8(10))(2));

console.log(object_literal.name);


// deleting properties
console.log(object_literal.prop1);
delete object_literal.prop1;
console.log(object_literal.prop1);
console.log(object_literal.prop2);
delete object_literal["prop2"];
console.log(object_literal.prop2);


// object reference
let object_to_clone = {
  a: "x",
  b: "y"
}

let cloned_object = object_to_clone;

console.log(cloned_object);
console.log(object_to_clone);
cloned_object.a = 100;
console.log(cloned_object);
console.log(object_to_clone);
object_to_clone.c = 30;
console.log(cloned_object);
console.log(object_to_clone);

const true_cloned_object = {...object_to_clone};

console.log(object_to_clone);
console.log(true_cloned_object);
true_cloned_object.a = 100;
console.log(object_to_clone);
console.log(true_cloned_object);
object_to_clone.c = 30;
console.log(object_to_clone);
console.log(true_cloned_object);

const assign_object = Object.assign({}, object_to_clone);
console.log(assign_object);

console.log(object_to_clone);
console.log(assign_object);
assign_object.a = 100;
console.log(object_to_clone);
console.log(assign_object);
object_to_clone.c = 30;
console.log(object_to_clone);
console.log(assign_object);


//mezclar
const obj_a = {
  x: "a",
  y: "b"
}
const obj_b = {
  z: "p",
  w: "q"
}

// const merged_assign_object = Object.assign({}, obj_a, obj_b);
// const merged_spread_object = {...obj_a, ...obj_b}

// true_cloned_object.a = 500;
// console.log(merged_assign_object)
// console.log(merged_spread_object)

const merged_assign_object = Object.assign({t: "m"}, obj_a, obj_b);
const merged_spread_object = {abc:44, ...obj_a, ...obj_b}

true_cloned_object.a = 500;
console.log(merged_assign_object)
console.log(merged_spread_object)
