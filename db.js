const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
    'postgres://DB_USER:DB_PASSWORD@DB_POST:DB_PORT/DB_DATABASE',
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
