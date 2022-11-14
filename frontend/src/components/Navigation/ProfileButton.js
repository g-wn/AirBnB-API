import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
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
        <div className='profile-dropdown-container'>
          <ul className='profile-dropdown'>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        </div>
      )}
      {showMenu && !user && (
        <div className="login-signup-dropdown-container">
          <ul className="login-signup-dropdown">
            <li>
              <LoginFormModal />
            </li>
            <li>
              <SignupFormModal />
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
