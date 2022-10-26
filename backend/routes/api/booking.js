const express = require('express');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const { requireAuth } = require('../../utils/auth.js');
const { Booking, Spot, SpotImage } = require('../../db/models');

const router = express.Router();

/*-------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------Validations------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

// Get all of the Current User's Bookings
router.get('/current', requireAuth, async (req, res, next) => {
  const userBookings = await Booking.findAll({
    include: [
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
          exclude: ['createdAt', 'updatedAt', 'description']
        }
      }
    ],
    where: {
      userId: req.user.id
    }
  });

  for (let i = 0; i < userBookings.length; i++) {
    const booking = userBookings[i].toJSON();
    userBookings[i] = booking;
    if (booking.Spot.SpotImages.length) {
      booking.Spot.previewImage = booking.Spot.SpotImages[0].url;
      delete booking.Spot.SpotImages;
    } else {
      booking.Spot.previewImage = booking.Spot.SpotImages;
      delete booking.Spot.SpotImages;
    }
  }

  res.json(
    userBookings.length ? { Bookings: userBookings } : { message: "You don't have any bookings yet. Check out some Spots!" }
  );
});

/*-------------------------------------------------------------------------------------------------------*/
/*------------------------------------------Route Handlers-----------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

module.exports = router;
