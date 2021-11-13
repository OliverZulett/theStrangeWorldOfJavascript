// aritmeticos
console.log(9 + 9);
console.log(9 - 9);
console.log(9 * 9);
console.log(9 / 9);
console.log(9 % 9);

console.log("9" * "9");
console.log(-9 + "9");
console.log(+"9" -9);

// unarios
console.log(+9);
console.log(-9);
console.log(Number("99"));
console.log(+"77");
console.log(+"77" - 87);
console.log(-"99" + 87);
console.log(-"99" + "87");
console.log("99" + "87");
console.log(-(-"99"));

// asignacion
let x = 99;
let y = 100;
console.log(x);
console.log(x+=y);
console.log(x-=y);
console.log(x*=y);
console.log(x/=y);
console.log(x%=y);

// comparacion
console.log(100 == 100);
console.log(100 == "100");
console.log(100 == 100.1);
console.log(0 == false);
console.log(0 == true);

console.log(100 === 100);
console.log(100 === "100");
console.log(100 === 100.1);
console.log(0 === false);
console.log(0 === true);

console.log(100 != 100);
console.log(100 != "100");
console.log(100 != 100.1);
console.log(0 != false);
console.log(0 != true);

console.log(100 !== 100);
console.log(100 !== "100");
console.log(100 !== 100.1);
console.log(0 !== false);
console.log(0 !== true);

console.log(100 < 100);
console.log(100 < "100");
console.log(100 < 100.1);
console.log(0 < false);
console.log(0 < true);

console.log(100 > 100);
console.log(100 > "100");
console.log(100 > 100.1);
console.log(0 > false);
console.log(0 > true);

// logical
console.log(true && true); // si la izquierda es true evalua la derecha y retorna
console.log(true && false);
console.log(false && true); 

console.log(1 && true);
console.log(true && 1);
console.log("true" && 1);
console.log("false" && "true");
console.log(2 && 7);
console.log(7 && 2);

console.log(typeof (1 && true));
console.log(typeof (true && 1));
console.log(typeof ("true" && 1));
console.log(typeof ("false" && "true"));
console.log(typeof (2 && 7));
console.log(typeof (7 && 2));

console.log(true || true); // si la derecha es true evalua la izquierda y retorna
console.log(true || false);
console.log(false || true); 

console.log(1 || true);
console.log(true || 1);
console.log("true" || 1);
console.log("false" || "true");
console.log(2 || 7);
console.log(7 || 2);

console.log(typeof (1 || true));
console.log(typeof (true || 1));
console.log(typeof ("true" || 1));
console.log(typeof ("false" || "true"));
console.log(typeof (2 || 7));
console.log(typeof (7 || 2));


console.log(1 && !true);
console.log(!true && 1);
console.log(!"true" && 1);
console.log(!"false" && "true");
console.log(!2 && 7);
console.log(!7 && 2);
console.log(!null && 2);
console.log(!undefined && 2);


//concatenacion
console.log("789" + "456");
console.log(789 + "456");
console.log("789" + 456);
console.log(789 + 456);
console.log(true + "33");
console.log(null + "33");
console.log(undefined + "33");


// condicional
console.log(true > false ? "true" : "false");
console.log(true < false ? "true" : "false");