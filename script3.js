const arr = ['a', 'b', 'c'];  //massif

arr[10] = '3456';

console.log(arr);

const arrObj = {
	a: 'a',
	'1': 'b',
	'2': 'c',
	abc: {
		df: [{}, {}],
		def: {

		}
	}
};
const b = 'b';

// arrObj.b = '1234';
arrObj[b] = '1234';

// console.log(arr[1]);  //element order (0,1,2,3...)
// console.log(arrObj[1])

console.log(arrObj['b'])
console.log(arrObj.b)

// const obj= {a: 1, b: 2}  //object
const obj = {
	Anna: 500,
	'Alice': 800
};