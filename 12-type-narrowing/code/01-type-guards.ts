console.log("============================================================================================")
console.log("                     Type Guards                                                            ")
console.log("============================================================================================")

// type of returns number, string, boolean, undefined or object
// nb null, arrays and objects all evaluate to 'object'

console.assert(typeof 9 === "number");

console.assert(typeof "foo" === "string");

console.assert(typeof false === "boolean");

console.assert(typeof [1,2,3] === "object");
console.assert(typeof {name: "joe"} === "object");
console.assert(typeof null === "object");

console.assert(typeof undefined === "undefined");