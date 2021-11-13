GLOBAL_WITHOUT_VAR = 100;
var GLOBAL_WITH_VAR = 200;

let LOCAL_WITH_LET = 300; // local

console.log(GLOBAL_WITHOUT_VAR);
console.log(GLOBAL_WITH_VAR);
console.log(LOCAL_WITH_LET);

console.log(this); // browser

console.log(global); // node

// FOR NODE
VAR_IN_GLOBAL_SCOPE = `I'm a varible in the GLOBAL scope`;
var VAR_IN_LOCAL_SCOPE = `I'm a varible in the LOCAL scope`;
function checkScopes() {
  var VAR_INSIDE_FUNCTION_SCOPE = `I'm a varible in the FUNCTION scope`;
  console.log(VAR_IN_GLOBAL_SCOPE);
  console.log(VAR_IN_LOCAL_SCOPE);
  console.log(VAR_INSIDE_FUNCTION_SCOPE);
};

console.log(VAR_IN_GLOBAL_SCOPE);
console.log(VAR_IN_LOCAL_SCOPE);
// console.log(VAR_INSIDE_FUNCTION_SCOPE);

checkScopes();

console.log(global); // node


// FOR BROWSERS
VAR_IN_GLOBAL_SCOPE_1 = `I'm a varible in the GLOBAL scope`;
var VAR_IN_GLOBAL_SCOPE_2 = `I'm a varible in the GLOBAL scope too`;
let VAR_INSIDE_LOCAL_SCOPE;
function checkScopes() {
  var VAR_INSIDE_LOCAL_SCOPE = `I'm a varible in the LOCAL scope`;
  console.log(VAR_IN_GLOBAL_SCOPE_1);
  console.log(VAR_IN_GLOBAL_SCOPE_2);
  console.log(VAR_INSIDE_LOCAL_SCOPE);
};

console.log(VAR_IN_GLOBAL_SCOPE_1);
console.log(VAR_IN_GLOBAL_SCOPE_2);
// console.log(VAR_INSIDE_LOCAL_SCOPE);

checkScopes();

console.log(this); // browser


// difernce between var and no var
onclick = 1000
var onclick = 2999;