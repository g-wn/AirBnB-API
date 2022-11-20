import { Link }  from 'react-router-dom';
import { BiSearch } from 'react-icons/bi'
import './SearchBar.css'

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <Link to='/feature-not-found' className="where bold">Anywhere</Link>
      <Link to='/feature-not-found' className="when bold">Any week</Link>
      <Link to='/feature-not-found' className="how-many">Add guests</Link>
      <Link to='/feature-not-found' className="icon"><BiSearch /></Link>
    </div>
  )
}
