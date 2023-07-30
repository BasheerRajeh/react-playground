import { useContext } from "react";
import PropTypes from "prop-types";
import Modal from "../ui/Modal";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItems = cartCtx.items.map((item) => (
        <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartCtx.removeItem.bind(null, item.id)}
            onAdd={cartCtx.addItem.bind(null, ({ ...item, amount: 1 }))}
        />
    ));

    const hasItems = cartCtx.items.length > 0;

    if (!open) return;

    const total = cartCtx.totalAmount.toFixed(2);

    return (
        <Modal onClose={props.onClose}>
            <ul className="list-none m-0 p-0">{cartItems}</ul>
            <div className="flex justify-between items-center font-bold text-2xl my-4">
                <span>Total Amount</span>
                <span className="text-orange-600">${total}</span>
            </div>
            <div className="text-right">
                <button
                    className="py-2 px-4 border-[#8a2b06] border-2 cursor-pointer rounded-3xl ml-2 hover:bg-[#8a2b06] transition-all hover:text-white"
                    onClick={() => props.onClose()}
                >
                    Close
                </button>
                {hasItems && (
                    <button className="py-2 px-4 border-orange-600 cursor-pointer rounded-3xl ml-2 text-white bg-[#5a1a01] hover:bg-[#8a2b06] transition-all">
                        Order
                    </button>
                )}
            </div>
        </Modal>
    );
};

Cart.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Cart;
