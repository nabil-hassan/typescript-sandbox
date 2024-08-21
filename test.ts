const foo:string = "Hello"

console.log(foo);

type PnbErrorResponse = {
  errors: Array<{
    errorCode: string,
    errorMessage: string
  }>
}

const nonJson = "Test string";
const json = JSON.stringify({name: "Nabil"});
