console.log("============================================================================================")
console.log("                     Generic Classes                                                        ")
console.log("============================================================================================")

class List<T> {
    constructor(public data : Array<T>) {this.data = data;}
    add(t: T) {this.data.push(t);}
    get(i: number) {return this.data[i];}
}

const myList : List<string> = new List<string>(["a", "b", "c"]);
myList.add("d"); console.log(myList.get(3));
