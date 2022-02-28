class ArithmeticOperations{

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    multiply() {
        return this.x * this.y;
    }
}
class Addition extends ArithmeticOperations {
    sum() {
        return this.x + this.y;
    }
}
let operation = new Addition(2, 3);
console.log(operation.sum());  //  5
console.log(operation.multiply()); // 6
class DoubleAdd extends Addition {
    doubleAdd() {
        return 2 * super.sum();
    }
}
var x = new DoubleAdd(2, 3);
console.log(x.doubleAdd());      //  10

class point {
    constructor(a, b ,c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    // Getter
    get distance() {
        return this.calcDist();
    }
    // Method
    calcDist() {
    return Math.sqrt((Math.pow(this.a-this.b,2))+(Math.pow(this.c-this.d,2)));
    }
}
const dist = new point(10, 6, 8, 5);
console.log(dist.distance); // 5
  


class Car {
    constructor(name, distance) {
      this.name = name;
      this.distance = distance;
    }
    carDistance(){
      return `${this.name} had travelled for ${this.distance} miles`
    }
 }
 let Car1 = new Car('Audi', 100);
 const msg = Car1.carDistance();
 console.log(msg);//---this statement should print the message---Audi had travelled for 100 miles
 //module.exports = {msg}