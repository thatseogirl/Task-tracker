import PropTypes from "prop-types";

export default function Button({ color, text, onClick }) {
    return (
        <button
            style={{ backgroundColor: color }}
            className='btn'
            onClick={onClick}
        >
            {text}
        </button>
    );
}

Button.defaultProps = {
    color: "steelblue",
};

Button.proptype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};
