const axios = require('axios');

test('Buscando todos os usuários', async function() {
    const response = await axios({
        url: 'http://localhost:3000/users',
        method: 'get'
    });
    console.log(response.data);
});

test('Buscando Filmes', async function() {
    const response = await axios({
        url: 'http://localhost:3000/filmes',
        method: 'get'
    });
    console.log(response.data);
});

