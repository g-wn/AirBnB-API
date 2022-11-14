import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';

import './LoginForm.css';
import { loginModal } from '../../store/modal';

export default function LoginForm({ onClose }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ credential, password }))
    .then(async res => {
      if (res.ok) {
        dispatch(loginModal(false))
      }
    })
    .catch(async res => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>Username or Email</label>
      <input
        type='text'
        value={credential}
        onChange={e => setCredential(e.target.value)}
        required
      />
      <label>Password</label>
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type={'submit'}>Log In</button>
    </form>
  );
}
