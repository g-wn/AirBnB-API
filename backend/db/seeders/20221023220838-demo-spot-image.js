'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'SpotImages',
      [
        {
          spotId: 1,
          url: 'https://a0.muscache.com/im/pictures/66526778/a45cd4a4_original.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 1,
          url: 'https://a0.muscache.com/im/pictures/66524575/bd93bfad_original.jpg?im_w=720',
          preview: false
        },
        {
          spotId: 1,
          url: 'https://a0.muscache.com/im/pictures/66524918/18d3e8cb_original.jpg?im_w=720',
          preview: false
        },
        {
          spotId: 1,
          url: 'https://a0.muscache.com/im/pictures/66522964/a89d9f6c_original.jpg?im_w=720',
          preview: false
        },
        {
          spotId: 1,
          url: 'https://a0.muscache.com/im/pictures/66525089/5c572e8e_original.jpg?im_w=720',
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 2,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-645949816519904365/original/077e14bb-3c59-4436-ac54-24dcb2d5f00d.jpeg?im_w=1200',
          preview: true
        },
        {
          spotId: 2,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-645949816519904365/original/49fd1c41-3258-48ac-880c-17ea081115c7.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 2,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-645949816519904365/original/1e2f48d5-b50c-45e5-812a-6613db5ca427.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 2,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-645949816519904365/original/6154b760-7a75-4b83-b8ff-67adc670d6fc.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 2,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-645949816519904365/original/4af7dea3-8732-434c-89f0-be2144b323a6.jpeg?im_w=720',
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

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
        },
        {
          spotId: 3,
          url: 'https://www.testpreviewimg.com/test3c',
          preview: false
        },
        {
          spotId: 3,
          url: 'https://www.testpreviewimg.com/test3c',
          preview: false
        }

        /* ------------------------------------------------------------------------------------------------------------ */
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
