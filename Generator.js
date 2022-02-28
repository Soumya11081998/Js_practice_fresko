console.log("\n-----------------------------------1st-------------------------- \n");
function* foo() {
    yield 'hi';
    yield 'dude';
}
let iterator = foo();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// iterator.next(); //Object {value: "hi", done: false}
// iterator.next(); //Object {value: "dude", done: false}
// iterator.next(); //Object {value: undefined, done: true}


console.log("\n-----------------------------------2nd-------------------------- \n");
function *foo() {
    yield 'hi';
    yield 'dude';
    return "bye";
}

let iterator1 = foo();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
// iterator.next();  // Object {value: "hi", done: false}
// iterator.next();  // Object {value: "dude", done: false}
// iterator.next();  // Object {value: "bye", done: true}
// iterator.next();  // Object {value: undefined, done: true}


console.log("\n-----------------------------------3rd-------------------------- \n");
function *foo() {
    yield* ['hi', 'hello'];        
}
function *bar() {
    yield* foo();
    yield "bye";        
}
let iterator2 = bar()
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
// iterator.next();  // Object {value: "hi", done: false}
// iterator.next();  // Object {value: "hello", done: false}
// iterator.next();  // Object {value: "bye", done: false}
// iterator.next();  // Object {value: undefined, done: true}

console.log("\n-----------------------------------4th-------------------------- \n");

function* person() {
    let age = yield 'Age please';
    console.log(age);                                                    
    let location = yield 'Your age is ' + age + 'Your location please....';
    console.log(location);
    return location; 
        }
let iterator3 = person();
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
//iterator3.next();    
// Object {value: "Age please", done: false}
//iterator3.next(10);  
// Object {value: "Your age is 10 
//              Your location please....", done: false}
//iterator3.next('LA') 
//   Object {value: "LA", done: true}