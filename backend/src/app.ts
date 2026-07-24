import express from 'express'
import authRoutes from './routes/authRoutes';
import usersRoutes from './routes/usersRoutes';
import cors from 'cors'

export const database = '../backend/src/db/db.json';
const app = express();
app.use(express.json())
app.use(cors());

app.use('/auth', authRoutes)
app.use('/users', usersRoutes)


export default app;