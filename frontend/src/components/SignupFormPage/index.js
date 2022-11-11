import React, { useState } from 'react';

import * as SessionActions from '../../store/session';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './SignupForm.css';


export default function SignupFormPage() {
  const dispatch = useDispatch();
  return (
    <div>Hello from SignupFormPage</div>
  )
}
