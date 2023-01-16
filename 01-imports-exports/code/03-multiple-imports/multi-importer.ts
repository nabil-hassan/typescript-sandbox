console.log("============================================================================================")
console.log("                           File With Imported Functions                                     ")
console.log("============================================================================================")

import {exFn1, exFn2 as ExF2} from "./multi-exporter";

console.log(exFn1());
console.log(ExF2());