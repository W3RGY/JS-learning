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


let obj = {
	"name": "Petr",
	"age": 25,
	"number": 313123122414123
};

for (let key in obj) {
	console.log(`Ключ ${key}, Значение ${obj[key]}`);
}

let arr = [5, 7, 9, 1, 0];
arr.forEach(function (item, i, array) {
	console.log(`Элемент: ${item}
	Индекс: ${i}
	Массив: ${array}`);
});



// Цикл WHILE
/*
// Синтаксис
while (Условие) {
	// Тело цикла
	// Тут будет выполняться код
}
*/
//------

/*
// Пример
let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}
//------

*/

/*
// Пример
let num = 5;
while (num) {
	console.log(num);
	num--;
}
*/
//------

/*
// Пример без {}
let num = 5;
while (num) console.log(num--);
//------
*/

/*
// Конструкция DO...WHILE
let num = 0;
do {
	console.log(num);
	num++;
} while (num < 0);

//=====================
*/

/*
// Цикл FOR
// Синтаксис
for (Начало; Условие; Шаг) {
	// Тело цикла
	// Тут будет выполняться код
}
//------
*/

/*
// Пример
for (let num = 0; num < 5; num++) {
	console.log(num);
}
*/
/*
Работа цикла for:
1) Выполняется начало - let num = 0
2) Выполняется условие - num < 5
3) Если условие true выполняется
	тело цикла - console.log(num)
4) Выполняется шаг - num++
Повтор начиная с пункта №2
*/
//------

/*
// «встроенное» объявление переменной
for (let num = 0; num < 5; num++) {
	console.log(num);
}
console.log(num);
//------
*/

/*
// Существующая переменная
let num;
for (num = 0; num < 5; num++) {
	console.log(num);
}
console.log(`Вывод вне цикла: ${num}`);

*/


/*

// Можно убрать любую часть цикла
let num = 0;
for (; num < 5; num++) {
	console.log(num);
}
//---
*/
/*
let num = 0;
for (; num < 5;) {
	num++;
	console.log(num);
}
*/
//---
/*
// Бесконечный цикл
let num = 0;
for (;;) {
	num++;
	console.log(num);
}
*/
//---

/*
// Директива break
let num = 0;
for (; num < 5; num++) {
	console.log(num);
	if (num == 2) break;
}
console.log(`Работа окончена, num = ${num}`);
//---
*/

/*
let num = 0;
for (; num < 5; num++) {
	if (num == 2) continue;
	console.log(num);
}
//---
*/

// Директива break/continue и "?"
/*
let num = 0;
for (; num < 5; num++) {
	(num != 2) ? console.log(num) : continue;
}
//---
*/

/*
firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 2) {
			continue firstFor;
		}
		console.log(size);
	}
}
*/


// Итоги и домашка
/*
1.	while – Проверяет условие перед каждой итерацией.
2.	do..while – Проверяет условие после каждой итерации.
3.	for (;;) – Проверяет условие перед каждой итерацией,
	есть возможность задать дополнительные настройки.

Чтобы организовать бесконечный цикл, используют
конструкцию while (true).
При этом он, как и любой другой цикл, может быть
прерван директивой break.

Если на данной итерации цикла делать больше
ничего не надо, но полностью прекращать цикл не
следует – используют директиву continue.

Обе этих директивы поддерживают метки, которые ставятся
перед циклом. Метки – единственный способ для break/continue
выйти за пределы текущего цикла, повлиять на выполнение внешнего.
Помним, что метки не позволяют прыгнуть в произвольное место кода,
в JavaScript нет такой возможности.

Конечно же в JavaScript существуют и другие методы перебора.
Например, перебор объектов или массивов. О них мы поговорим
в отдельных уроках, а пока домашка.
*/