console.log("============================================================================================")
console.log("                           Tuples                                                           ")
console.log("============================================================================================")

// a Tuple is like a database record, i.e. a set of ordered columns with specific types
let my_tuple: [number, string, string] = [101, "John", "Doe"];

type Customer = [number, string, boolean];
let cust : Customer = [10, "Jane", false];
let customers: Customer[] = [cust, [22, "John", true], [33, "Bob", false]];