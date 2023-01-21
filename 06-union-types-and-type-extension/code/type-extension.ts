type MyType = {
    id:string,
    name:string,
    age:number
}

// Use Omit to extend MyType but exclude the age property
interface UserType extends Omit<MyType, 'age'> {
    userId: string; 
}
let ut:UserType = {"id" : "1", name: "", userId : ""}; console.log(ut);

// Use Pick to cherry pick the id and name properties
interface CustomerType extends Pick<MyType, 'id' | 'name'> {
    country : string
}
let ct:CustomerType = {id:"", name: "", country: ""}; console.log(ct);