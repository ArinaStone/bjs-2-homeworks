function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}
	let avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (!arr || !arr.length) {
		return 0;
	} else {
		let sum = 0;
		for (let i = 0; i <= arr.length - 1; i++)
			sum += arr[i];
		return sum;
	}
}

function differenceMaxMinWorker(...arr) {
	if (!arr || !arr.length) {
		return 0;
	} else {
		let max = Math.max(...arr);
		let min = Math.min(...arr);
		return difference = max - min;
	}
}

function differenceEvenOddWorker(...arr) {
	if (!arr || !arr.length) {
		return 0;
	} else {
		let sumEvenElement = 0;
		let sumOddElement = 0;
		for (let i = 0; i <= arr.length - 1; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}
		return sumEvenElement - sumOddElement;
	}
}

function averageEvenElementsWorker(...arr) {
	if (!arr || !arr.length) {
		return 0;
	} else {
		let sumEvenElement = 0;
		let countEvenElement = 0;
		for (let i = 0; i <= arr.length - 1; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}
		return sumEvenElement / countEvenElement;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length - 1; i++) {
		let arr = arrOfArr[i];
		const result = func(...arr);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}