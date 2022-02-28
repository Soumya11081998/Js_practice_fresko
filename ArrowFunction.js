const greet = (name = 'Soumya') => {
    return "Hello " + name
};

console.log(greet());


this.name = "abc";
let obj = {
    name: "XYZ",
    age: -88,
    operation: (()=>{console.log(this.name)})
}
obj.operation();
