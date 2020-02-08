const name = "Michael";

//We reserve some space in memory and 'name' it 'numOfYears'
let numOfYears = 9;

// 'let' allows us to re-assign.
// This REFERENCES 'numOfYears' in memory - RIPS OUT the '9' and replaces it with a '10'
numOfYears = 10;

// JS is a DYNAMICALLY TYPED LANGUAGE.
numOfYears = "ten";

numOfYears =
  // create a sentence that says the name and the number or years of experience.
  //The '+' is CONCATENATING our STRINGS.
  // '.' notation is used to access KEYS within an OBJECT.
  // 'log' is a METHOD.
  // We INVOKE the METHOD with ().
  // We pass in an ARGUMENT.
  console.log("My name is " + name + ".");

console.log(`My name is ${name}`);

// create a variable "timeOfDay" and assign it a string

// create a variable "greeting" that references a template literal
// use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"

// print "greeting"
console.log(greeting);
console.log(`good ${timeOfDay}`);
// create a new variable, but do not assign it a value
let something = undefined; // NEVER EVER DO THIS!

// 'null' represents the deliberate assignment of a 'nothing' value.
let someone = null; // RARELY DO THIS!

const useless = null;

// print the variable and its type
// ? what type should we expect?
console.log(something);
console.log(someone);

const x = 3;

const y = 4;

console.log(typeof x);
console.log(typeof y);

// assign the variable a value that indicates the variable is purposely nothing
// ? what value should we assign?

// print the variable and its type again
// ? what type should we expect?

// try to print a variable that does not exist
// ? what should we expect to print in the CLI?

// print "greeting" again
// ? will this line run?

// create a variable called "name" that references a string
let name = "mike";



    // create a variable called "favoriteSong" that references a string
    let favoriteSong = "mike";


    // create a variable called "wage" that references a number
    let wage = 7;

    // create a variable called "age" that references a number
    let age = 39


    // create a variable called "onlyChild" that references a boolean
    let onlyChild = true

    // create a variable called "satisfied" that references a boolean
    let satisfied = false

    // create a variable called "favoriteThing" that references ANY primitive value
    let favoriteThing = "blue"
    // print the data type of "favoriteThing"
    console.log (favoriteThing);

    // ! You heard a new song that became your favorite.
    // Reassign the variable "favoriteSong"
    favoriteSong = "blue";

    // ! You no longer like the type of data stored in "favoriteThing"
    // Reassign "favoriteThing" to a different primitive data type and print its type
    favoriteThing = seven
    console.log (seven);

    // ! Happy Birthday!
    // Reassign "age" to a new value
    age = 40

    // ! You got a big raise at work.
    // Reassign "wage" to a new value
    wage = 2

    // ! Your raise changed your job satisfaction.
    // Assign "satisfied" to true
    satisfied = true


    // use "console.log()" and "+" to print a sentence that includes two variables
console.log("blue"+"age");stst


// 'const' is not about immutability (ability to change ) - its about no reSSIGNMENT.
const me = {};

// I cannot reassign me
me = "23";

I can reassign the value of key inside of 'me'
me.name = "Mike";

const someone = {
  name: "dave",
  age: 22,
  pets: {
      cat: "Dora",
      dog: "Fido"
  }
};

// Error from doing
console.log(someone.pets.cat);

someone.name = "bill";
someone.occupation = "dev";
console.log(someone);

const me = {
  age: 23
}

console.log(me.age);

console.log(me[age]);

let keyINeed = "age";

console.log(me.keyINeed);

// I must use BRACKET NOTATION if I need to use a VARIABLE for my key
console.log(me[keyINeed]);
console.log(me["keyINeed"]);
















