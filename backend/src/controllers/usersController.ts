import { Request, Response } from "express";
import { getUserByIdService, getUsersService } from "../services/userServices";

export async function getUsers (
    req: Request,
    res: Response,
) {
    const data = await getUsersService();
    return res.json(data);
}

export async function getUserById (
    req: Request,
    res: Response,
) {
    const data = await getUserByIdService();
    return res.json(data);
}