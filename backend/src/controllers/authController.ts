import { Request, Response } from "express";
import { authService } from "../services/authServices";

export function ping (
    req: Request,
    res: Response
) {
    const data = authService();
    return res.json(data)
}