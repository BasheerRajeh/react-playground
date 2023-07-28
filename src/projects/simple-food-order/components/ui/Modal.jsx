import PropTypes from "prop-types";
import Card from "./Card";

const Backdrop = () => {
    return (
        <div className="h-screen w-screen fixed top-0 left-0 bg-slate-900 opacity-50 z-20"></div>
    );
};

/**
 * 
 *   position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
 * @param {*} props 
 * @returns 
 */

const ModalOverlay = (props) => {
    return (
        <div className="fixed top-40 max-h-96 left-[10%] w-4/5 z-30">
            <Card className="max-w-md m-auto w-3/4">{props.children}</Card>
        </div>
    );
};

ModalOverlay.propTypes = {
    children: PropTypes.node,
};

const Modal = (props) => {
    return (
        <>
            <Backdrop />
            <ModalOverlay>{props.children}</ModalOverlay>
        </>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
};

export default Modal;
