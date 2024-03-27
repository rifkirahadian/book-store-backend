/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    const path = require('path');

    // Generate 20 rows of fake data
    const booksData = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'books.json'), 'utf-8'),
    );

    // Insert data into the books table
    await queryInterface.bulkInsert('books', booksData, {});
  },

  async down() {},
};
