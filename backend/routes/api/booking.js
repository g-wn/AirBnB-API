const express = require('express');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const { requireAuth } = require('../../utils/auth.js');
const { Booking, Spot, SpotImage } = require('../../db/models');

const router = express.Router();

/*-------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------Validations------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

const validateBooking = [
  check('endDate')
    .exists({ checkFalsy: true })
    .custom((value, { req }) => {
      if (new Date(value) <= new Date(req.body.startDate)) {
        throw new Error('endDate cannot be on or before startDate');
      }
      return true;
    }),
  handleValidationErrors
];

/*-------------------------------------------------------------------------------------------------------*/
/*------------------------------------------Route Handlers-----------------------------------------------*/
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
    userBookings.length
      ? { Bookings: userBookings }
      : { message: "You don't have any bookings yet. Check out some Spots!" }
  );
});

// Edit a Booking
router.put('/:bookingId', validateBooking, requireAuth, async (req, res, next) => {
  const { startDate, endDate } = req.body;
  const booking = await Booking.findByPk(req.params.bookingId);
  const spot = await Spot.findByPk(req.params.spotId, {
    include: [{ model: Booking, attributes: ['startDate', 'endDate'] }]
  });

  if (booking && booking.userId !== req.user.id) {
    const err = new Error('Forbidden');
    err.status = 403;
    next(err);
  }

  if (spot) {
    spot.Bookings.forEach(booking => {
      const bookingDates = booking.toJSON();
      if (
        startDate >= bookingDates.startDate &&
        startDate <= bookingDates.endDate &&
        endDate <= bookingDates.endDate &&
        endDate >= bookingDates.startDate
      ) {
        const err = new Error('Sorry, this spot is already booked for the specified dates');
        err.status = 403;
        err.errors = {
          startDate: 'Start date conflicts with an existing booking',
          endDate: 'End date conflicts with an existing booking'
        };
        return next(err);
      } else if (startDate >= bookingDates.startDate && startDate <= bookingDates.endDate) {
        const err = new Error('Sorry, this spot is already booked for the specified dates');
        err.status = 403;
        err.errors = { startDate: 'Start date conflicts with an existing booking' };
        return next(err);
      } else if (endDate <= bookingDates.endDate && endDate >= bookingDates.startDate) {
        const err = new Error('Sorry, this spot is already booked for the specified dates');
        err.status = 403;
        err.errors = { endDate: 'End date conflicts with an existing booking' };
        return next(err);
      }
    });
  }

  if (booking) {
    await booking.update({
      startDate,
      endDate
    });
    res.json(booking);
  } else {
    const err = new Error("Booking couldn't be found");
    err.status = 404;
    next(err);
  }
});

// Delete a Booking
router.delete('/:bookingId', requireAuth, async (req, res, next) => {
  const booking = await Booking.findByPk(req.params.bookingId, {
    include: [{ model: Spot }]
  });
  const currentDate = Date.now();

  if (booking && currentDate > booking.startDate) {
    const err = new Error("Bookings that have been started can't be deleted");
    err.status = 403;
    return next(err);
  }

  if (booking && booking.userId !== req.user.id && booking.Spot.ownerId !== req.user.id) {
    const err = new Error('Forbidden');
    err.status = 403;
    return next(err);
  }

  if (booking) {
    await booking.destroy();
    res.json({ message: 'Successfully deleted', statusCode: 200 });
  } else {
    const err = new Error("Booking couldn't be found");
    err.status = 404;
    next(err);
  }
});

module.exports = router;
