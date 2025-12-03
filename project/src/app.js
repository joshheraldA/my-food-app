const accountRoutes = require('./routes/accnt')
const foodRoutes = require('./routes/food')

const express = require('express')
const path = require('path')
const app = express()

const PORT = 8080

const staticPath = path.join(__dirname, '..', 'public')
app.use('/accnts', accountRoutes)
// app.use('/api/food', foodRoutes)
app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.send({
        "status": 200,
        "details": "HELLO THERE JOSH"
    })
})

app.listen(PORT, () => {
    console.log(`LISTENING TO ${PORT}`)
})

