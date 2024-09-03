// TIPOS PRIMITIVOS
let myName: string = "Bob"
let numberOfWheels: number = 4
let isStudent: boolean = false

// NESTED OBJECT
type Address = {
    street: string,
    city: string,
    country: string,
}

// TIPOS CUSTOMIZADOS
type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address, // Atibuto Opcional => Reduz a segurança de tipagem
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "AnyTown",
        country: "USA"
    }
}

function displayInfo(person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person1)

// Arrays
let age: number[] = [100, 101]

let people: Person[] = [person1, person2]

// let people: Array<Person>[] = [person1,person2]