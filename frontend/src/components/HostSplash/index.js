import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HostForm from '../HostForm';

import './HostSplash.css';

export default function HostSplash() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='host-splash-container'>
      <NavLink
        className='home-btn'
        to={`/`}
      >
        Home
      </NavLink>
      <div className='left-panel panel'>
        <div className='left-content'>
          <p className='hosting-welcome-msg bold'>Open your landlord's door to hosting</p>
          <button
            className='hosting-btn'
            onClick={() => setShowForm(!showForm)}
          >
            Try Hosting
          </button>
        </div>
      </div>

      <div
        className='right-panel panel'
        style={{ backgroundImage: "url('https://loremflickr.com/2160/3840/people')" }}
      >
        {showForm ? (
          <div className='form-container'>
            <HostForm showForm={showForm} setShowForm={setShowForm}/>
          </div>
        ) : (
          <div className='testimonial'>
            <div>
              Earn <span className='money'>money</span>,
            </div>
            <div className='spend-it'>spend it at Airbnb...</div>
          </div>
        )}
      </div>
    </div>
  );
}
