const express = require('express')

const cors = require('cors')

const animalesRoutes = require('./routes/animalesRoutes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}))

app.use(express.json())

app.use('/api/animales', animalesRoutes)

 app.listen(PORT, () => {
  console.log(`Servidor iniciado http://localhost:${PORT}`)
})