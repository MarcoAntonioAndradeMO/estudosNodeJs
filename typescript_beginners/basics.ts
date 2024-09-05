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

// Literal Types
let myName1 = "Marco"
let myName2: "Marco" | "Mark" // => Só aceitará esses valores

//Unions
type UserRole = "admin" | "member" | "guest" // => Similar a ENUMS 

type User = {
    username: string,
    role: "admin" | "member" | "guest"
}

let userRole: UserRole = "member"

const users: User[] = [
    {username: "john_doe", role: "member"},
    {username: "jane_doe", role: "admin"},
    {username: "guest_user", role: "guest"}
]

function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username: ${username} not found`)
    }
    return user
}
// a função deixa explícito que o tipo de retorno e User, facilitando o Debug do código 

// Função Void x Undefined
// void => indica que a função não deve retornar um valor
// O tipo void é bastante utilizado com callbacks e funções de evento
// Usado para funções que não retornam valor 
// undefined => é um valor literal que pode ser retornado ou usado explicitamente
