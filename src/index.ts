import "./main.css";
import "./abstract";

type Person = {
  name: string;
  age: number;
};

type People = {
  [person: string]: Person;
};
type Strings = {
  [strings: string]: string;
};

const strings: Strings = {
  asdf: "string1",
  string2: "string2",
};

const people: People = {
  harry: {
    name: "harry",
    age: 50,
  },
  john: {
    name: "john",
    age: 32,
  },
};

const person: Person = {
  name: "kye",
  age: 30,
};

console.log(person, people);
