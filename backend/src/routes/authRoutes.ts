import { Router } from "express";
import { ping } from "../controllers/authController";

const authRouter = Router();

authRouter.get('/ping', ping)

// authRouter.post('/signup', (req, res) => {

// })
 
// authRouter.post('/login', (req, res) => {

// })
 
// authRouter.post('/refresh', (req, res) => {

// })

// authRouter.post('/logout', (req, res) => {

// })
 

export default authRouter;