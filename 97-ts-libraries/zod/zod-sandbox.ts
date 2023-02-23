import * as fs from 'fs';

let allBrands = fs.readFileSync('/tmp/dl/all_brands.json', 'utf-8').toString();

console.log(allBrands)