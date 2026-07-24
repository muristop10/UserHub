import { Router } from "express";
import { ping, signup } from "../controllers/authController";

const authRouter = Router();

authRouter.get('/ping', ping);
authRouter.post('/signup', signup);
 
// authRouter.post('/login', (req, res) => {

// })
 
// authRouter.post('/refresh', (req, res) => {

// })

// authRouter.post('/logout', (req, res) => {

// })
 

export default authRouter;