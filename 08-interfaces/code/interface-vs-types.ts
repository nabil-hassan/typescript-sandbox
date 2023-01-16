console.log("============================================================================================")
console.log("                           TYPES                                                            ")
console.log("============================================================================================")

// types can be used to constraint a variable to a list of values
type PersonaNonGrata = "Bob" | "Jane" | "John";
    // => not valid     let the_person: PersonaNonGrata = "Phil";

// types can use intersections to combine existing types
type Multi = PersonaNonGrata | boolean;
let the_thing = false;


console.log("============================================================================================")
console.log("                           INTERFACES                                                       ")
console.log("============================================================================================")

// interfaces can define methods that MUST be implemented
// they can also include optional and readonly properties
interface Person {
    name: string, age: number,
    opt?: number,
    getId(x: number): number
}


// interfaces can use REOPENING to add new fields to an existing interface
interface Person {
    town: string
}

// interfaces can also use extends to inherit multiple other interfaces
interface Professional extends Person {
    occupation: string
}

let the_person : Professional = {"name" : "Wayne", "occupation" : "builder",
    "town" : "Warwick", "age" : 20, getId: (x: number) => 23 * x}
console.log(the_person.getId(2));

