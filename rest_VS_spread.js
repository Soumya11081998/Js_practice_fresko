//rest
function name(...params) {
    console.log(...params);
}
name(3, 2, 5, 565, 8888);

//spread
function name2(a, b, c) {
    console.log(a, b, c);
}
let parameter = [0, 78, 9, 34];
name2(...parameter);

//practice
function spreadParams(firstParam, secondParam, thirdParam) {
    console.log('firstParam => ', firstParam);
    console.log('secondParam => ', secondParam);
    console.log('thirdParam => ', thirdParam);
}
spreadParams(1, 2, 3);

//You21:45
function sum(...numbers) {
	return numbers.reduce((accumulator, current) => {
		return accumulator += current;
	});
};
console.log(sum(1,3,5,7,9));

//Maria Rafique21:47
const sum1 = (...args) => {
let total = 0;
   for(let number of args){
      total += number;
   }
   return total;
}
console.log(sum1(2,4,6,8));
