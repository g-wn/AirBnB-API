import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { loginModal } from '../../store/modal';
import LoginForm from './LoginForm';

export default function LoginFormModal() {
  const dispatch = useDispatch();
  const showLoginModal = useSelector(state => state.modal.showLoginModal);

  return (
    <>
      <button onClick={() => dispatch(loginModal(true))}>Log In</button>
      {showLoginModal && (
        <Modal onClose={() => dispatch(loginModal(false))}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}
