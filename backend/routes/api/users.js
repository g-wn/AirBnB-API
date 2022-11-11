const express = require('express');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const { setTokenCookie, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

const router = express.Router();

/*-------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------Validations------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

const validateSignup = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('First name is required'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Last name is required'),
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Username is required'),
  check('username').not().isEmail().withMessage('Username cannot be an email'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more'),
  handleValidationErrors
];

/*-------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------User Signup------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

// Sign Up
router.post('/', validateSignup, async (req, res, next) => {
  const { firstName, lastName, email, password, username } = req.body;

  try {
    const user = await User.signup({
      firstName,
      lastName,
      email,
      username,
      password
    });

    const token = setTokenCookie(res, user);

    return res.json({user: user.toSafeObject()/* , token */});
  } catch (e) {
    e.errors.forEach(error => {
      if (error.type === 'unique violation') {
        const err = new Error('User already exists');
        err.status = 403;
        if (error.path === 'username') err.errors = { username: 'User with that username already exists' };
        else if (error.path === 'email') err.errors = { email: 'User with that email already exists' };
        next(err);
      }
    });
    next(e);
  }
});

module.exports = router;
