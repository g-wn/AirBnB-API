const express = require('express');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const { setTokenCookie, requireAuth } = require('../../utils/auth.js');
const { Spot } = require('../../db/models');

const router = express.Router();

/*-------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------Validations------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

const validateCreateSpot = [];

// Get all Spots
router.get('/', async (req, res, next) => {
  const allSpots = await Spot.findAll();

  res.json({Spots: allSpots});
});

module.exports = router;
