let x = "adjnswfi";
let y = 95498;
console.log(`Using Templates : ${x} , ${y} `);
console.log('Using normal String : %s , %d', x,y);

const sum = (a, b) => {
    return `The sum of ${a} and ${b} is ${a+b}`
}
console.log(sum(1,2));