import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/large.png';

import SpotForm from './SpotForm';
import './UpdateSpot.css';

export default function UpdateSpot() {
  const location = useLocation();
  const { spot } = location.state;

  if (!spot) return null;
  return (
    <>
      {spot && (
        <div className='host-splash-container'>
          <NavLink
            className='home-btn'
            to={`/`}
          >
            <img src={logo} alt="Logo" className='logo-host-update-splash'/>
          </NavLink>
          <div className='left-panel panel'>
            <div className='left-content'>
              <p className='hosting-welcome-msg bold'>Changed your mind about how much you want to charge?</p>
              <p className='edit-spot-disclaimer'>Or anything else about your spot...</p>
            </div>
          </div>

          <div
            className='right-panel panel'
            style={spot && { backgroundImage: `url('${spot.previewImage}')` }}
          >
            <SpotForm spot={spot} />
          </div>
        </div>
      )}
    </>
  );
}
