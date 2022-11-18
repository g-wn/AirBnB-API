import { Link, useHistory } from 'react-router-dom';
import './FeatureNotFound.css';

export default function FeatureNotFound() {
  const history = useHistory()

  return (
    <div className='not-found-splash'>
      <div className="not-found-txt bold">
        <div className="not-found-top">Oh geeze why'd you have to click THAT button?</div>
        <div className="not-found-btm">This feature isn't implemented yet...</div>
      </div>
      <div className='safety-btns'>
        <button
          className='go-back bold'
          onClick={() => history.goBack()}
        >
          Go Back
        </button>
          <Link
            to={`/`}
            className='go-home bold'
          >
            Go Home
          </Link>
      </div>
    </div>
  );
}
