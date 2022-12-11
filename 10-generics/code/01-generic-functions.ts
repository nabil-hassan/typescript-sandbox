console.log("============================================================================================")
console.log("                     Generic Functions                                                      ")
console.log("============================================================================================")

// a function which simply returns any type of value it is given
function returnTheValue<T>(source : T):T {
    return source;
}
console.log(returnTheValue("Foo"));
console.log(returnTheValue(true));

// a function which returns a random value from an array
function returnRandomElement<T>(source: Array<T>): T {
    let rand: number = Math.floor(Math.random() * source.length);
    return source[rand];
}

function returnRandomElementV2<T>(source: T[]): T {
    let rand: number = Math.floor(Math.random() * source.length);
    return source[rand];
}

console.log(returnRandomElement(["A", "B", "C", "D"]));
console.log(returnRandomElementV2([1,2,3,4]));

console.log("============================================================================================")
console.log("                     Default Type Parameters                                                ")
console.log("============================================================================================")

// in this function, Typscript will return a variable of type number[], if no type bound is specified
function returnEmptyArray<T = number>():T[] {
    return [];
}
const numberArray = returnEmptyArray(); console.log(numberArray);            // numberArray type = number[]
const stringArray = returnEmptyArray<string>(); console.log(stringArray);    // stringArray type = string[]


console.log("============================================================================================")
console.log("                     Inferred Type Parameters                                               ")
console.log("============================================================================================")

function encloseInArray<T>(t : T) : Array<T> {
    return [t];
}
const singleNumberArray = encloseInArray(9); console.assert(typeof singleNumberArray[0] === 'number');
const singleStringArray = encloseInArray("abc"); console.assert(typeof singleStringArray[0] === 'string');
const singleObjectArray = encloseInArray({}); console.assert(typeof singleObjectArray === 'object');