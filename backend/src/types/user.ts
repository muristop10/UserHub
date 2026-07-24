export interface iUser {
    id: string,
    name: string,
    email: string,
    dataNasc: Date,
    passwordHash: string,
    profileImage?: string,
    bio?: string
}