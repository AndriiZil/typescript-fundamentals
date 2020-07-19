interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'name'
// key = 'job' // Error, no such type in object Person

type User = {
    _id: number;
    name: string;
    email: string;
    createdAt: Date;
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // => 'name' | 'email'
type UserKeyNoMeta = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta = 'name';
// u1 = '_id' // Error 'name' or 'email' allowed only
