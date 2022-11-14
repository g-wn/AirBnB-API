import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import { signupModal } from "../../store/modal";
import SignupForm from "./SignupForm";
import './SignupForm.css'

export default function SignupFormModal() {
  const dispatch = useDispatch();
  const showSignupModal = useSelector(state => state.modal.showSignupModal)

  return (
    <>
      <button onClick={() => dispatch(signupModal(true))}>Sign Up</button>
      {showSignupModal && (
        <Modal onClose={() => dispatch(signupModal(false))}>
          <SignupForm />
        </Modal>
      )}
    </>
  )
}
