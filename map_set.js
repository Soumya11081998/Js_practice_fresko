//Map
const dogs = new Map([['fluffy', 10], ['barkie', 13]]);
console.log(dogs);
dogs.forEach((value, key) => console.log(key, value));



//Set
var set = new Set(["a", "a","e", "b", "c", "b", "b", "b", "d"]);
console.log(set); //logs Set {"a", "e", "b", "c", "d"}