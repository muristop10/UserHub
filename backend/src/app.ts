import express from 'express'
import authRoutes from './routes/authRoutes';
import usersRoutes from './routes/usersRoutes';

const app = express();
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/users', usersRoutes)


export default app;