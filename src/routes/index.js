import { Router } from 'express';

const users = []

export const routes = new Router();

routes.post('/', (req, res) => {

    users.push(req.body)

    res.send({
        status: 'criado'
    })
})

routes.get('/:id', (req, res) => {

    const userId = req.params.id

    const user = users.find((user) => user.id === userId )

    res.send(user)
})
