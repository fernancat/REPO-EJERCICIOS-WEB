import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()
const port = 3000



export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    req.user = decoded;
    next();
  });
}

// no se si habia que hacer un endpoint de login para obtenerlo? update: ya vi el ejercicio 2


app.get('/cursos', authenticateToken, (req, res) => {
  res.send('Hello World!')
})



app.post('/cursos', authenticateToken, (req, res) => {
  res.send('Hello World!')
})




app.listen(port, () => {
  console.log(`El servidor se encuentra escuchando en el puerto:  ${port}`)
})