import { Router } from "express";
import { getUserById, getUsers } from "../controllers/usersController";

const usersRoutes = Router();

usersRoutes.get('/', getUsers); 
usersRoutes.get('/:id', getUserById); 
// usersRoutes.patch('/:id', editUser); 
// usersRoutes.delete('/:id', deleteUser);

export default usersRoutes