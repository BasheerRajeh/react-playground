import PropTypes from "prop-types";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const price = `$${props.price}`;
    return (
        <li className="m-4 flex justify-between">
            <div className="flex flex-col flex-grow justify-between border-b-[1px] border-b-slate-300 pb-2">
                <h3 className="mb-1 font-bold">{props.name}</h3>
                <p className="italic">{props.description}</p>
                <span className="text-orange-600 font-semibold text-xl">{price}</span>
            </div>
            <MealItemForm id={props.name} />
        </li>
    );
};

MealItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default MealItem;
