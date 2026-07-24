import fs from 'fs/promises'

export async function getUsersService () {
    const result = await fs.readFile(
        './src/db/db.json',
        'utf-8'
    );
    const db = JSON.parse(result)
    return db.users
}

export async function getUserByIdService () {
    const result = await fs.readFile(
        './src/db/db.json',
        'utf-8'
    );
    const db = JSON.parse(result)
    return db.users
}