import { Router } from "express";
import { signup } from "../controllers/authController";

const authRouter = Router();

authRouter.post('/signup', signup);
 
// authRouter.post('/login', (req, res) => {

// })
 
// authRouter.post('/refresh', (req, res) => {

// })

// authRouter.post('/logout', (req, res) => {

// })
 

export default authRouter;