"use strict";

let num = 50;

// while (num <= 55) {		// Loops(циклы)
// 	console.log(num);
// 	num++;
// }

// do {						// Loops
// 	console.log(num);
// 	num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {		// Loops
	if (i === 6) {
		// break;		// breaks the loop at this point i===6
		continue;		// skip that step i===6, and continue
	}
	console.log(i);
}