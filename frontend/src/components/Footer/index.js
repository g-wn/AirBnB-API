import { Link } from 'react-router-dom'
import {FiChevronUp} from 'react-icons/fi'
import {GrLanguage} from 'react-icons/gr'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer-container">

      <div className="site-links">
        <span className="copyright">
          &copy; 2022 noCleaningfees, Inc.
        </span>
        <span className="dot">
          &bull;
        </span>
        <span className="privacy">
          <Link to='/feature-not-found'>Privacy</Link>
        </span>
        <span className="dot">
          &bull;
        </span>
        <span className="terms">
          <Link to='/feature-not-found'>Terms</Link>
        </span>
        <span className="dot">
          &bull;
        </span>
        <span className="sitemap">
          <Link to='/feature-not-found'>Sitemap</Link>
        </span>
        <span className="dot">
          &bull;
        </span>
        <span className="destinations">
          <Link to='/feature-not-found'>Destinations</Link>
        </span>
      </div>

      <div className="about-links">
        <div className="language">
          <span className="language-icon">
            <Link to='/feature-not-found'>
              <GrLanguage />
              </Link>
          </span>
          <span className="language-text">
            <Link to='/feature-not-found'>
              English (US)
            </Link>
          </span>
        </div>
        <div className="currency">
          <span className="currency-icon">
            <Link to='/feature-not-found'>
            $
            </Link>
          </span>
          <span className="currency-text">
            <Link to='feature-not-found'>
              USD
            </Link>
          </span>
        </div>
        <div className="about-me">
          <span className="about-me-text">
            Who dared clone Airbnb?
          </span>
          <span className="about-me-icon">
            <FiChevronUp size={25}/>
          </span>
        </div>
      </div>
    </footer>
  )
}
