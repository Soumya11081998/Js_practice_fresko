//const { Console } = require("console");

console.log(`Sample of how Transpiling Works
Function to add any number of integer arguments Code in ES6:`);

let additionResult=(...arr)=>{
    var sum=0;
    for(var i=0; i<arr.length; i++){
    sum+=arr[i];
    }
return sum;
}
console.log(additionResult(1,2,3,4,5,6,7,8,9));
console.log(`Code Transpiled by Babel into ES5:`);

var additionResult1 = function additionResult1() {
    for (var _len = arguments.length, 
         arr = Array(_len), _key = 0; 
         _key < _len; _key++) {
            arr[_key] = arguments[_key];
    }
var sum1 = 0;
for (var i = 0; i < arr.length; i++) {
        sum1 += arr[i];
    }
return sum1;
};
console.log(additionResult1(1,2,3,4,5,6,7,8,9));
//Output of both these functions would be same. additionResult(1,2,7,5,6); // output: 21