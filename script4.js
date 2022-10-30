"use strict";

if (4 == 9) {					//condition
	console.log('ok!');
} else {
	console.log('Error');
}

const num = 50;

if (num < 49) {
	console.log('Error');
} else if (num > 100) {
	console.log('Lot');
} else {
	console.log('ok!');
}

(num === 50) ? console.log('ok!') : console.log('Error');   //ternary operator

switch (num) {
	case 49:
		console.log('wrong');
		break;
	case 100:
		console.log('wrong');
		break;
	case 51:
		console.log('right');
		break;
	default:
		console.log('not this time');
		break;
}