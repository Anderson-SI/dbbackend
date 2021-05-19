const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use((req, res, next) => {
    // console.log('Acessou o Middleware!');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    app.use(cors());
    next();
})

// mudar a porta do frontend para 8080
app.use('/', require('./router/Router'));
app.listen(3000);

