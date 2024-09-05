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

function displayInfo(person: Person) {
    console.log(`${person.name} lives at ${person.address?.street || "Address not available"}`)
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
    id: number,
    username: string,
    role: "admin" | "member" | "guest" | "contributor"
}

let userRole: UserRole = "member"

type updateUser = Partial<User>

let nextUserId = 1

const users: User[] = [
    {id: nextUserId++, username: "john_doe", role: "member"},
    {id: nextUserId++, username: "jane_doe", role: "admin"},
    {id: nextUserId++, username: "guest_user", role: "guest"}
]

// Utility types
function updateUser(id: number, updates: any) {
    const foundUser = users.find(user => user.id === id)
    if (!foundUser) {
        console.log('User not Found')
        return
    }
    Object.assign(foundUser, updates)
}

function addNewUser(newUser: Omit<User, "id" | "user">): User {
    const user: User = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user)
    return user
}

addNewUser({ username: "joe_schmoe", role: "member"})

console.log(users)

// Examples updates:
updateUser(1, {username: "new_john_doe" });
updateUser(4, {role: "contributor" });

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

// Type Any
let value: any = 1 // O typecript checa o tipo
// value.toLowerCase()
value = 'hi'
// value.map()
// O tipo Any deve ser evitado
// Pode utilizar na transcrição de código JS para TS 

// Generics
// Adiciona flexibilidade para funções existentes, tipos e etc
const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name:"Alice", age: 42}, { name: "Bob", age: 77}];

function getLastItem<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))