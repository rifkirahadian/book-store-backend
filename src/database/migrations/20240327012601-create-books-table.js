'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      writer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cover_image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      point: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      tag: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('books');
  },
};
