"use strict";

const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        email: "demo@user.io",
        username: "DemoUser1",
        hashedPassword: bcrypt.hashSync("password")
      },
      {
        email: "user2@user.io",
        username: "JustAnotherUserName",
        hashedPassword: bcrypt.hashSync("password2")
      },
      {
        email: "fakeemail@user.io",
        username: "krabkakez123",
        hashedPassword: bcrypt.hashSync("password3")
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Users", {
      username: {
        [Op.in]: ["DemoUser1", "JustAnotherUserName", "krabkakez123"]
      }
    }, {});
  }
};
