import {z} from "zod"

const Rule = z.object({
    name: z.string(),
    dayOfWeek: z.number().gte(0).lte(7)
});

console.log("Test");

let rule = Rule.parse({
    name: 'test',
    dayOfWeek: 8
});

console.log(rule);