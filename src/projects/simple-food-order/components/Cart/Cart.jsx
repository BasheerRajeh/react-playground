import PropTypes from "prop-types";
import Modal from "../ui/Modal";

const Cart = (props) => {
    const cartItems = [{ id: "c1", name: "Shoshi", amount: 2, price: 12.99 }].map(
        (item) => <li key={item.id}>{item.name}</li>
    );

    if (!open) return;

    return (
        <Modal onClose={props.onClose}>
            <ul className="list-none m-0 p-0">{cartItems}</ul>
            <div className="flex justify-between items-center font-bold text-2xl my-4">
                <span>Total Amount</span>
                <span>25.98</span>
            </div>
            <div className="text-right">
                <button
                    className="py-2 px-4 border-[#8a2b06] border-2 cursor-pointer rounded-3xl ml-2 hover:bg-[#8a2b06] transition-all hover:text-white"
                    onClick={() => props.onClose()}
                >
                    Close
                </button>
                <button className="py-2 px-4 border-orange-600 cursor-pointer rounded-3xl ml-2 text-white bg-[#5a1a01] hover:bg-[#8a2b06] transition-all">
                    Order
                </button>
            </div>
        </Modal>
    );
};

Cart.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Cart;
