"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		arr = [-b / (2 * a)];
	} else if (d > 0) {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = (percent / 100) / 12;
	let mortgageBody = amount - contribution;
	let monthlyPayment = mortgageBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
	let totalAmount = Number((monthlyPayment * countMonths).toFixed(2));
	return totalAmount;
}