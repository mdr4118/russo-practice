const x = 2;
const y = 2;

const z = true;

console.log(x === y); //true
if (x === y) {
  console.log("x and y are the same");
}

// Objects are passed by or "compared by" reference
const me = {
  name: "mike"
};

const someone = {
  name: "mike"
};
console.log(me === someone); // false

console.log(me.name === someone.name);
