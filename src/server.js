const express = require('express');
const app = express();
const database = require('./config/database.js');
app.use(express.json());

//Import models
const User = require('./models/users.js');
const Product = require('./models/products.js');
const Category = require('./models/categories.js');

//Import routes
const productsRoutes = require('./routes/productsRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');
const categoriesRoutes = require('./routes/categoriesRoutes.js');
const ordersRoutes = require('./routes/ordersRoutes.js');

database.db.sync({ alter: true })
    .then(() => {
        console.log('Banco de dados conectado com sucesso!');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    });

    app.get('/', (req, res) => {
        res.send('API final do Jackson rodando!');
    });
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/categories', categoriesRoutes);
app.use('/orders', ordersRoutes);

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
