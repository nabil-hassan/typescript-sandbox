console.log("============================================================================================")
console.log("                     Truthiness                                                            ")
console.log("============================================================================================")

// the falsiness statement if (!var) checks if variable is undefined, null, false, or a string with length = 0:
const undefinedVar = undefined;
if (!undefinedVar) console.log("undefinedVar: falsiness guard fired");

const nullVar = null;
if (!nullVar) console.log("nullVar: falsiness guard fired");

const falseVar = false;
if (!falseVar) console.log("falseVar: falsiness guard fired");

const emptyStrVar = "";
if (!emptyStrVar) console.log("emptyStrVar: falsiness guard fired");


// the truthiness check obviously does the inverse - here the string is one char long so considered true
const len1StrVar = " ";
if (len1StrVar) console.log("len1StrVar: truthiness guard fired");

console.log("name" in {"name" : "Jon", "occupation" : "king"});