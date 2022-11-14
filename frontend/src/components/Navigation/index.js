import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import LoginFormModal from '../LoginFormModal';

export default function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks = <ProfileButton user={sessionUser} />;

  return (
    <div className='nav-container'>
      <span>
        <NavLink to={`/`}>Home</NavLink>
      </span>
      <span className='hidden-btns'>
        <SignupFormModal />
        <LoginFormModal />
      </span>
      {isLoaded && <span>{sessionLinks}</span>}
    </div>
  );
}
