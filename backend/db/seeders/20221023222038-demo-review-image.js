'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ReviewImages',
      [
        {
          reviewId: 1,
          url: 'https://www.testreviewimage.com/test1'
        },
        {
          reviewId: 2,
          url: 'https://www.testreviewimage.com/test2'
        },
        {
          reviewId: 3,
          url: 'https://www.testreviewimage.com/test3'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'ReviewImages',
      {
        reviewId: {
          [Op.in]: [1, 2, 3]
        }
      },
      {}
    );
  }
};
