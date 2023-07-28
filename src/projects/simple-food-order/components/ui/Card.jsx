import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div
            className={
                "bg-slate-100 rounded-2xl p-4 drop-shadow-md" + props.className
            }
        >
            {props.children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Card;
