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
  // check('email').custom(value => {
  //   return User.findOne({ where: { email: value } }).then(user => {
  //     if (user) {
  //       return Promise.reject('User with that email already exists');
  //     }
  //   });
  // }),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Username is required'),
  // check('username').custom(value => {
  //   return User.findOne({ where: { username: value } }).then(user => {
  //     if (user) {
  //       return Promise.reject('User with that username already exists');
  //     }
  //   });
  // }),
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

  const checkEmail = await User.findOne({
    where: {
      email: email
    }
  });

  const checkUsername = await User.findOne({
    where: {
      username: username
    }
  });

  if (checkEmail || checkUsername) {
    const err = Error('User already exists');
    err.status = 403;
    err.title = 'Validation error';
    if (checkEmail) {
      err.errors = { email: 'User with that email already exists' };
    } else if (checkUsername) {
      err.errors = { username: 'User with that username already exists' };
    }
    next(err);
  }

  const user = await User.signup({
    firstName,
    lastName,
    email,
    username,
    password
  });

  await setTokenCookie(res, user);

  return res.json(user.toSafeObject());
});

module.exports = router;
