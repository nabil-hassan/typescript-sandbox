console.log("============================================================================================")
console.log("                     Instanceof                                                             ")
console.log("============================================================================================")

/** INSTANCE OF ONLY WORKS FOR CLASSES AND ARRAYS **/

class Lion {
    constructor(public name : string) {
        this.name = name;
    }
}
console.log(new Lion("Simba") instanceof Lion);

console.log(["1", "2", "3"] instanceof Array);


console.log("============================================================================================")
console.log("                     USER-DEFINED TYPE GUARD                                                ")
console.log("============================================================================================")

/** USER-DEFINED TYPE GUARDS CAN ALLEGEDLY BE USED TO CHECK FOR INTERFACES **/

/** HOWEVER AS THE EXAMPLE BELOW SHOWS, THEY ARE FLAWED! **/

interface Alien  {name:string, planet:string}
interface Person {name:string; age:number;}
class Professional implements Person {
    constructor(public name:string, public age: number)
    {this.name = name; this.age = age;}
}

let p : Person = {name: 'Jon', age: 32};
let alien : Alien = {name: 'Zerg', planet: 'Jupiter'};
let pro : Professional = new Professional('Jane', 35);

function isAPerson(o : Person | Alien) : o is Person {
    return (<Person> o).name !== undefined;
}

console.log("p   is a person = " + isAPerson(p));
console.log("pro is a person = " + isAPerson(pro));
console.log("a   is a person = " + isAPerson(alien));

console.log("============================================================================================")
console.log("                     DISCRIMINATED UNION                                                    ")
console.log("============================================================================================")

/** ANOTHER PATTERN TO INSTANCEOF CHECK INTERFACES - MARGINALLY MORE RELIABLE THAN THE ABOVE **/

/** ESSENTIALLY EACH INTERFACE HAS A DISCRIMINATOR PROPERTY WHICH CAN BE CHECKED - USE AN ENUM OR STRING **/

enum AnimalType {CAT, DOG, FISH, SHEEP}
interface Cat {type: AnimalType.CAT}
interface Dog {type: AnimalType.DOG}
interface Fish {type: AnimalType.FISH}
interface Sheep {type: AnimalType.SHEEP}

/** THE DEFAULT VALUE IN THE SWITCH STATEMENT MAKES SURE THAT THE ANIMAL WE PASS IN MUST MATCH ONE OF THE POSSIBLE VALUES **/
type Animal = Cat | Dog | Fish;

// try uncommenting this an commenting the type definition above to see the exhaustive check at work
// type Animal = Cat | Dog | Fish | Sheep;

function whichType(o: Animal) : string {
    switch (o.type) {
        case(AnimalType.CAT):
            return "cat";
        case(AnimalType.FISH):
            return "fish";
        case(AnimalType.DOG):
            return "dog";
        default:
            let _exhaustiveCheck : never = o;
            return _exhaustiveCheck;
    }
}

let cat : Cat = {type: AnimalType.CAT};
// let cat2 : Cat = {type: AnimalType.DOG}; // this wont work Cats must have type = CAT
let dog : Dog = {type: AnimalType.DOG};
let fish : Fish = {type: AnimalType.FISH};
let other = {};

console.log(whichType(cat));
console.log(whichType(dog));
console.log(whichType(fish));
