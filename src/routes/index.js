import { Router } from 'express';

let users = []

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

routes.get('/', (req,res) => {

        res.send(users)
})


routes.delete('/:id', (req, res) => {

    const userId = req.params.id

    const user = users.find((user) => user.id === userId)

    const newUsers = users.filter((user) => user.id !== userId)

    users = newUsers

    res.send(user)
})