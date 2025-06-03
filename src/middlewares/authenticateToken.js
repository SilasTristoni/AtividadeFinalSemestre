const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'CHAVE SECRETA DO JWT'; // ou process.env.JWT_SECRET

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error('Erro ao verificar token:', err.message);
      return res.status(403).json({ error: 'Token inválido.' });
    }
    req.user = { id: decoded.id, name: decoded.name }; // ajuste para bater com o token criado
    next();
  });
}

module.exports = authenticateToken;
