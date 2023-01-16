console.log("============================================================================================")
console.log("                     Field Definition Approaches                                            ")
console.log("============================================================================================")

// define a class with fields explicitly specified
class Thing {
    score = 0; id: number; name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

// define a class that uses constructor inference to provide equivalent form of above
class InferredThing {
    score = 0;

    constructor(public id: number, public name: string) {
        this.id = id;
        this.name = name;
    }
}



console.log("============================================================================================")
console.log("                         Abstract Class                                                     ")
console.log("============================================================================================")

abstract class Animal {
    protected name: string;
    constructor(name: string) {this.name = name;}

    abstract type() : string;
}

class Cat extends Animal {
    type(): string {
        return "Cat";
    }

}

// notice the implicit call to  Animal's constructor - we didn't need to explcitly define a constructor in Cat
let cat : Cat = new Cat("Mittens");