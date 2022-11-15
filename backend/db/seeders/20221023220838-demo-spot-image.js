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
          url: 'https://a0.muscache.com/im/pictures/2011683a-c045-4b5a-97a8-37bca4b98079.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 11,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 11,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 11,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 11,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 12,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 12,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 12,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 12,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 12,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 13,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-28695629/original/db1206b6-d012-40e7-b8ec-fd834b0f3145.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 13,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 13,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 13,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 13,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 14,
          url: 'https://a0.muscache.com/im/pictures/52ac4d52-1737-4c5d-81f4-d5b3e3160abf.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 14,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 14,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 14,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 14,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 15,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-34718008/original/79731c7e-d9e2-470b-ba4c-3dc46c9b8274.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 15,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 15,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 15,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 15,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 16,
          url: 'https://a0.muscache.com/im/pictures/9bc00af5-19de-4a8d-a9eb-a0d5cc74f649.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 16,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 16,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 16,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 16,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 17,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48681314/original/712783d5-b280-47c7-b8cc-cc295e978db7.jpeg?im_w=960',
          preview: true
        },
        {
          spotId: 17,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 17,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 17,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 17,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 18,
          url: 'https://a0.muscache.com/im/pictures/d6a7e301-d1cb-40ee-ac9f-c802d20895da.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 18,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 18,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 18,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 18,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 19,
          url: 'https://a0.muscache.com/im/pictures/1e16f2f4-1256-44cb-a0f2-85aa57672a45.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 19,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 19,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 19,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 19,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 20,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 20,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 20,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 20,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 20,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 21,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 21,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 21,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 21,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 21,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 22,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 22,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 22,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 22,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 22,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 23,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 23,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 23,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 23,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 23,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 24,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 24,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 24,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 24,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 24,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 25,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 25,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 25,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 25,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 25,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 26,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 26,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 26,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 26,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 26,
          url: faker.image.animals(),
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
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 27,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 27,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 27,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 28,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 28,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 28,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 28,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 28,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 29,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 29,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 29,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 29,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 29,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 30,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 30,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 30,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 30,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 30,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 31,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 31,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 31,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 31,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 31,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 32,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 32,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 32,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 32,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 32,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 33,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 33,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 33,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 33,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 33,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 34,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 34,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 34,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 34,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 34,
          url: faker.image.animals(),
          preview: false
        },

        /* ------------------------------------------------------------------------------------------------------------ */

        {
          spotId: 35,
          url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=960',
          preview: true
        },
        {
          spotId: 35,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 35,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 35,
          url: faker.image.animals(),
          preview: false
        },
        {
          spotId: 35,
          url: faker.image.animals(),
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
