console.log("============================================================================================")
console.log("                           File 1 - Fixed                                                   ")
console.log("============================================================================================")

// adding export {} removes the shared global scope
export {}

let x = "foo";
function fn() {return "There"}