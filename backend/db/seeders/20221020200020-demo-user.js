'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        firstName: 'Demo',
        lastName: 'User',
        username: 'DemoUser1',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user2@user.io',
        firstName: 'User',
        lastName: 'Two',
        username: 'JustAnotherUserName',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'fakeemail@user.io',
        firstName: 'Krab',
        lastName: 'Kakez',
        username: 'krabkakez123',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Users',
      {
        username: {
          [Op.in]: ['DemoUser1', 'JustAnotherUserName', 'krabkakez123']
        }
      },
      {}
    );
  }
};
