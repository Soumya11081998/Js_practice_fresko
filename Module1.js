// Area function
let area = function (length, breadth) {
    let a = length * breadth;
    console.log('Area of the rectangle is ' + a + ' square unit');
}
  
// Perimeter function
let perimeter = function (length, breadth) {
    let p = 2 * (length + breadth);
    console.log('Perimeter of the rectangle is ' + p + ' unit');
}
module.exports = {
    area,
    perimeter
}