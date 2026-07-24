import { Router } from "express";
import { URLSearchParams } from "node:url";

const usersRoutes = Router();

usersRoutes.get('/', (req, res) => {
    res.json({
        mensagem: 'boa tarde'
    })
})
 
usersRoutes.get('/:id', (req, res) => {
    res.json({
        mensagem: `boa tarde com id`
    })
})
 
usersRoutes.patch('/:id', (req, res) => {

})
 
usersRoutes.delete('/:id', (req, res) => {

})

export default usersRoutes