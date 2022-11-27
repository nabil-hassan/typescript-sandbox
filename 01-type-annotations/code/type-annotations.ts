console.log("============================================================================================")
console.log("                           TYPE ANNOTATIONS                                                 ")
console.log("============================================================================================")

// type annotations are labels which indicate the type of a variable
// once a type is assigned to a variable 'v' the values assigned to 'v' ust be of the same type

let str_var:string = "hello world";
let num_var:number = 99;
let bool_var:boolean = false;

    // str_var=101; => this is ILLEGAL

// type inference means typescript can automatically detect variable types if a value is assigned
let str_var_inferred = "hello world"; let num_var_inferred = 99; let bool_var_inferred = false;

    // bool_var_inferred="Foo-bool"; => this is ILLEGAL

// the 'any' type means any type can be assigned to a variable
let any_var:any = "I am flexible";
any_var = false;  // this is legal!

// you cannot rely on type inference when using delayed initialisation, as typescript infers 'any' as the type of v
let delayed_var;

delayed_var = Math.random() < 0.5 ? "Less" : "More";
delayed_var = false;  // notice how we were able to switch types even though we wanted a String!!!!