const express = require('express');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const { requireAuth, restoreUser } = require('../../utils/auth.js');
const { Spot, User, Review, SpotImage, ReviewImage, Sequelize, Booking } = require('../../db/models');
const { Model } = require('sequelize');
const e = require('express');

const router = express.Router();

/*-------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------Validations------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

const validateReview = [
  check('review').exists({ checkFalsy: true }).notEmpty().withMessage('Review text is required'),
  check('stars')
    .exists({ checkFalsy: true })
    .isFloat({ min: 1, max: 5 })
    .withMessage('Stars must be an integer from 1 to 5'),
  handleValidationErrors
];

/*-------------------------------------------------------------------------------------------------------*/
/*------------------------------------------Route Handlers-----------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

// Get all Reviews of the Current User
router.get('/current', requireAuth, async (req, res, _next) => {
  const { user } = req;

  const userReviews = await Review.findAll({
    include: [
      { model: User, attributes: ['id', 'firstName', 'lastName'] },
      {
        model: Spot,
        include: [
          {
            model: SpotImage,
            where: { preview: true },
            attributes: ['url'],
            required: false
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

  for (let i = 0; i < userReviews.length; i++) {
    const review = userReviews[i].toJSON();
    userReviews[i] = review;
    if (review.Spot.SpotImages.length) {
      review.Spot.previewImage = review.Spot.SpotImages[0].url;
      delete review.Spot.SpotImages;
    } else {
      review.Spot.previewImage = review.Spot.SpotImages;
      delete review.Spot.SpotImages;
    }
  }

  res.json({ Reviews: userReviews });
});

// Add an Image to a Review based on the Review's id
router.post('/:reviewId/images', requireAuth, async (req, res, next) => {
  const { url } = req.body;
  const review = await Review.findByPk(req.params.reviewId);
  const imageCount = await ReviewImage.findOne({
    where: { reviewId: req.params.reviewId },
    attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'imageCount']],
    raw: true
  });

  if (review && +review.userId !== +req.user.id) {
    const err = new Error('Unauthorized');
    err.status = 401;
    return next(err);
  } else if (review && imageCount.imageCount >= 10) {
    const err = new Error('Maximum number of images for this resource was reached');
    err.status = 403;
    next(err);
  }

  if (review) {
    const newImage = await ReviewImage.create({
      reviewId: +req.params.reviewId,
      url
    });
    res.json({ id: newImage.id, url: newImage.url });
  } else {
    const err = new Error("Review couldn't be found");
    err.status = 404;
    next(err);
  }
});

// Edit a review
router.put('/:reviewId', validateReview, requireAuth, async (req, res, next) => {
  const { review, stars } = req.body;
  const prevReview = await Review.findByPk(req.params.reviewId);

  if (prevReview && +prevReview.userId !== +req.user.id) {
    const err = new Error('Unauthorized');
    err.status = 401;
    return next(err);
  }

  if (prevReview) {
    await prevReview.update({
      review,
      stars
    });

    res.json(prevReview);
  } else {
    const err = new Error("Review couldn't be found");
    err.status = 404;
    next(err);
  }
});

// Delete a Review
router.delete('/:reviewId', requireAuth, async (req, res, next) => {
  const review = await Review.findByPk(req.params.reviewId);

  if (review && +review.userId !== +req.user.id) {
    const err = new Error('Unauthorized');
    err.status = 401;
    return next(err);
  }

  if (review) {
    review.destroy();
    res.json({ message: 'Successfully deleted', statusCode: 200 });
  } else {
    const err = new Error("Review couldn't be found");
    err.status = 404;
    next(err);
  }
});

module.exports = router;
