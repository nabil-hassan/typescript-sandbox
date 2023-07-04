// import * as fs from 'fs';
import z from 'zod';

// let allBrands = fs.readFileSync('/tmp/dl/all_brands.json', 'utf-8').toString();

// console.log(allBrands)

const person = z.object({
  id: z.number(),
  name: z.string()
});

const arrayOfPerson = z.array(person);

const result = arrayOfPerson.parse([]);

console.log(result);