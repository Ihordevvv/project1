






const data = [5, 10, 'Shopping', 20, 'Homework'];

// Пишем решение вот тут
for (let i = 0; i < data.length; i++) {
	if (data[i] === 'number') {
		data[i] = data[i] * 2;
	} else if (data[i] === 'string') {
		data[i] += ' - done';
	} else break;
}
console.log(data);




function calc() {
	let sum = 5 + 3;
	return sum;
}

console.log(calc());
  


//
// Упражнение 6
//


//1
function sayHello(x) {
	let userName = `Привет, ${x}`;
	return userName;
}
console.log(sayHello('Pidor'));


//2
function returnNeighboringNumbers(x) {
	const arr = [];
	for (let i = 0; i < 3; i++) {
		arr[i] = x - 1 + i;
	}
	return arr;
}
console.log(returnNeighboringNumbers(100));

//3
function getMathResult(x, j) {
	let str = '';
	let y = 0;
	if (typeof(j) === 'string' || j <= 0) { 
		str = x;
	} else {
		for(let i = 1; i <= j; i++) {
			y += x;
			if (i === j) {
				str += y; 
			} else {
				str += y + '---';
			}
		}
	}
	return str;
}
console.log(getMathResult(8, 5));



function min(a, b) {
	return (a > b) ? a : b;
}

console.log(min(7, 6));

function pow (a, b) {
	return a ** b;
}

console.log(pow(2, 3));