console.log("============================================================================================")
console.log("                           INLINE OBJECT TYPES                                              ")
console.log("============================================================================================")

// example of inline type for an object variable
let my_cat : {"name" : String, "age" : number} = {"name" : "mittens", "age" : 5};

// example of inline type for a function parameter
function calculateSize(thing : {"weight" : number, "height" : number}) {
    return thing.height * thing.weight;
}

// example of inline type for a function return value
function buildDatasource(url: string, connectionTimeoutMs: number) : {"id" : number, "url" : string} {
    return {"id" : 101, "url" : url};
}

console.log("============================================================================================")
console.log("                           THE TYPE KEYWORD                                                 ")
console.log("============================================================================================")

// define a type - this can replace the inline types shown in the examples above
type Cat = {"name" : string,  "age" : number }

let my_other_cat : Cat = {"name" : "paws", "age" : 5};

function groomCat(cat : Cat) {}
groomCat({"name" : "sprinkles", "age" : 4});


console.log("============================================================================================")
console.log("                           NESTED OBJECTS                                                   ")
console.log("============================================================================================")

// nested objects can be used on inline or defined types
type Account = {
    "id" : number,
    "customer" : {
        "id" : number,
        "name" : string
    }
}

let new_account : Account = {"id" : 101, "customer" : {"id" : 99, "name" : "Lorem ipsum"}};

console.log("============================================================================================")
console.log("                           OPTIONAL FIELDS                                                  ")
console.log("============================================================================================")

// optional fields are specified using the ? operator after the field name
let incomplete_object: {"color" : string, "weight"? : number} = {"color" : "red"}


console.log("============================================================================================")
console.log("                           READONLY FIELDS                                                  ")
console.log("============================================================================================")

// readonly fields are specified using the readonly operator before the field name
let protected_object : {readonly "id" : number } = {"id" : 99}

// a value can be assigned to the readonly field on instantiation, but not thereafter
    // => this is illegal: protected_object.id = 101;


console.log("============================================================================================")
console.log("                           INTERSECTIONS                                                    ")
console.log("============================================================================================")

// intersections combine the fields of one or more types - either inline or explicitly defined
type Person = {"name" : string};
type Professional = {"occupation" : string}
type RetiredProfessional = Person & Professional & {"retirementYear" : number};

let retired_pro : RetiredProfessional = {name : "Bob the Builder", occupation: "builder", retirementYear: 2014};

console.log(retired_pro);
