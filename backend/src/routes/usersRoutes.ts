import { Router } from "express";
import { deleteUser, editUser, getUserById, getUsers } from "../controllers/usersController";

const usersRoutes = Router();

// extração de dados => parâmetros

usersRoutes.get('/', getUsers); 
usersRoutes.get('/:id', getUserById); 
usersRoutes.patch('/:id', editUser); 
usersRoutes.delete('/:id', deleteUser);

export default usersRoutes