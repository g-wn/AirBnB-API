'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'SpotImages',
      [
        {
          spotId: 1,
          url: 'https://www.testpreviewimg.com/test1',
          preview: true
        },
        {
          spotId: 1,
          url: 'https://www.testpreviewimg.com/test1b',
          preview: false
        },
        {
          spotId: 1,
          url: 'https://www.testpreviewimg.com/test1c',
          preview: false
        },
        {
          spotId: 2,
          url: 'https://www.testpreviewimg.com/test2',
          preview: true
        },
        {
          spotId: 2,
          url: 'https://www.testpreviewimg.com/test2b',
          preview: false
        },
        {
          spotId: 2,
          url: 'https://www.testpreviewimg.com/test2c',
          preview: false
        },
        {
          spotId: 3,
          url: 'https://www.testpreviewimg.com/test3',
          preview: true
        },
        {
          spotId: 3,
          url: 'https://www.testpreviewimg.com/test3b',
          preview: false
        },
        {
          spotId: 3,
          url: 'https://www.testpreviewimg.com/test3c',
          preview: false
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'SpotImages',
      {
        spotId: {
          [Op.in]: [1, 2, 3]
        }
      },
      {}
    );
  }
};
