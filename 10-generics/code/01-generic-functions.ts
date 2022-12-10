console.log("============================================================================================")
console.log("                     Generics                                                               ")
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

