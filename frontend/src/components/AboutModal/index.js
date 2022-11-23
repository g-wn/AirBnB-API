import { useDispatch, useSelector } from 'react-redux';
import { AboutModal } from '../../context/AboutModal';
import { Modal } from '../../context/Modal'
import { aboutModal } from '../../store/modal';
import About from './AboutModal';

import { FiChevronUp } from 'react-icons/fi';
import './AboutModal.css';

export default function AboutPopUp() {
  const dispatch = useDispatch();
  const showAboutModal = useSelector(state => state.modal.showAboutModal);

  return (
    <>
      <button
        className='show-about-btn'
        onClick={() => dispatch(aboutModal(true))}
      >
        <FiChevronUp size={25} />
      </button>
      {showAboutModal && (
        <AboutModal onClose={() => dispatch(aboutModal(false))}>
          <About />
        </AboutModal>
      )}
    </>
  );
}
