import React, { useState } from 'react';
import * as SessionActions from '../../store/session';
import { useDispatch } from 'react-redux';

import './SignupForm.css';

export default function SignupForm() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.prefentDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(SessionActions.signup({ firstName, lastName, email, username, password })).catch(async res => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>First Name</label>
      <input
        type='text'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        required
      />
      <label>Last Name</label>
      <input
        type='text'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        required
      />
      <label>Email</label>
      <input
        type='test'
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <label>Username</label>
      <input
        type='text'
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <label>Password</label>
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <label>Confirm Password</label>
      <input
        type='password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        required
      />
      <button type='submit'>Sign Up</button>
    </form>
  );
}
