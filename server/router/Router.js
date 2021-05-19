// definição das rotas
const express = require('express');
const router = express.Router();

const UserService = require('../service/UserService');
const FilmeService = require('../service/FilmeService');

router.get('/users', async function (req, res) { 
    const users = await UserService.getUsers();
    res.json(users);
});


// rota dos filmes
router.get('/filmes', async function (req, res) { 
    const filmes = await FilmeService.getFilmes();
    res.json(filmes);
});



module.exports = router;