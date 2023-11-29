"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let root;
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant === 0) {
		root = -b / (2 * a);
		arr.push(root);
	} else if (discriminant > 0) {
		root = (-b + Math.sqrt(discriminant)) / (2 * a);
		arr.push(root);
		root = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentPerMounth = percent / 100 / 12;
	let loanSum = amount - contribution;
	let payPerMounth = loanSum * (percentPerMounth + (percentPerMounth / ((Math.pow(1 + percentPerMounth, countMonths)) - 1)));
	let totalMortgage = (payPerMounth * countMonths).toFixed(2);
	return Number(totalMortgage);
}

