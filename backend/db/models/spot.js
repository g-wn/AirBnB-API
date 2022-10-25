'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    static associate(models) {
      const bookingColumnMap = {
        through: models.Booking,
        foreignKey: 'spotId',
        otherKey: 'userId'
      };

      const reviewColumnMap = {
        through: models.Review,
        foreignKey: 'spotId',
        otherKey: 'userId'
      };

      Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true });
      Spot.hasMany(models.SpotImage, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true });
      Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true });

      Spot.belongsTo(models.User, { as: 'Owner', foreignKey: 'ownerId'});

      Spot.belongsToMany(models.User, bookingColumnMap);
      Spot.belongsToMany(models.User, reviewColumnMap);
    }
  }
  Spot.init(
    {
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lat: {
        type: DataTypes.DECIMAL(12, 10),
        allowNull: false
      },
      lng: {
        type: DataTypes.DECIMAL(13, 10),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Spot'
    }
  );
  return Spot;
};
