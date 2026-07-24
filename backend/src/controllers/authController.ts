import { Request, Response } from "express";
import { authService, signupService } from "../services/authServices";

export function ping (
    req: Request,
    res: Response
) {
    const data = authService();
    return res.json(data)
}

export async function signup (
    req: Request,
    res: Response
) {
    const result = await signupService(req.body);
    return res.status(201).json(result)
} 