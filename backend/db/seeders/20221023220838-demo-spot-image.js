'use strict';

const { faker } = require('@faker-js/faker');

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
          url: 'https://a0.muscache.com/im/pictures/0d58f4c9-6ae2-430b-a1a3-9ab2b7b9f6e3.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 3,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-34816258/original/2d7809ce-da38-4c1f-a225-097229c56561.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 3,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-34816258/original/3576efcc-ac7f-4d90-af39-29db37321ac4.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 3,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-34816258/original/95a7aac2-a809-42e5-853b-444f93b60747.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 3,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-34816258/original/283d3c28-cea1-4e6c-a052-643b27eb10d4.jpeg?im_w=720',
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 4,
          url: 'https://a0.muscache.com/im/pictures/monet/Select-9653615/original/d92167a4-6bdc-484e-8bc8-14f052b7c4e3?im_w=960',
          preview: true
        },
        {
          spotId: 4,
          url: 'https://a0.muscache.com/im/pictures/c3e3c823-58dd-4f52-aec6-f7f7a690ad42.jpg?im_w=720',
          preview: false
        },
        {
          spotId: 4,
          url: 'https://a0.muscache.com/im/pictures/79da92b6-bf4e-4430-a62a-dffa73f52b09.jpg?im_w=720',
          preview: false
        },
        {
          spotId: 3,
          url: 'https://a0.muscache.com/im/pictures/f10aa855-af3b-4b06-bcf6-7d948088e918.jpg?im_w=720',
          preview: false
        },
        {
          spotId: 4,
          url: 'https://a0.muscache.com/im/pictures/f062525c-4a09-4a7d-9d17-72b8b3d628c6.jpg?im_w=720',
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 5,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-11818704/original/d7279902-a71b-4fbc-a711-3172286ab458.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 5,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-11818704/original/1efccf3e-b6ba-4ae2-b1da-4a124333898a.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 5,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-11818704/original/3410b987-e1f2-447d-b6d2-397200b60af1.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 5,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-11818704/original/119b3943-5802-4dbb-bfaf-b1d49e808445.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 5,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-11818704/original/e5ef53a5-7985-4ad0-a051-f81e989c00a2.jpeg?im_w=720',
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 6,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-13283011/original/1b71f1bc-c393-449f-949a-d6906fbc64a2.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 6,
          url: 'https://a0.muscache.com/im/pictures/9ed3aaae-e6b7-4138-9fd2-7014f38b7cad.jpg?im_w=720',
          preview: false
        },
        {
          spotId: 6,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-13283011/original/dc53cf95-f5cf-4abb-b433-b488f3ccb18b.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 6,
          url: 'https://a0.muscache.com/im/pictures/440390b2-bfa7-4ce6-b544-a2dc669f8d51.jpg?im_w=720',
          preview: false
        },
        {
          spotId: 6,
          url: 'https://a0.muscache.com/im/pictures/77e9f81e-749f-4eab-92fb-20aa83ca97fd.jpg?im_w=720',
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 7,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-47354666/original/b92fc905-70ea-449a-aa95-c79ade3ceadb.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 7,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-47354666/original/08d7be05-70aa-4a1d-a964-d9ba526f5562.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 7,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-47354666/original/5db96c16-21bb-492a-a427-533ef988ccac.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 7,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-47354666/original/a2d99008-721a-4153-89e5-c3d251a0389b.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 7,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-47354666/original/62a4b00e-e5d0-45b9-bc6e-0d597e5fc4dc.jpeg?im_w=720',
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 8,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52675662/original/7e7c4709-9843-42ff-bd44-f2d297431741.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 8,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52675662/original/50c02ee9-a670-4296-bf22-ccc8bb53c230.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 8,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52675662/original/cb273b00-93dc-40df-b20b-9723077e0fe1.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 8,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52675662/original/14f57be5-6200-4b03-a6b3-52bfd4fe67f9.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 8,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52675662/original/cc48afeb-e0e6-4613-8f89-7a3708bcb094.jpeg?im_w=720',
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 9,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39663644/original/a80e270f-e366-49c4-8fff-ea5da49de54f.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 9,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52675662/original/50c02ee9-a670-4296-bf22-ccc8bb53c230.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 9,
          url: 'https://a0.muscache.com/im/pictures/9a7888a5-bdbd-4d46-8e5b-ec501c0abe96.jpg?im_w=720',
          preview: false
        },
        {
          spotId: 9,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39663644/original/0608f099-4f2b-4803-9cd7-bcd48a0bdc06.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 9,
          url: 'https://a0.muscache.com/im/pictures/0836e2df-e3ab-4583-9192-81cefdb84e99.jpg?im_w=720',
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 10,
          url: 'https://a0.muscache.com/im/pictures/2011683a-c045-4b5a-97a8-37bca4b98079.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 10,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52675662/original/50c02ee9-a670-4296-bf22-ccc8bb53c230.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 10,
          url: 'https://a0.muscache.com/im/pictures/9a7888a5-bdbd-4d46-8e5b-ec501c0abe96.jpg?im_w=720',
          preview: false
        },
        {
          spotId: 10,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39663644/original/0608f099-4f2b-4803-9cd7-bcd48a0bdc06.jpeg?im_w=720',
          preview: false
        },
        {
          spotId: 10,
          url: 'https://a0.muscache.com/im/pictures/0836e2df-e3ab-4583-9192-81cefdb84e99.jpg?im_w=720',
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 11,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-716674445310682476/original/3dbb1597-6ac6-4877-bb08-7188742b8203.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 11,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 11,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 11,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 11,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 12,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-717383292590854818/original/28a1caa5-c886-4b9d-95f5-9a2bebe7d970.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 12,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 12,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 12,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 12,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 13,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-715990626223541790/original/694ee517-4dd7-4ace-92d6-c96ec635bdf0.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 13,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 13,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 13,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 13,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 14,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-709425013149528376/original/c3841205-def4-40a6-a6c1-9b0cfab58688.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 14,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 14,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 14,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 14,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 15,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-716489971524221921/original/9c440b57-1ce9-4b57-977e-25df5600bdb3.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 15,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 15,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 15,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 15,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 16,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-715567910246104750/original/ce05abca-2eaa-4ddd-abef-66e467a198f2.png?im_w=960',
          preview: true
        },
        {
          spotId: 16,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 16,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 16,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 16,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 17,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-755659078498905457/original/70bdbc32-4df7-441d-8b22-84688aedf463.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 17,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 17,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 17,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 17,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 18,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-724728953051983834/original/ef6d84ef-35f0-40d0-89b8-96c9b08708b1.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 18,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 18,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 18,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 18,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 19,
          url: 'https://a0.muscache.com/im/pictures/8181c1ea-61ab-4fed-a7de-88b535c155ec.jpg?im_w=720',
          preview: true
        },
        {
          spotId: 19,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 19,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 19,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 19,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 20,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-547072308318889744/original/9e7ce46f-6060-4a0e-8176-5a39450b9042.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 20,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 20,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 20,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 20,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 21,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-34541252/original/17305155-d972-4483-bc73-5b1cd1d755e1.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 21,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 21,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 21,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 21,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 22,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-15058446/original/56fe9e3f-48c1-4777-a2b0-5b7745eb9874.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 22,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 22,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 22,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 22,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 23,
          url: 'https://a0.muscache.com/im/pictures/fc2644ca-be6e-40de-94a8-acfe7eb816c5.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 23,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 23,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 23,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 23,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 24,
          url: 'https://a0.muscache.com/im/pictures/5578bae3-3ccf-46ff-81db-ae0665d6bf39.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 24,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 24,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 24,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 24,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 25,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-53402166/original/acdad7e4-c0bf-48ce-9fe9-38b1c5701786.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 25,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 25,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 25,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 25,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 26,
          url: 'https://a0.muscache.com/im/pictures/a809a76b-311e-4c90-bce1-2a0898ad3e15.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 26,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 26,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 26,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 26,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 27,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 27,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 27,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 27,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 27,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 28,
          url: 'https://a0.muscache.com/im/pictures/89b1910c-2189-4e57-89ca-a23480422513.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 28,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 28,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 28,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 28,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 29,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-640076360510086093/original/28ad22b7-e6e8-41dd-94f8-ad3490ac205c.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 29,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 29,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 29,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 29,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 30,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-40183030/original/754858ad-500a-4b40-bba4-8de1869aa693.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 30,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 30,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 30,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 30,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 31,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-671102227653833112/original/9dca6ed5-9a57-4f4a-9532-d9e5d15ecd36.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 31,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 31,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 31,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 31,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 32,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-54339035/original/7c988a34-59c0-402c-b764-ee4b46224763.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 32,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 32,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 32,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 32,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 33,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-22877200/original/4a4456e4-09f4-4b67-be2f-b12e18b8767e.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 33,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 33,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 33,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 33,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 34,
          url: 'https://a0.muscache.com/im/pictures/eed063c3-20ba-443d-9476-426e4a7dfd36.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 34,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 34,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 34,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 34,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 35,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-580891970204189308/original/8b134a1c-3a3f-4b9c-b2cf-712913f457b7.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 35,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 35,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 35,
          url: faker.image.animals(1440, 2160, true),
          preview: false
        },
        {
          spotId: 35,
          url: faker.image.animals(1440, 2160, true),
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
