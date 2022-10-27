const express = require('express');

const { requireAuth } = require('../../utils/auth.js');

const { ReviewImage, Review } = require('../../db/models');

const router = express.Router();

/*-------------------------------------------------------------------------------------------------------*/
/*------------------------------------------Route Handlers-----------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

// Delete a Review Image
router.delete('/:imageId', requireAuth, async (req, res, next) => {
  const image = await ReviewImage.findByPk(req.params.imageId);
  if (image) {
    const review = await Review.findByPk(image.reviewId);

    if (image && +review.userId !== +req.user.id) {
      const err = new Error('Forbidden');
      err.status = 403;
      return next(err);
    }
  }

  if (image) {
    image.destroy();
    res.json({ message: 'Successfully deleted', statusCode: 200 });
  } else {
    const err = new Error("Review Image couldn't be found");
    err.status = 404;
    next(err);
  }
});

module.exports = router;
