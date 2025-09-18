function showMsg(text) {
	console.log(text);
}

showMsg("Hello World!");

function calc(a, b) {
	return a + b;
}

console.log(calc(3, 4));
console.log(calc(6, 7));
console.log(calc(8, 6));

function ret() {
	let num = 50;

	// data and logic workout

	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
	console.log("Hello");
};

logger();

const res = (a, b) => {
	return a + b;
}; // this function does not have this context!

console.log(res(2, 3));

///

const currencyUSD = 20;
const currencyEUR = 30;
const discount = 0.9;

function currencyConverter(amount, currency) {
	return amount * currency;
};

const convercion = currencyConverter(500, currencyEUR);

function promotion(result) {
	return discount * result;
}

console.log(promotion(convercion));