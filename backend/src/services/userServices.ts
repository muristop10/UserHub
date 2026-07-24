import fs from 'fs/promises'
import { iUser } from '../../../frontend/src/types/iUser';
import { database } from '../app';

export async function getUsersService () {
    const result = await fs.readFile(
        database,
        'utf-8'
    );
    const db = JSON.parse(result)
    return db.users
}

export async function getUserByIdService (
    id: string
) {
    const result = await fs.readFile(
        database,
        'utf-8'
    );
    const db = JSON.parse(result)
    const selectedUser = db.users.find(
        (user: iUser) => user.id === id
    );

    return selectedUser
}
 
export async function editUserService (
    id: string,
    // iUser => separação de responsabilidades
    // essa request vem do próprio usuário => editar seus dados do front
    // dados de credencial => TRATADOS NO /AUTH
    userData: Partial<iUser>
) {
    const result = await fs.readFile(
        database,
        'utf-8'
    );
    const db = JSON.parse(result)

    // encontrar usuário
    const selectedUser = db.users.find(
        (user: iUser) => user.id === id
    );

    if (selectedUser === -1) {
        throw new Error ('Usuário não encontrado.')
    }

    // atualizar dados alterados
    db.users[selectedUser] = {
        ...db.users[selectedUser],
        ...userData
    }

    // gravar no banco
    await fs.writeFile(
        database,
        JSON.stringify(db, null, 2)
    )

    return db.users[selectedUser]
}
 
export async function deleteUserService (
    id: string
) {
    const result = await fs.readFile(
        database,
        'utf-8'
    );
    const db = JSON.parse(result)

    const selectedUser = db.users.find(
        (user: iUser) => user.id === id
    );

    if (selectedUser === -1) {
        throw new Error('Usuário não encontrado.')
    }
    db.users.splice(selectedUser, 1)

    await fs.writeFile(
        database,
        JSON.stringify(db, null, 2)
    )
    
    return {
        message: "Usuário removido com sucesso."
    }
}
 