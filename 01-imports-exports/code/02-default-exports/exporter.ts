console.log("============================================================================================")
console.log("                           File With Exported Function                                      ")
console.log("============================================================================================")

export default function exportedFn() {
    return "I was exported from another file.";
}

// you can also define the default export as a separate statement
// export default exportedFn();