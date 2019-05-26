require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan')
const cors = require('cors')

const catRouter = require('./routes/cat.route')

const app = express()

const port = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())

app.get('/', (req, res) => {
	res.send('Chao Xin!!')
})

app.use('/api/cats', catRouter)

app.listen(port, () =>
	console.log(`app is running on port ${port}`)
)