'use strict';

const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'demo1@user.io',
        firstName: 'Demo1',
        lastName: 'User1',
        username: 'DemoUser1',
        hashedPassword: bcrypt.hashSync('password1')
      },
      {
        email: 'demo2@user.io',
        firstName: 'Demo2',
        lastName: 'User2',
        username: 'DemoUser2',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'demo3@user.io',
        firstName: 'Demo3',
        lastName: 'User3',
        username: 'DemoUser3',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync('password')
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Users',
      {
        username: {
          [Op.in]: ['DemoUser1', 'DemoUser2', 'DemoUser3']
        }
      },
      {}
    );
  }
};
