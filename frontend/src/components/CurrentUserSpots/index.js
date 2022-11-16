import { useSelector } from 'react-redux';
import '../CurrentUserSpots';

export default function CurrentUserSpots() {
  const sessionUser = useSelector(state => state.session.user);



  return <div className='user-spots-container'>Hello from user spots</div>;
}
