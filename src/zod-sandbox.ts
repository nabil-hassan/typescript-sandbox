import * as fs from 'fs';
import z from 'zod';
import eventsSchema from "./schema";

let allBrands = JSON.parse(fs.readFileSync('/tmp/dl/all_brands.json', 'utf-8').toString());
let allCats = JSON.parse(fs.readFileSync('/tmp/dl/all_categories.json', 'utf-8').toString());
let allOrgs = JSON.parse(fs.readFileSync('/tmp/dl/all_orgs.json', 'utf-8').toString());
let accSync = JSON.parse(fs.readFileSync('/tmp/dl/account_sync.json', 'utf-8').toString());
let test = JSON.parse(fs.readFileSync('/tmp/dl/from_test.json', 'utf-8').toString());

let accJson = eventsSchema.parse(accSync);
console.log("Validated account sync");

let brandsJson = eventsSchema.parse(allBrands);
console.log("Validated brand");

let testJson = eventsSchema.parse(test);
console.log("Validated test");

let catsJson = eventsSchema.parse(allCats);
console.log("Validated cats");

let orgsJson = eventsSchema.parse(allOrgs);
console.log("Validated orgs");




console.log("Validated correctly")



