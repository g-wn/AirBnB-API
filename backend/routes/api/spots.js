const express = require('express');

const { check, query } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const { requireAuth, restoreUser } = require('../../utils/auth.js');
const { Spot, User, Review, SpotImage, ReviewImage, Sequelize, Booking } = require('../../db/models');
const { Model } = require('sequelize');
const Op = Sequelize.Op;

const router = express.Router();

/*-------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------Validations------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

const validateSpot = [
  check('address').exists({ checkFalsy: true }).notEmpty().withMessage('Street address is required.'),
  check('city').exists({ checkFalsy: true }).notEmpty().withMessage('City is required.'),
  check('state').exists({ checkFalsy: true }).notEmpty().withMessage('State is required.'),
  check('country').exists({ checkFalsy: true }).notEmpty().withMessage('Country is required.'),
  // check('lat').isNumeric().withMessage('Latitude is not valid'),
  // check('lng').isNumeric().withMessage('Longitude is not valid'),
  check('name').exists({ checkFalsy: true }).isLength({ max: 49 }).withMessage('Name must be less than 50 characters.'),
  check('description').exists({ checkFalsy: true }).isLength({ min: 50 }).withMessage('Please provide a more detailed description (50 characters).'),
  check('price').exists({ checkFalsy: true }).notEmpty().isNumeric().withMessage('Price per day is required.'),
  handleValidationErrors
];

const validateReview = [
  check('review').exists({ checkFalsy: true }).notEmpty().withMessage('Review text is required.'),
  check('stars')
    .exists({ checkFalsy: true })
    .isFloat({ min: 1, max: 5 })
    .withMessage('Stars must be an integer from 1 to 5'),
  handleValidationErrors
];

const validateBooking = [
  check('endDate')
    .exists({ checkFalsy: true })
    .custom((value, { req }) => {
      if (new Date(value) <= new Date(req.body.startDate)) {
        throw new Error('endDate cannot be on or before startDate.');
      }
      return true;
    }),
  handleValidationErrors
];

const validateQuery = [
  query('page')
    .isFloat({ min: 0, max: 10 })
    .optional({ checkFalsy: true })
    .withMessage('Page must be greater than or equal to 0'),
  query('size')
    .isFloat({ min: 0, max: 20 })
    .optional({ checkFalsy: true })
    .withMessage('Size must be greater than or equal to 0'),
  query('maxLat')
    .isFloat({ min: -90.0, max: 90.0 })
    .optional({ checkFalsy: true })
    .withMessage('Maximum latitude is invalid'),
  query('minLat')
    .isFloat({ min: -90.0, max: 90.0 })
    .custom((value, { req }) => {
      if (+value > req.query.maxLat) {
        throw new Error('Minimum latitude is invalid');
      }
      return true;
    })
    .optional({ checkFalsy: true })
    .withMessage('Minimum latitude is invalid'),
  query('maxLng')
    .isFloat({ min: -180.0, max: 180.0 })
    .optional({ checkFalsy: true })
    .withMessage('Maximum longitude is invalid'),
  query('minLng')
    .isFloat({ min: -180.0, max: 180.0 })
    .custom((value, { req }) => {
      if (+value > req.query.maxLng) {
        throw new Error('Minimum longitute is invalid');
      }
      return true;
    })
    .optional({ checkFalsy: true })
    .withMessage('Minimum longitude is invalid'),
  query('minPrice')
    .isFloat({ min: 0 })
    .optional({ checkFalsy: true })
    .withMessage('Minimum price must be greater than or equal to 0'),
  query('maxPrice')
    .isFloat({ min: 0 })
    .optional({ checkFalsy: true })
    .withMessage('Maximum price must be greater than or equal to 0'),
  handleValidationErrors
];

/*-------------------------------------------------------------------------------------------------------*/
/*------------------------------------------Route Handlers-----------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

// Get all Spots owned by the Current User
router.get('/current', requireAuth, async (req, res, _next) => {
  const { user } = req;

  const currentUserSpots = await Spot.findAll({
    include: [
      { model: Review, attributes: [] },
      {
        model: SpotImage,
        where: { preview: true },
        attributes: [],
        required: false
      }
    ],
    attributes: {
      include: [
        [Sequelize.fn('ROUND', Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 1), 'avgRating'],
        [Sequelize.col('SpotImages.url'), 'previewImage']
      ]
    },
    group: ['Spot.id', 'previewImage'],
    where: {
      ownerId: user.id
    }
  });

  if (currentUserSpots.length) {
    res.json({ Spots: currentUserSpots });
  } else {
    res.json({
      message: `${user.firstName} ${user.lastName} does not currently have any listed Spots`
    });
  }
});

// Get all Reviews by a Spot's id
router.get('/:spotId/reviews', async (req, res, next) => {
  const spot = await Spot.findByPk(req.params.spotId);

  if (spot) {
    const spotReviews = await Review.findAll({
      where: { spotId: req.params.spotId },
      include: [
        { model: User, attributes: ['id', 'firstName', 'lastName'] },
        { model: ReviewImage, attributes: ['id', 'url'] }
      ]
    });

    res.json(
      spotReviews.length
        ? { Reviews: spotReviews }
        : { message: `${spot.name} doesn't have any reviews yet. Book a stay and let the owners know what you think!` }
    );
  } else {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    next(err);
  }
});

// Get all Bookings for a Spot based on the Spot's id
router.get('/:spotId/bookings', requireAuth, async (req, res, next) => {
  const spot = await Spot.findByPk(req.params.spotId);

  if (spot && +spot.ownerId === +req.user.id) {
    const bookings = await Booking.findAll({
      where: {
        spotId: req.params.spotId
      },
      include: [{ model: User, attributes: ['id', 'firstName', 'lastName'] }]
    });
    res.json({ Bookings: bookings });
  } else if (spot && +spot.ownerId !== +req.user.id) {
    const bookings = await Booking.findAll({
      where: {
        spotId: req.params.spotId
      },
      attributes: ['spotId', 'startDate', 'endDate']
    });
    res.json({ Bookings: bookings });
  } else {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    next(err);
  }
});

// Get details for a Spot from an id
router.get('/:spotId', async (req, res, next) => {
  const spot = await Spot.findByPk(req.params.spotId, {
    include: [
      {
        model: SpotImage,
        attributes: ['id', 'url', 'preview'],
        required: false
      },
      {
        model: User,
        as: 'Owner',
        attributes: ['id', 'firstName', 'lastName'],
        required: false
      },
      { model: Review, attributes: [], required: false }
    ],
    attributes: {
      include: [
        [Sequelize.fn('COUNT', Sequelize.col('Reviews.id')), 'numReviews'],
        [Sequelize.fn('ROUND', Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 1), 'avgStarRating']
      ]
    },
    group: ['SpotImages.id', 'Spot.id', 'Owner.id']
  });

  if (spot) {
    res.json(spot);
  } else {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    next(err);
  }
});

// Get all Spots
router.get('/', validateQuery, async (req, res, _next) => {
  let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;

  const where = {};

  // Handle min/max latitude
  if (minLat && !maxLat) where.lat = { [Op.gte]: minLat };
  else if (maxLat && !minLat) where.lat = { [Op.lte]: maxLat };
  else if (minLat && maxLat) where.lat = { [Op.between]: [minLat, maxLat] };

  // Handle min/max longitude
  if (minLng && !maxLng) where.lng = { [Op.gte]: minLng };
  else if (maxLng && !minLng) where.lng = { [Op.lte]: maxLng };
  else if (minLng && maxLng) where.lng = { [Op.between]: [minLng, maxLng] };

  // Handle min/max price
  if (minPrice && !maxPrice) where.price = { [Op.gte]: minPrice };
  else if (maxPrice && !minPrice) where.price = { [Op.lte]: maxPrice };
  else if (minPrice && maxPrice) where.price = { [Op.between]: [minPrice, maxPrice] };

  if (!page) page = 0;
  if (!size) size = 40;
  let offset = size * (page - 1);
  if (offset < 0) offset = 0;

  const allSpots = await Spot.findAll({
    where,
    include: [
      { model: Review, attributes: [] },
      {
        model: SpotImage,
        where: { preview: true },
        attributes: [],
        required: false
      }
    ],
    attributes: {
      include: [
        [Sequelize.fn('ROUND', Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 1), 'avgRating'],
        [Sequelize.col('SpotImages.url'), 'previewImage']
      ]
    },
    group: ['Spot.id', 'previewImage'],
    offset,
    limit: size,
    subQuery: false
  });

  res.json({ Spots: allSpots, page, size });
});

// Create a Review for a Spot based on the Spot's id
router.post('/:spotId/reviews', validateReview, requireAuth, async (req, res, next) => {
  const { review, stars } = req.body;
  const spot = await Spot.findByPk(req.params.spotId);

  if (spot) {
    try {
      const newSpotReview = await Review.create({
        firstName: req.user.dataValues.firstName,
        userId: +req.user.id,
        spotId: +req.params.spotId,
        review,
        stars
      });

      res.status(201).json(newSpotReview);
    } catch (e) {
      const err = new Error('User already has a review for this spot');
      err.status = 403;
      next(err);
    }
  } else {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    next(err);
  }
});

// Add an Image to a Spot based on the Spot's id
router.post('/:spotId/images', requireAuth, async (req, res, next) => {
  const { url, preview } = req.body;
  const spot = await Spot.findByPk(req.params.spotId);

  if (spot && +spot.ownerId !== +req.user.id) {
    const err = new Error('Forbidden');
    err.status = 403;
    return next(err);
  }

  if (spot) {
    const newSpotImage = await SpotImage.create({
      spotId: +req.params.spotId,
      url,
      preview
    });

    res.json({
      id: newSpotImage.id,
      url: newSpotImage.url,
      preview: newSpotImage.preview
    });
  } else {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    next(err);
  }
});

// Create a Booking from a Spot based on the Spot's id
router.post('/:spotId/bookings', validateBooking, requireAuth, async (req, res, next) => {
  const { startDate, endDate } = req.body;
  const spot = await Spot.findByPk(req.params.spotId, {
    include: [{ model: Booking, attributes: ['startDate', 'endDate'] }]
  });

  if (spot && +spot.ownerId === req.user.id) {
    const err = new Error('You cannot book your own Spot!');
    err.status = 403;
    return next(err);
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

  if (spot) {
    const newBooking = await Booking.create({
      spotId: +req.params.spotId,
      userId: +req.user.id,
      startDate,
      endDate
    });

    res.json(newBooking);
  } else {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    next(err);
  }
});

// Create a Spot
router.post('/', validateSpot, requireAuth, async (req, res, _next) => {
  const { address, city, state, country, lat, lng, name, description, price } = req.body;

  const { user } = req;

  const newSpot = await Spot.create({
    ownerId: user.id,
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price
  });

  res.status(201).json(newSpot);
});

// Edit a Spot
router.put('/:spotId', validateSpot, requireAuth, async (req, res, next) => {
  const { address, city, state, country, lat, lng, name, description, price } = req.body;
  const spot = await Spot.findByPk(req.params.spotId);

  if (spot && +spot.ownerId !== +req.user.id) {
    const err = new Error('Forbidden');
    err.status = 403;
    return next(err);
  }

  if (spot) {
    await spot.update({
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price
    });

    res.json(spot);
  } else {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    next(err);
  }
});

// Delete a Spot
router.delete('/:spotId', requireAuth, async (req, res, next) => {
  const spot = await Spot.findByPk(req.params.spotId);

  if (spot && +spot.ownerId !== +req.user.id) {
    const err = new Error('Forbidden');
    err.status = 403;
    return next(err);
  }

  if (spot) {
    spot.destroy();
    res.json({ message: 'Succssfully deleted', statusCode: 200 });
  } else {
    const err = new Error("Spot couldn't be found");
    err.status = 404;
    next(err);
  }
});

module.exports = router;
