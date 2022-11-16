import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as spotActions from '../../store/spots';

export default function SpotForm({ spot }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [address, setAddress] = useState(spot.address);
  const [city, setCity] = useState(spot.city);
  const [state, setState] = useState(spot.state);
  const [country, setCountry] = useState(spot.country);
  const [name, setName] = useState(spot.name);
  const [previewImage, setPreviewImage] = useState(spot.previewImage)
  const [description, setDescription] = useState(spot.description);
  const [price, setPrice] = useState(spot.price);
  const [errors, setErrors] = useState([]);

  console.log('previewImage URL ------------>', previewImage)

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors([]);

    const updatedSpot = await dispatch(
      spotActions.putSpot(spot.id, {
        address,
        city,
        state,
        country,
        name,
        previewImage,
        description,
        price,
      })
    ).catch(async res => {
      const data = await res.json();
      if (data && data.errors) setErrors(Object.values(data.errors));
    });

    updatedSpot && await dispatch(spotActions.getSpots()).then(() => history.push(`/`))
  };

  return (
    <div className='update-form-container'>
      <header className='update-form-header'>
        <div className='header-text bold'>Things Change!</div>
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
          <h2 className='signup-form-h2'>Enter some updates to your home</h2>
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
          Agree and update your home
        </button>
      </form>
    </div>
  );
}
