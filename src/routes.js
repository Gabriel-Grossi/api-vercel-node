const { Router } = require('express');
const routes = Router();
var crypto = require('crypto');

const users = [
    { username: 'Usuária Teste', email: 'usuaria101@saudedamulher.com', password: `${crypto.randomUUID()}`, relatedTo: 'Usuária', accessLevel: 'sec' },
    { username: 'Usuária Teste', email: 'usuaria102@saudedamulher.com', password: `${crypto.randomUUID()}`, relatedTo: 'Usuária', accessLevel: 'sec' }
]

routes.get('/users', (req, res, error) => {
    try {
        return res.json(users)
    }
    catch {
        return res.json(error)
    }
})
routes.post('/user/create', (req, res, error) => {
    try {
        return res.status(201).json({ message: 'Usuário criado' })
    }
    catch {
        return res.json(error)
    }
})

module.exports = routes