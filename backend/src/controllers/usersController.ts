import { Request, Response } from "express";
import { deleteUserService, editUserService, getUserByIdService, getUsersService } from "../services/userServices";

interface userParams {
    id: string
}

export async function getUsers(
    req: Request,
    res: Response,
) {
    try {
        const data = await getUsersService();
        return res.json(data);
    } catch (e) {
        return res.status(400).json({
            message:
                e instanceof Error ? e.message
                    : 'Erro desconhecido.'
        });
    }

}

export async function getUserById(
    req: Request<userParams>,
    res: Response,
) {
    try {
        const { id } = req.params;
        const user = await getUserByIdService(id);
        return res.json(user);
    } catch (e) {
        return res.status(400).json({
            message:
                e instanceof Error ? e.message
                    : 'Erro desconhecido.'
        });
    }

}

export async function editUser(
    req: Request<userParams>,
    res: Response,
) {
    try {
        const { id } = req.params;
        const { userData } = req.body;
        const data = await editUserService(id, userData);
        return res.json(data);
    } catch (e) {
        return res.status(400).json({
            message:
                e instanceof Error ? e.message
                    : 'Erro desconhecido.'
        });
    }

}

export async function deleteUser(
    req: Request<userParams>,
    res: Response,
) {
    try {
        const { id } = req.params;
        const data = await deleteUserService(id);
        return res.json(data);
    } catch (e) {
        return res.status(400).json({
            message:
                e instanceof Error ? e.message
                    : 'Erro desconhecido.'
        });
    }

}