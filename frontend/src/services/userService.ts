import { v4 as uuidv4 } from "uuid";
import type { iUser } from "../types";

const API_URL = 'http://localhost:3001/users';

export async function getUsers() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error("Erro no fetch.")
        } else {
            return await res.json()
        }
    } catch (e) {
        console.log("Erro:", e)
    }
}

export async function getUserById(id: string) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'GET'
    })
    if (!res.ok) {
        throw new Error('Erro ao buscar user.')
    } else {
        return await res.json()
    }

}

export async function createUser(userData: iUser) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            body: JSON.stringify({
                ...userData,
                id: uuidv4(),
            })
        },
        body: JSON.stringify(userData)
    })
    if (!res.ok) {
        throw new Error('Erro ao criar user.')
    } else {
        return await res.json();
    }
}

export async function deleteUser(id: string) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    if (!res.ok) {
        throw new Error('Erro ao deletar user.')
    } else {
        return await res.json()
    }
}

export async function editUser(id: string, userData: Partial<{ name: string; email: string; bio?: string; profileImage?: string }>) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-type": 'application/json',
            "body": JSON.stringify(userData)
        }
    })
    if (!res.ok) {
        throw new Error('Erro ao editar user.')
    } else {
        await res.json()
    }
}