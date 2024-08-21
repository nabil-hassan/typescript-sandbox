import {z} from "zod"

const Rule = z.object({
    name: z.string(),
    dayOfWeek: z.number().gte(0).lte(7),
    filename: z.string().endsWith(".csv", "File must be a .csv")
});

console.log("Test");

let rule = Rule.parse({
    name: 'test',
    dayOfWeek: 6,
    filename: "my.csv"
});

console.log(rule);

let x = {name: 'jon', age: undefined};
