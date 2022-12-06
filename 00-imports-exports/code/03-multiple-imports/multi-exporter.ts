console.log("============================================================================================")
console.log("                           File With Exported Functions                                     ")
console.log("============================================================================================")

export function exFn1() {
    return "I am the first function to be exported.";
}

export function exFn2() {
    return "I am the second function to be exported.";
}

export default exFn1();   // we can have a default export too