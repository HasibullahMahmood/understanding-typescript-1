let userInput: unknown;
userInput = 6;
userInput = 'Max';

let mynName: string;
// mynName = userInput  // !!! Error !!!

if (typeof userInput === 'string') {
	mynName = userInput; // works with if
}

function generateError(message: string, code: number): never {
	throw { message, code };
}

generateError('An error occurred!', 500);
