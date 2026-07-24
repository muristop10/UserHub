import { userDTO } from "../types/auth"

export function authService() {
    return {
        message: 'pong'
    }
}
 
export async function signupService (
    userData: userDTO
) {
    return {
        message: "requisição aprovada",
        user: userData
    }
}