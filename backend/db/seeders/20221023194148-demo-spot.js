'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '1 Test Lane',
        city: 'Test City 1',
        state: 'Test State 1',
        country: 'Test Country 1',
        lat: 34.05967425545523,
        lng: -118.31352501176664,
        name: 'Test Name 1',
        description: 'Test Description 1',
        price: 150.99
      },
      {
        ownerId: 2,
        address: '2 Test Lane',
        city: 'Test City 2',
        state: 'Test State 2',
        country: 'Test Country 2',
        lat: 34.058731107515435,
        lng: -118.3113699995813,
        name: 'Test Name 2',
        description: 'Test Description 2',
        price: 250.99
      },
      {
        ownerId: 3,
        address: '2 Test Lane',
        city: 'Test City 3',
        state: 'Test State 3',
        country: 'Test Country 3',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: 350.99
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'Spots',
      {
        name: {
          [Op.in]: ['Test Name 1', 'Test Name 2', 'Test Name 3']
        }
      },
      {}
    );
  }
};
