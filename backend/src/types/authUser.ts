export interface authUser {
    id: string,
    name: string,
    email: string,
    dataNasc: Date,
    passwordHash: string,
    createdAt: Date,
    profileImage?: string,
    bio?: string
}