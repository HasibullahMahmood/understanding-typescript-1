let userInput: unknown;
userInput = 6;
userInput = 'Max';

let mynName: string;
// mynName = userInput  // !!! Error !!!

if (typeof userInput === 'string') {
	mynName = userInput; // works with if
}
