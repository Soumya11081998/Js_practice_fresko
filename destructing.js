//Object Destructuring
let obj = { a: 2, b: "abc" };
obj.a = 9;
console.log(obj.a);
console.log(obj.b);
console.log(obj);

var {firstName:first,lastName:last,...details}={
    firstName:  "Neha",
    lastName:   "Singh",
    age:     40,
    city:   "chennai",
    phone:   980000000
}

console.log (first , details);

//Array Destructuring
//Taking array elements directly into variables:
var [one, two, three, four] = ["chennai", "mumbai", "goa", "cochin"];  
console.log(one);//  => chennai
//Skipping values and taking second array element in variable two:
var [,two,,]=["chennai", "mumbai", "goa", "cochin"];
console.log(two);//  => mumbai
//Destructuring Nested Arrays:
const [one1, two1, three1] = [1, [2, 3], [4, 5]];   
console.log([one1, two1, three1]); 
//one=> 1 two=> [2,3], three=>[4,5]

const { one: a, two: b, three: c } = { one: 1, two: 2, three: { four: 4, five: 5 } }; 
console.log({ one: a, two: b, three: c }); 
const { one2, two2, three2, four2 = 4 } = { one2: 1, two2: 2, three2: 3 };
console.log({ one2, two2, three2, four2 });

//You18:48
var states = [['Tamilnadu'], ['Punjab', 'Haryana']];
const [Chennai, Chandigarh] = states;

console.log({ Chennai, Chandigarh });
//Maria Rafique18:49
const states1 = [Chennai1, Chandigarh1] = [['Tamilnadu'], ['Punjab', 'Haryana']];

console.log({ Chennai1, Chandigarh1 });