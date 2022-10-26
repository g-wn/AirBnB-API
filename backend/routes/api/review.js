const express = require('express');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const { requireAuth, restoreUser } = require('../../utils/auth.js');
const { Spot, User, Review, SpotImage, ReviewImage, Sequelize, Booking } = require('../../db/models');
const { Model } = require('sequelize');
const booking = require('../../db/models/booking.js');

const router = express.Router();

/*-------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------Validations------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

const validateReview = [];

/*-------------------------------------------------------------------------------------------------------*/
/*------------------------------------------Route Handlers-----------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

// Get all Reviews of the Current User
router.get('/current', requireAuth, async (req, res, _next) => {
  const { user } = req;

  const currentUserReviews = await Review.findAll({
    include: [
      { model: User, attributes: ['id', 'firstName', 'lastName'] },
      {
        model: Spot,
        include: [
          {
            model: SpotImage,
            where: { preview: true },
            attributes: ['url']
          }
        ],
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      },
      { model: ReviewImage, attributes: ['id', 'url'] }
    ],
    where: {
      userId: user.id
    }
  });

  // for (let i = 0; i < reviews.length; i++) {
  //     const review = reviews[i].toJSON();
  //     if (review.Spot) {
  //         reviews[i] = review;
  //         review.Spot.previewImage = review.Spot.SpotImages[0].url;
  //         delete review.Spot.SpotImages;
  //     }
  // }

  currentUserReviews.forEach(review => {
    review = review.toJSON();
    delete review.Spot
  })

  res.json({ Reviews: currentUserReviews });
});

module.exports = router;
