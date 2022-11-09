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

/*
if (2 > 5) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/
/*
let first = 5;
let second = 5;

if (first === second) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
//Более сложное условие
if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
//Преобразование типов
if ("") {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
//Более короткая запись
//Код выполняется только если
//выражение в скобках вернет true
if (2 > 1) console.log(message);
*/

/*
if (58 / 2 > 80) {
	console.log(message);
} else {
	console.log('Условие не выполнено :(');
}
*/
/*
if (number > 10) {
	console.log(message);
} else {
	console.log('Условие не выполнено :(');
}*/

/*
if (number > 50) {
	console.log('5 больше 50');
} else if (number > 30) {
	console.log('5 больше 30');
} else if (number > 10) {
	console.log('5 больше 10');
} else if (number > 1) {
	console.log('5 больше 1');
} else {
	console.log('Условие не выполнено :(');
}
*/
/*
//Условный оператор "?"

let message = "Привет";

let messageEnd;
if (5 > 1) {
	messageEnd = ", Вася!";
} else {
	messageEnd = ", Оля!";
}

let messageEnd = 5 > 10 ? ", Вася!" : ", Оля!";

message += messageEnd;
console.log(message);

let message = 5 > 10 ? "Привет, Вася!" : "Привет, Оля!";
console.log(message);
*/