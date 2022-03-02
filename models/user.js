const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(20),
          unique: true,
          allowNull: false,
        },
        userid: {
          type: Sequelize.STRING(255),
          unique: true,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        auth: {
          type: Sequelize.STRING(20),
          allowNull: false,
          defaultValue: 'user',
        },
        email: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        phone: {
          type: Sequelize.STRING(255),
        },
        loginFailCount: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
};
