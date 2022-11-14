import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './ProfileButton.css';

export default function ProfileButton({ user }) {
  const dispatch = useDispatch();
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
          <div>
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
      )}
      {showMenu && !user && (
        <div className='login-signup-dropdown'>
          <div>
            <LoginFormModal />
          </div>
          <div>
            <SignupFormModal />
          </div>
        </div>
      )}
    </>
  );
}
