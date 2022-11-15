'use strict';
import { faker } from '@faker-js/faker';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '1 Test Lane',
        city: 'Somewhere',
        state: 'California',
        country: 'United States',
        lat: 34.05967425545523,
        lng: -118.31352501176664,
        name: 'The best house to rend on the Coast!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum error repudiandae, quia nobis inventore tenetur sequi possimus ullam natus, hic quibusdam, ducimus vel. Culpa minus, nostrum rem laborum officiis voluptatibus!',
        price: 350
      },
      {
        ownerId: 2,
        address: '2 Test Lane',
        city: 'Somewhere Else',
        state: 'California',
        country: 'United States',
        lat: 34.058731107515435,
        lng: -118.3113699995813,
        name: 'Beautiful beachside getaway',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, nulla?',
        price: 800
      },
      {
        ownerId: 3,
        address: '3 Test Lane',
        city: 'Maliboooo',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Coastal Retreat',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 500
      },
      {
        ownerId: 4,
        address: '4 Test Lane',
        city: 'Entirely Different',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 300
      },
      {
        ownerId: 5,
        address: '5 Test Lane',
        city: 'Other City',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Wonderful Mansion',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 900
      },
      {
        ownerId: 6,
        address: '6 Test Lane',
        city: 'Tree Town',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: '#1 Tree House',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 1000
      },
      {
        ownerId: 7,
        address: '7 Test Lane',
        city: 'Fresno',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Visit if you dare',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 200
      },
      {
        ownerId: 8,
        address: '8 Test Lane',
        city: 'San Francisco',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Unaffordable Small Apartment',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 1500
      },
      {
        ownerId: 9,
        address: '9 Test Lane',
        city: 'Brisbane',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Airport Adjacent Hideaway',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 350
      },
      {
        ownerId: 10,
        address: '10 Test Lane',
        city: 'Calabasas',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Hillside Retreat',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 700
      },
      {
        ownerId: 11,
        address: '11 Test Lane',
        city: 'Christmas City',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'North Pole Villa',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 500
      },
      {
        ownerId: 12,
        address: '12 Test Lane',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'City Livin',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 400
      },
      {
        ownerId: 13,
        address: '13 Test Lane',
        city: 'San Diego',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Surfers Paradise',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 450
      },
      {
        ownerId: 14,
        address: '14 Test Lane',
        city: 'Malibu',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Live like a Celebrity',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 1000
      },
      {
        ownerId: 15,
        address: '15 Test Lane',
        city: 'Schmalibu',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Live NEAR the celebrities',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 400
      },
      {
        ownerId: 16,
        address: '16 Test Lane',
        city: 'DTLA',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Dirty but loveable',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 300
      },
      {
        ownerId: 17,
        address: '17 Test Lane',
        city: 'San Francisco',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Next to all the parks!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 600
      },
      {
        ownerId: 18,
        address: '18 Test Lane',
        city: 'Oakland',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'The Town',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 450
      },
      {
        ownerId: 19,
        address: '19 Test Lane',
        city: 'San Bernardino',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Gateway to the Inland Empire',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 375
      },
      {
        ownerId: 20,
        address: '20 Test Lane',
        city: 'Topanga Canyon',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Stay Near the Beach!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 600
      },
      {
        ownerId: 21,
        address: '21 Test Lane',
        city: 'Santa Barbara',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Come visit UCSB!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 250
      },
      {
        ownerId: 22,
        address: '22 Test Lane',
        city: 'Ventura',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Close to wine country than LA',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 500
      },
      {
        ownerId: 23,
        address: '23 Test Lane',
        city: 'Maliboooo',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Coastal Retreat',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 500
      },
      {
        ownerId: 23,
        address: '24 Test Lane',
        city: 'Maliboooo',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Coastal Retreat',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 500
      },
      {
        ownerId: 25,
        address: '25 Test Lane',
        city: 'Maliboooo',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Coastal Retreat',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 500
      },
      {
        ownerId: 26,
        address: '26 Test Lane',
        city: 'Maliboooo',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Coastal Retreat',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 500
      },
      {
        ownerId: 27,
        address: '27 Test Lane',
        city: 'Maliboooo',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Coastal Retreat',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 500
      },
      {
        ownerId: 28,
        address: '28 Test Lane',
        city: 'Maliboooo',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Coastal Retreat',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 500
      },
      {
        ownerId: 29,
        address: '29 Test Lane',
        city: 'Maliboooo',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Coastal Retreat',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 500
      },
      {
        ownerId: 30,
        address: '30 Test Lane',
        city: 'Maliboooo',
        state: 'California',
        country: 'United States',
        lat: 33.73280035318947,
        lng: -117.80254810567625,
        name: 'Coastal Retreat',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est, exercitationem expedita rerum modi odio.',
        price: 500
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
