const express = require('express');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const { requireAuth, restoreUser } = require('../../utils/auth.js');
const { Spot, User, Review, SpotImage, ReviewImage, Sequelize } = require('../../db/models');
const { Model } = require('sequelize');

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

  try {
    const currentUserReviews = await Review.findAll({
      // attributes: ['id'],
        // include: [
      //     { model: User, attributes: ['id', 'firstName', 'lastName'] },
      //     {
      //       model: Spot,
      //       include: [
      //         {
      //           model: SpotImage,
      //           where: { preview: true },
      //           attributes: [],
      //         }
      //       ],
      //       attributes: {
      //         exclude: ['createdAt', 'updatedAt']
      //       }
      //     },
        //   { model: ReviewImage, attributes: ['id', 'url'] }
        // ],
      //   where: {
      //     userId: user.id
      //   }
      });

    res.json({ Reviews: currentUserReviews });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
