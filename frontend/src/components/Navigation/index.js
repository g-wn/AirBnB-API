import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

export default function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks = <ProfileButton user={sessionUser} />
  // if (sessionUser) {
  //   sessionLinks = <ProfileButton user={sessionUser} />;
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <SignupFormModal />
  //     </>
  //   );
  // }

  return (
    <div className='nav-container'>
      <span>
        <NavLink to={`/`}>Home</NavLink>
      </span>
      {isLoaded && <span>{sessionLinks}</span>}
    </div>
  );
}
