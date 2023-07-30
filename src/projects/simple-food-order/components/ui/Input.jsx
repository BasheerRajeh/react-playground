import PropTypes from "prop-types";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return (
        <div className="flex items-center mb-2">
            <label htmlFor={props.input.id} className="font-bold mr-4">
                {props.label}
            </label>
            <input
                ref={ref}
                id={props.input.id}
                {...props.input}
                className="w-12 rounded text-center border-orange-500 "
            />
        </div>
    );
});

Input.displayName = "Input";

Input.propTypes = {
    label: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
};

export default Input;
