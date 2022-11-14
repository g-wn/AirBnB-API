import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { loginModal } from '../../store/modal';
import LoginForm from './LoginForm';
import './LoginForm.css'

export default function LoginFormModal() {
  const dispatch = useDispatch();
  const showLoginModal = useSelector(state => state.modal.showLoginModal);

  return (
    <>
      <button className='log-in-btn' onClick={() => dispatch(loginModal(true))}>Log In</button>
      {showLoginModal && (
        <Modal onClose={() => dispatch(loginModal(false))}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}
