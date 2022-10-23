'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Bookings',
      [
        {
          spotId: 1,
          userId: 2,
          startDate: '2022-04-13',
          endDate: '2022-04-16'
        },
        {
          spotId: 2,
          userId: 3,
          startDate: '2022-6-21',
          endDate: '2022-06-23'
        },
        {
          spotId: 3,
          userId: 1,
          startDate: '2022-10-11',
          endDate: '2022-10-14'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'Bookings',
      {
        userId: {
          [Op.in]: [1, 2, 3]
        }
      },
      {}
    );
  }
};
