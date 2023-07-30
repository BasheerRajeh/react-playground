import PropTypes from "prop-types";
import Card from "./Card";

const Backdrop = (props) => {
    return (
        <div
            className="h-screen w-screen fixed top-0 left-0 bg-slate-900 opacity-50 z-20"
            onClick={() => props.onClose()}
        ></div>
    );
};

Backdrop.propTypes = {
    onClose: PropTypes.func.isRequired,
};

const ModalOverlay = (props) => {
    return (
        <div className="fixed top-40 max-h-96 w-full z-30">
            <Card className="max-w-md m-auto max-h-96 w-3/4  overflow-auto">{props.children}</Card>
        </div>
    );
};

ModalOverlay.propTypes = {
    children: PropTypes.node,
};

const Modal = (props) => {
    return (
        <>
            <Backdrop onClose={props.onClose} />
            <ModalOverlay>{props.children}</ModalOverlay>
        </>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
