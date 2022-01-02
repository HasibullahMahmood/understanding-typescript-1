const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // Tuple
} = {
	name: 'Hasibullah',
	age: 25,
	hobbies: ['Sports', 'Cooking'],
	role: [0, 'Admin'],
};

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}
