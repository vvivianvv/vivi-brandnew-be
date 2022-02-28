const { sequelize } = require('./connection');
const User = require('./user');
const Convenience = require('./convenience');

const db = {};

db.sequelize = sequelize;

// model 생성
db.User = User;
db.Convenience = Convenience;

// model init
User.init(sequelize);
Convenience.init(sequelize);

module.exports = db;
