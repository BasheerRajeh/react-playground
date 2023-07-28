import PropTypes from "prop-types";

const Input = (props) => {
    return (
        <div className="flex items-center mb-2">
            <label htmlFor={props.input.id} className="font-bold mr-4">
                {props.label}
            </label>
            <input
                id={props.input.id}
                {...props.input}
                className="w-12 rounded text-center border-orange-500 "
            />
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
};

export default Input;
