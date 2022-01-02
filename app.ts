enum Role {
	ADMIN,
	AUTHOR,
}

const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: Role;
} = {
	name: 'Hasibullah',
	age: 25,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN,
};

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}

console.log(Role);
