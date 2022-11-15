'use strict';
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Reviews',
      [
        {
          spotId: 1,
          userId: 2,
          review: faker.lorem.paragraph(),
          stars: 4
        },
        {
          spotId: 1,
          userId: 3,
          review: faker.lorem.paragraph(),
          stars: 3
        },
        {
          spotId: 1,
          userId: 10,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 1,
          userId: 15,
          review: faker.lorem.paragraph(),
          stars: 3
        },
        {
          spotId: 1,
          userId: 4,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 1,
          userId: 5,
          review: faker.lorem.paragraph(),
          stars: 4
        },
        {
          spotId: 1,
          userId: 14,
          review: faker.lorem.paragraph(),
          stars: 3
        },
        {
          spotId: 1,
          userId: 12,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 1,
          userId: 9,
          review: faker.lorem.paragraph(),
          stars: 3
        },
        {
          spotId: 1,
          userId: 8,
          review: faker.lorem.paragraph(),
          stars: 5
        },

        /* ------------------------------------------------------------------------------ */

        {
          spotId: 2,
          userId: 1,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 2,
          userId: 3,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 2,
          userId: 4,
          review: faker.lorem.paragraph(),
          stars: 4
        },
        {
          spotId: 2,
          userId: 5,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 2,
          userId: 6,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 2,
          userId: 7,
          review: faker.lorem.paragraph(),
          stars: 3
        },
        {
          spotId: 2,
          userId: 8,
          review: faker.lorem.paragraph(),
          stars: 4
        },
        {
          spotId: 2,
          userId: 9,
          review: faker.lorem.paragraph(),
          stars: 4
        },
        {
          spotId: 2,
          userId: 10,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 2,
          userId: 11,
          review: faker.lorem.paragraph(),
          stars: 4
        },
        /* ------------------------------------------------------------------------------ */

        {
          spotId: 3,
          userId: 1,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 3,
          userId: 2,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 3,
          userId: 4,
          review: faker.lorem.paragraph(),
          stars: 4
        },
        {
          spotId: 3,
          userId: 5,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 3,
          userId: 6,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 3,
          userId: 7,
          review: faker.lorem.paragraph(),
          stars: 3
        },
        {
          spotId: 3,
          userId: 8,
          review: faker.lorem.paragraph(),
          stars: 4
        },
        {
          spotId: 3,
          userId: 9,
          review: faker.lorem.paragraph(),
          stars: 2
        },
        {
          spotId: 3,
          userId: 10,
          review: faker.lorem.paragraph(),
          stars: 2
        },
        {
          spotId: 3,
          userId: 11,
          review: faker.lorem.paragraph(),
          stars: 4
        },

        /* ------------------------------------------------------------------------------ */

        {
          spotId: 4,
          userId: 1,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 4,
          userId: 2,
          review: faker.lorem.paragraph(),
          stars: 3
        },
        {
          spotId: 4,
          userId: 3,
          review: faker.lorem.paragraph(),
          stars: 4
        },
        {
          spotId: 4,
          userId: 5,
          review: faker.lorem.paragraph(),
          stars: 3
        },
        {
          spotId: 4,
          userId: 6,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 4,
          userId: 7,
          review: faker.lorem.paragraph(),
          stars: 4
        },
        {
          spotId: 4,
          userId: 8,
          review: faker.lorem.paragraph(),
          stars: 4
        },
        {
          spotId: 4,
          userId: 9,
          review: faker.lorem.paragraph(),
          stars: 2
        },
        {
          spotId: 4,
          userId: 10,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 4,
          userId: 11,
          review: faker.lorem.paragraph(),
          stars: 5
        },

        /* ------------------------------------------------------------------------------ */

        {
          spotId: 5,
          userId: 1,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 5,
          userId: 2,
          review: faker.lorem.paragraph(),
          stars: 3
        },
        {
          spotId: 5,
          userId: 6,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 5,
          userId: 4,
          review: faker.lorem.paragraph(),
          stars: 3
        },
        {
          spotId: 5,
          userId: 3,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 5,
          userId: 7,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 5,
          userId: 8,
          review: faker.lorem.paragraph(),
          stars: 5
        },
        {
          spotId: 5,
          userId: 9,
          review: faker.lorem.paragraph(),
          stars: 2
        },
        {
          spotId: 5,
          userId: 10,
          review: faker.lorem.paragraph(),
          stars: 3
        },
        {
          spotId: 5,
          userId: 11,
          review: faker.lorem.paragraph(),
          stars: 5
        },
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
