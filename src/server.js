const express = require('express');
const app = express();
const database = require('./config/database.js');

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

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

app.use((req, res, next) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Algo deu errado!',
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
