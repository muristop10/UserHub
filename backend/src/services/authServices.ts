import { database } from "../app";
import fs from 'fs/promises';
import bcrypt from 'bcrypt';
import { authUser } from '../types/authUser';
import { signupUser } from "../types/signupUser";

const defaultUser = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKOaKWM8FAWEXxGcOP9oh-u3Wbmq76wCT9BpbwVzdYhRU8ks0dh1g2BrQ&s=10'

export async function signupService (
    userData: signupUser
) {
    const result = await fs.readFile(
        database,
        'utf-8'
    )
    const db = JSON.parse(result)

    // tratativa de erro
    const emailExists = db.users.find(
        (user:authUser) => user.email === userData.email
    )
    if (emailExists) {
        throw new Error ('Esse email já existe. Use outro.')
    }

    if (userData.password != userData.confirmPassword) {
        throw new Error('Senhas não batem, tente novamente.')
    }

    // SET DA HASH A PARTIR DA SENHA
    const passwordHash = await bcrypt.hash(
        userData.password,
        10
    )

    const newUser: authUser = {
        id: crypto.randomUUID(),
        name: userData.name,
        email: userData.email,
        dataNasc: userData.dataNasc,
        passwordHash,
        createdAt: new Date(),
        profileImage: userData.profileImage || defaultUser,
        bio: 'Olá, sou um usuário do UserHub!'
    }

    db.users.push(newUser)

    // persistir
    await fs.writeFile(
        database,
        JSON.stringify(db, null, 2)
    )

    return {
        message: "Usuário cadastrado com sucesso!"
    }

}