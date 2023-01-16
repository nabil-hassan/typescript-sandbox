console.log("============================================================================================")
console.log("                           File With Imports                                                ")
console.log("============================================================================================")

import exportedFn from "./exporter";
import ExF from "./exporter";          // this is an alias for the above function

console.log(exportedFn());
console.log(ExF());