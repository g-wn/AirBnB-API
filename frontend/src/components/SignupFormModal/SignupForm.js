import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';

import './SignupForm.css';
import { signupModal } from '../../store/modal';
import { IoCloseSharp } from 'react-icons/io5';

export default function SignupForm() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return await dispatch(sessionActions.signup({ firstName, lastName, email, username, password }))
        .then(async res => {
          if (res.ok) {
            dispatch(signupModal(false));
          }
        })
        .catch(async res => {
          const data = await res.json();
          if (data && data.errors) setErrors(Object.values(data.errors));
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <header className='signup-form-header'>
        <button
          className='close-form-btn'
          onClick={() => dispatch(signupModal(false))}
        >
          <IoCloseSharp size={20} />
        </button>
        <div className='header-text bold'>Sign Up</div>
        <div className='hidden'></div>
      </header>

      <form
        className='signup-form'
        onSubmit={handleSubmit}
      >
        {errors.length > 0 ? (
          <ul>
            {errors.map((error, idx) => (
              <li className='error-red' key={idx}>{error}</li>
            ))}
          </ul>
        ) : (
          <h2 className='signup-form-h2'>
            Welcome to
            <span className='h2-black'> no</span>
            <span className='h2-red'>Cleaning</span>
            <span className='h2-black'>fees</span>
          </h2>
        )}

        <div className='inputs-container'>
          <input
            className='first-name-input input'
            onChange={e => setFirstName(e.target.value)}
            placeholder='First name'
            required
            type='text'
            value={firstName}
          />
          <input
            className='last-name-input input'
            onChange={e => setLastName(e.target.value)}
            placeholder='Last name'
            required
            type='text'
            value={lastName}
          />
          <p className='id-match-disclaimer'>Make sure it doesn't match any official government ID.</p>
          <input
            className='username-input input'
            onChange={e => setUsername(e.target.value)}
            placeholder='Username'
            required
            type='text'
            value={username}
          />
          <input
            className='email-input input'
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
            required
            type='test'
            value={email}
          />
          <p className='valid-email-disclaimer'>You must have an actual email, but don't enter a real one here.</p>
          <input
            className='signup-password-input input'
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            required
            type='password'
            value={password}
          />
          <input
            className='confirm-input input'
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder='Re-enter your password'
            required
            type='password'
            value={confirmPassword}
          />
        </div>

        <p className='tos-disclaimer'>
          By selecting <span>Agree and continue</span>, I agree to having a really fantastic time.
        </p>

        <button
          className='signup-submit-btn'
          type='submit'
        >
          Agree and sign up
        </button>
      </form>
    </>
  );
}
