import PropTypes from "prop-types";

const CartItem = (props) => {
    const price = `${props.price.toFixed(2)}`
    return (
        <li className="flex justify-between items-center px-4 py-2 mx-4 border-b-orange-500 border-b-2">
            <div>
                <h2 className="mb-2 text-['#363636'] text-2xl font-bold ">{props.name}</h2>
                <div className="w-40 flex justify-between items-center">
                    <span className="font-bold text-[#8a2b06]">${price}</span>
                    <span className="font-bold border border-slate-800 rounded-xl text-['363636'] py-1 px-2 before:content-['x'] before:mr-2">
                        {props.amount}
                    </span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <button
                    onClick={props.onRemove}
                    className="py-1 px-4 font-bold border-orange-500 border-2 text-lg text-['#8a2b06'] hover:text-orange-500 rounded-lg bg-transparent cursor-pointer m-1 ml-4  hover:bg-['#8a2b06'] active:text-white active:bg-['#8a2b06'] "
                >
                    -
                </button>
                <button
                    onClick={props.onAdd}
                    className="py-1 px-4 font-bold border-orange-500 border-2 text-lg text-['#8a2b06'] hover:text-orange-500 rounded-lg bg-transparent cursor-pointer m-1 ml-4  hover:bg-['#8a2b06'] active:text-white active:bg-['#8a2b06']"
                >
                    +
                </button>
            </div>
        </li>
    );
};

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default CartItem;
