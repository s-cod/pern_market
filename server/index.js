require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const sequelize = require('./db')
const models = require('./models/models')
const router = require('./routes')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/static/', express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => {
      console.log(`Server started from PORT: http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
