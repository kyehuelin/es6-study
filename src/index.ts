interface Person {
    name: string;
    age: number;
    hobbies: string[];
}

enum Role {
    ADMIN, READ_ONLY, GUEST
}

const person: Person = {
          name: 'Kye',
    age: 30,
    hobbies: ['tennis', 'bowling', 'football', 'gym']
};

const array: any[] = ['hello'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

const num: number = 10;
const bool: boolean = false;
const str: string = 'string';

const role: [number, string, number] = [20, 'hello', 20];
