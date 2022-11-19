import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';

import './LoginForm.css';
import { loginModal } from '../../store/modal';
import { IoCloseSharp } from 'react-icons/io5';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsApple, BsEnvelope } from 'react-icons/bs';

export default function LoginForm({ onClose }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(async res => {
        if (res.ok) {
          dispatch(loginModal(false));
        }
      })
      .catch(async res => {
        const data = await res.json();
        if (data && data.message) setErrors([data.message]);
      });
  };

  const handleFbLogin = e => {
    e.preventDefault();
    const credential = 'fblover@fb.com';
    const password = 'password1';

    return dispatch(sessionActions.login({ credential, password })).then(async res => {
      if (res.ok) {
        dispatch(loginModal(false));
      }
    });
  };

  const handleGglLogin = e => {
    e.preventDefault();
    const credential = 'gglboi@ggl.com';
    const password = 'password2';

    return dispatch(sessionActions.login({ credential, password })).then(async res => {
      if (res.ok) {
        dispatch(loginModal(false));
      }
    });
  };

  const handleAplLogin = e => {
    e.preventDefault();
    const credential = 'aplclt@apl.eco';
    const password = 'password3';

    return dispatch(sessionActions.login({ credential, password })).then(async res => {
      if (res.ok) {
        dispatch(loginModal(false));
      }
    });
  };

  const handleEmlLogin = e => {
    e.preventDefault();
    const credential = 'oldskool@email.com';
    const password = 'password4';

    return dispatch(sessionActions.login({ credential, password })).then(async res => {
      if (res.ok) {
        dispatch(loginModal(false));
      }
    });
  };

  return (
    <>
      <header className='login-form-header'>
        <button
          className='close-form-btn'
          onClick={() => dispatch(loginModal(false))}
        >
          <IoCloseSharp size={20} />
        </button>
        <div className='header-text bold'>Log in</div>
        <div className='hidden'></div>
      </header>

      <form
        className='login-form'
        onSubmit={handleSubmit}
      >
        {errors.length > 0 ? (
          <ul>
            {errors.map((error, idx) => (
              <li className='error-red' key={idx}>{error}</li>
            ))}
          </ul>
        ) : (
          <h2 className='login-form-h2'>
            Welcome back to
            <span className='h2-black'> no</span>
            <span className='h2-red'>Cleaning</span>
            <span className='h2-black'>fees</span>
          </h2>
        )}

        <div className='inputs-container'>
          <input
            className='credential-input input'
            onChange={e => setCredential(e.target.value)}
            placeholder='Username or Email'
            required
            type='text'
            value={credential}
          />
          <input
            className='password-input input'
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            required
            type='password'
            value={password}
          />
          <p className='login-disclaimer'>
            We won't call or text you to confirm your Username or Email because this site doesn't actually do anything.
            Standard message and data rates won't apply.
          </p>
        </div>

        <button
          className='login-submit-btn'
          type={'submit'}
        >
          Log In
        </button>

        <span className='line-break-text'>or</span>

        <button
          className='fb-demo-user demo-user-btn'
          onClick={handleFbLogin}
        >
          <span className='demo-user-login-icon'>
            <BsFacebook
              size={20}
              color='rgb(24, 118, 242)'
            />
          </span>
          <span className='demo-user-btn-text'>Continue with Facebook Demo User</span>
          <span className='hidden'></span>
        </button>
        <button
          className='ggl-demo-user demo-user-btn'
          onClick={handleGglLogin}
        >
          <span className='demo-user-login-icon'>
            <FcGoogle size={20} />
          </span>
          <span className='demo-user-btn-text'>Continue with Google Demo User</span>
          <span className='hidden'></span>
        </button>
        <button
          className='apl-demo-user demo-user-btn'
          onClick={handleAplLogin}
        >
          <span className='demo-user-login-icon'>
            <BsApple size={20} />
          </span>
          <span className='demo-user-btn-text'>Continue with Apple Demo User</span>
          <span className='hidden'></span>
        </button>
        <button
          className='eml-demo-user demo-user-btn'
          onClick={handleEmlLogin}
        >
          <span className='demo-user-login-icon'>
            <BsEnvelope size={20} />
          </span>
          <span className='demo-user-btn-text'>Continue with Email Demo User</span>
          <span className='hidden'></span>
        </button>
      </form>
    </>
  );
}
