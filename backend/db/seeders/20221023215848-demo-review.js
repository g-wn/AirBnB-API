'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Reviews',
      [
        {
          spotId: 1,
          userId: 2,
          review: 'User 2 is reviewing Spot 1',
          stars: 4
        },
        {
          spotId: 2,
          userId: 3,
          review: 'User 3 is reviewing Spot 2',
          stars: 3
        },
        {
          spotId: 3,
          userId: 1,
          review: 'User 1 is reviewing Spot 3',
          stars: 5
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'Reviews',
      {
        userId: {
          [Op.in]: [1, 2, 3]
        }
      },
      {}
    );
  }
};
