const express = require('express');

const { requireAuth } = require('../../utils/auth.js');

const { SpotImage, Spot } = require('../../db/models');

const router = express.Router();

/*-------------------------------------------------------------------------------------------------------*/
/*------------------------------------------Route Handlers-----------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

// Delete a Spot Image
router.delete('/:imageId', requireAuth, async (req, res, next) => {
  const image = await SpotImage.findByPk(req.params.imageId);
  if (image) {
    const spot = await Spot.findByPk(image.spotId);

    if (image && +spot.ownerId !== +req.user.id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }
  }

  if (image) {
    image.destroy();
    res.json({ message: 'Successfully deleted', statusCode: 200 });
  } else {
    const err = new Error("Spot Image couldn't be found");
    err.status = 404;
    next(err);
  }
});

module.exports = router;
