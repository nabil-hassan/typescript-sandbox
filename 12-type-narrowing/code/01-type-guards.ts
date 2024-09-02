console.log("============================================================================================")
console.log("                     Type Guards                                                            ")
console.log("============================================================================================")

// type of returns number, string, boolean, undefined or object
// nb null, arrays and objects all evaluate to 'object'

type Primitive = {
  id: string,
  name: string,
  age: number
};
const y:any = {id: "1", age: 23};

console.log(isPrimtive(y))


function isPrimtive(o: unknown): o is Primitive {
  if((o as Primitive).id){
    return true
  }
  return false
}

if (y as Primitive !== undefined) {
  console.log("y is a Primitive");
  // we can assume server.address() can be converted to AddressInfo
} else {
  console.log("y is not a Primitive");
}

console.assert(typeof 9 === "number");

console.assert(typeof "foo" === "string");

console.assert(typeof false === "boolean");

console.assert(typeof [1,2,3] === "object");
console.assert(typeof {name: "joe"} === "object");
console.assert(typeof null === "object");

console.assert(typeof undefined === "undefined");