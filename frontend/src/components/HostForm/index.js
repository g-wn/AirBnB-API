import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as spotActions from '../../store/spots';
import { useDispatch } from 'react-redux';

import './HostForm.css';
import { IoCloseSharp } from 'react-icons/io5';

export default function HostForm({ showForm, setShowForm }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [previewImage, setPreviewImg] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors([]);

    const newSpot = await dispatch(
      spotActions.postSpot({
        address,
        city,
        state,
        country,
        name,
        description,
        price
      })
    ).catch(async res => {
      const data = await res.json();
      if (data && data.errors) setErrors(Object.values(data.errors));
    });

    console.log('NEW SPOT!!', newSpot)

    if (newSpot && previewImage) {
      await dispatch(spotActions.postImage(newSpot.id, { url: previewImage, preview: true }));
    }

    if (newSpot) history.push(`/`);
  };

  return (
    <div className='host-form-container'>
      <header className='host-form-header'>
        <button
          className='close-form-btn'
          onClick={() => setShowForm(false)}
        >
          <IoCloseSharp size={20} />
        </button>
        <div className='header-text bold'>Welcome to the adventure</div>
        <div className='hidden'></div>
      </header>

      <form
        className='host-form'
        onSubmit={handleSubmit}
      >
        {errors.length > 0 ? (
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        ) : (
          <h2 className='signup-form-h2'>Tell us about your home</h2>
        )}

        <div className='inputs-container'>
          <input
            className='address-input input'
            onChange={e => setAddress(e.target.value)}
            placeholder='Enter your address'
            required
            type='text'
            value={address}
          />
          <input
            className='city-input input'
            onChange={e => setCity(e.target.value)}
            placeholder='Enter your city'
            required
            type='text'
            value={city}
          />
          <input
            className='state-input input'
            onChange={e => setState(e.target.value)}
            placeholder='Enter your state'
            required
            type='text'
            value={state}
          />
          <input
            className='country-input input'
            onChange={e => setCountry(e.target.value)}
            placeholder='Enter your country'
            required
            type='text'
            value={country}
          />
          <p className='location-disclaimer'>By no means should you give me your real address.</p>
          <input
            className='name-input input'
            onChange={e => setName(e.target.value)}
            placeholder='Enter a name for your home'
            required
            type='text'
            value={name}
          />
          <p className='home-name-weird'>Homes have names, name yours now!</p>
          <input
            className='description-input input'
            onChange={e => setDescription(e.target.value)}
            placeholder='Describe your home'
            required
            type='text'
            value={description}
          />
          <input
            className='preview-img-input input'
            onChange={e => setPreviewImg(e.target.value)}
            placeholder='Add an image url to get started'
            required
            type='text'
            value={previewImage}
          />
          <input
            className='price-input input'
            onChange={e => setPrice(e.target.value)}
            placeholder="What's the price?"
            required
            type='number'
            value={price}
          />
        </div>

        <p className='agree-to-be-found'>
          By agreeing, you acknowledge that if you entered a real address, I won't personally come find you, but someone
          might.
        </p>

        <button
          className='host-submit-btn'
          type='submit'
        >
          Agree and list your home
        </button>
      </form>
    </div>
  );
}
