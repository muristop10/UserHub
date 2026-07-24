import type { signupUser } from "../types/signupUser";

const API_URL = 'http://localhost:3001';

export async function getUsers() {
    const res = await fetch(`${API_URL}/users`);
    if (!res.ok) {
        const errorData = await res.json()
        throw new Error(
            errorData.message
        )
    } else {
        return await res.json()
    }
}

export async function getUserById(id: string) {
    const res = await fetch(`${API_URL}/users/${id}`, {
        method: 'GET'
    })
    if (!res.ok) {
        throw new Error('Erro ao buscar user.')
    } else {
        return await res.json()
    }

}

export async function createUser(userData: signupUser) {
    const res = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        body: JSON.stringify({
            ...userData,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
    if (!res.ok) {
        const errorData = await res.json()
        throw new Error(
            errorData.message
        )
    } else {
        return await res.json();
    }
}

export async function deleteUser(id: string) {
    const res = await fetch(`${API_URL}/users/${id}`, {
        method: 'DELETE'
    })
    if (!res.ok) {
        const errorData = await res.json()
        throw new Error(
            errorData.message
        )
    } else {
        return await res.json()
    }
}

export async function editUser(id: string, userData: Partial<signupUser>) {
    const res = await fetch(`${API_URL}/users/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-type": 'application/json',
            "body": JSON.stringify(userData)
        }
    })
    if (!res.ok) {
        const errorData = await res.json()
        throw new Error(
            errorData.message
        )
    } else {
        await res.json()
    }
}