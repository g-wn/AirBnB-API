'use strict';

const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'fblover@fb.com',
        firstName: 'Face',
        lastName: 'Book',
        username: 'Metaverse4Ever',
        hashedPassword: bcrypt.hashSync('password1')
      },
      {
        email: 'gglboi@ggl.com',
        firstName: 'Goo',
        lastName: 'Gle',
        username: 'GoogleGlassHoldout',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'aplclt@apl.eco',
        firstName: 'Apple',
        lastName: 'Ecosystem',
        username: 'NoGrnBubbz',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'oldskool@email.com',
        firstName: 'Plainold',
        lastName: 'Emailuser',
        username: 'SnailMailWuz2Slow',
        hashedPassword: bcrypt.hashSync('password4')
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
