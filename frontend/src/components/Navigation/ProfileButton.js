import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import * as spotActions from '../../store/spots';
import CurrentUserSpotsModal from '../CurrentUserSpotsModal';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './ProfileButton.css';

export default function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  useEffect(() => {
    dispatch(spotActions.getCurrentUsersSpots());
  }, [dispatch, sessionUser]);

  const logout = e => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button
        className='btn profile-btn'
        onClick={openMenu}
      >
        <div className='icon-container'>
          <i className='fas fa-bars'></i>
        </div>
        <div className='icon-container'>
          <i className='fas fa-user-circle' />
        </div>
      </button>
      {showMenu && user && (
        <div className='profile-dropdown'>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <CurrentUserSpotsModal />
          <div>
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
      )}
      {showMenu && !user && (
        <div className='login-signup-dropdown'>
          <LoginFormModal />
          <SignupFormModal />
          <NavLink
            to={`/host`}
            className='host-btn-dropdown'
          >
            Host your home
          </NavLink>
        </div>
      )}
    </>
  );
}
