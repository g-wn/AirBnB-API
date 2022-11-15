import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import LoginFormModal from '../LoginFormModal';
import { postSpot } from '../../store/spots';

export default function Navigation({ isLoaded }) {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  let sessionLinks = <ProfileButton user={sessionUser} />;

  const handleCreateDemoSpot = e => {
    e.preventDefault();

    const demoSpot = {
      address: 'TEST ADDRESS',
      city: 'TEST CITY',
      state: 'TEST STATE',
      country: 'TEST COUNTRY',
      name: 'TEST NAME',
      description: 'TEST DESCRIPTION',
      price: 1000
    };

    return dispatch(postSpot(demoSpot))
  }

  return (
    <div className='nav-container'>
      <span>
        <NavLink to={`/`}>Home</NavLink>
      </span>
      <span className='hidden-btns'>
        <SignupFormModal />
        <LoginFormModal />
      </span>
      {sessionUser && (
        <button onClick={handleCreateDemoSpot}>CREATE A SPOT</button>
      )}
      {isLoaded && <span>{sessionLinks}</span>}
    </div>
  );
}
