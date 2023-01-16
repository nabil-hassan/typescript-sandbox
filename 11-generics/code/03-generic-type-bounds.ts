console.log("============================================================================================")
console.log("                     Generic Type Bounds                                                    ")
console.log("============================================================================================")

// type bounding uses 'extends' as per Java
interface Person {name:string, age:number}

function printAPerson<T extends Person>(t: T) {
    console.log(t.age + ":" + t.name);
}

printAPerson({"name" : "Bob", age: 34});