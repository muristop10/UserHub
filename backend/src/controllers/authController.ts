import { Request, Response } from "express";
import { signupService } from "../services/authServices";

export async function signup (
    req: Request,
    res: Response
) {
    try {
        const result = await signupService(req.body);
        return res.status(201).json(result)
    } catch (e) {
        return res.status(400).json({
            message:
                e instanceof Error ? e.message 
                : 'Erro desconhecido.'
        });
    }

} 