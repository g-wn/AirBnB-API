import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import LoginFormModal from '../LoginFormModal';
import CurrentUserSpotsModal from '../CurrentUserSpotsModal';
import CurrentUserReviewsModal from '../CurrentUserReviewsModal';

export default function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  let sessionLinks = <ProfileButton user={sessionUser} />;

  return (
    <div className='nav-container'>
      <span>
        <NavLink
          className='home-icon'
          to={`/`}
        >
          nocleaningfees
        </NavLink>
      </span>
      <span className='hidden-btns'>
        <SignupFormModal />
        <LoginFormModal />
        <CurrentUserSpotsModal />
        <CurrentUserReviewsModal />
      </span>
      {isLoaded && (
        <div className='right-buttons'>
          <NavLink
            className='host-btn-nav bold'
            to={`/host`}
          >
            Host your home
          </NavLink>
          <span>{sessionLinks}</span>
        </div>
      )}
    </div>
  );
}
