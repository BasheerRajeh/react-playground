import PropTypes from "prop-types";
import Input from "../../ui/Input";

const MealItemForm = (props) => {
    return (
        <form className="text-center">
            <Input
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
            <button className="cursor-pointer bg-[#8a2b06] border-slate-600 text-white px-8 py-1 rounded-3xl font-bold hover:bg-red-950">
                + Add
            </button>
        </form>
    );
};

MealItemForm.propTypes = {
    id: PropTypes.string,
};

export default MealItemForm;
