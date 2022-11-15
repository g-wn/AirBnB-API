'use strict';
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 1',
        description: 'Test Description 1',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 2,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 2',
        description: 'Test Description 2',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 3,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 4,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 5,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 6,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 7,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 8,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 9,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 10,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 11,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 12,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 13,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 14,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 15,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 16,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 17,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 18,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 19,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 20,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 21,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 22,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 23,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 24,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 25,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 26,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 27,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 28,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 29,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 30,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 31,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 32,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 33,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 34,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
      },
      {
        ownerId: 35,
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: 'United States',
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        name: 'Test Name 3',
        description: 'Test Description 3',
        price: Math.floor(Math.random() * (1200 - 200 + 1)) + 200
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
