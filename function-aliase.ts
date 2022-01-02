type Person = { name: string; age: number };

const hasibullah: Person = {
	name: 'Hasibullah',
	age: 25,
};

console.log(hasibullah);

function add(n1: number, n2: number) {
	return n1 + n2;
}

function printValue(input: any) {
	console.log(input);
}

let combinedValues: (a: number, b: number) => number;
combinedValues = add;
// combinedValues = printValue;

console.log(add(2, 3));
