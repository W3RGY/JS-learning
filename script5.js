// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
// 	console.log('Im full')
// };

// console.log((hamburger && fries));  //boolean data type


// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);		// = 0
// console.log(1 && 5);		// = 5
// console.log(null && 5);		// = null
// console.log(0 && 'qwerty');		// = 0

// if (hamburger === 3 && cola ===1 && fries) {    // true, false, true
// 	console.log('We are full')
// } else {
// 	console.log('were leaving')
// };


// const hamburger = 3;
// const fries =0;
// const cola = 0;

// if (hamburger || cola || fries) {    // true(hamburger)
// 	console.log('We are full')
// } else {
// 	console.log('were leaving')
// };

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);   //last string(1st true)

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {    // ( true && false || true && true) == true
	console.log('We are full')
} else {
	console.log('were leaving')
};

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);    // 2 (last true)



console.log( NaN || 2 || undefined );		// 2

console.log( NaN && 2 && undefined );		// NaN

console.log( 1 && 2 && 3 );			// 3

console.log( !1 && 2 || !3 );		// !1

console.log( 25 || null && !3 );	// 25

console.log( NaN || null || !3 || undefined || 5);		// 5

console.log( NaN || null && !3 && undefined || 5);		// 5

console.log( 5 === 5 && 3 > 1 || 5);		//	true