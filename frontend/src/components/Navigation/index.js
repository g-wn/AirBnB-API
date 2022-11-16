import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import LoginFormModal from '../LoginFormModal';
import { putSpot } from '../../store/spots';
import CurrentUserSpotsModal from '../CurrentUserSpotsModal';

export default function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  let sessionLinks = <ProfileButton user={sessionUser} />;

  const handleUpdateDemoSpot = e => {
    e.preventDefault();

    const updatedSpot = {
      address: 'UPDATE',
      city: 'UPDATE',
      state: 'UPDATE',
      country: 'TEST COUNTRY',
      name: 'TEST NAME',
      description: 'TEST DESCRIPTION',
      price: 1000
    };

    return dispatch(putSpot(36, updatedSpot));
  };

  return (
    <div className='nav-container'>
      <span>
        <NavLink to={`/`}>Home</NavLink>
      </span>
      <span className='hidden-btns'>
        <SignupFormModal />
        <LoginFormModal />
        <CurrentUserSpotsModal />
      </span>
      {sessionUser && <button onClick={handleUpdateDemoSpot}>UPDATE THE TEST SPOT</button>}
      {isLoaded && <span>{sessionLinks}</span>}
    </div>
  );
}
