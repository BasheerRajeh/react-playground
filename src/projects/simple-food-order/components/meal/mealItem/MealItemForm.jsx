import PropTypes from "prop-types";
import Input from "../../ui/Input";
import { useRef } from "react";

const MealItemForm = (props) => {

    const amountRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const amount = + amountRef.current.value;
        props.onAddToCart(amount);
    }


    return (
        <form onSubmit={submitHandler} className="text-center">
            <Input
                ref={amountRef}
                label="Amount"
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: 1,
                }}
            />
            <button type="submit" className="cursor-pointer bg-[#8a2b06] border-slate-600 text-white px-8 py-1 rounded-3xl font-bold hover:bg-red-950">
                + Add
            </button>
        </form>
    );
};

MealItemForm.propTypes = {
    id: PropTypes.string,
    onAddToCart: PropTypes.func
};

export default MealItemForm;
