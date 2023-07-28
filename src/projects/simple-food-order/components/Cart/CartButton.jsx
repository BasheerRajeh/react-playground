import CartIcon from "./CartIcon";

const CartButton = () => {
    return (
        <button className="p-2 flex items-center relative rounded-full hover:bg-stone-900 transition-all ease-in duration-200">
            <span className="w-6 text-white">
                <CartIcon />
            </span>
            <span className="absolute right-0 top-0 w-4 h-4 text-sm inline-block bg-yellow-600 rounded-full">
                4
            </span>
        </button>
    );
};

export default CartButton;
