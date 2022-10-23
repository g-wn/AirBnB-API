'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    static associate(models) {
      const bookingColumnMapping = {
        through: 'Booking',
        foreignKey: 'spotId',
        otherKey: 'userId'
      };

      const reviewColumnMapping = {
        through: 'Review',
        foreignKey: 'spotId',
        otherKey: 'userId'
      };

      Spot.hasMany(models.Booking, { foreignKey: 'spotId' });
      Spot.hasMany(models.SpotImage, { foreignKey: 'spotId' });
      Spot.hasMany(models.Review, { foreignKey: 'spotId' });

      Spot.belongsTo(models.User, { foreignKey: 'ownerId'});

      Spot.belongsToMany(models.User, bookingColumnMapping);
      Spot.belongsToMany(models.User, reviewColumnMapping);
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
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      lng: {
        type: DataTypes.DECIMAL,
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
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      previewImage: {
        type: DataTypes.STRING,
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
