const { Sequelize } = require('sequelize')
// const fs = require('fs')

// const logStream = fs.createWriteStream('./sql.log', { flags: 'a' })
// const saveLog = (msg) => {
//   logStream.write(msg.replace(';', ';\n\n'))
// }

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  logging: false,
})
