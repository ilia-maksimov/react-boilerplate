
export const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a + 0), 0);

export const uniqueElements = arr => [...new Set(arr)];

export const countBy = (arr, fn) =>
	arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
		acc[val] = (acc[val] || 0) + 1;
		return acc;
	}, {});
