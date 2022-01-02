function add(num1: number, num2: number, showResult: boolean, phrase: string) {
	const result = num1 + num2;
	if (showResult) {
		return console.log(phrase + result);
	} else {
		return result;
	}
}

let number1: number;
number1 = 5;
const number2 = 2.7;

add(number1, number2, true, 'The result is: ');
