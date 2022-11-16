import PropTypes from "prop-types";

function Wrapper({ className, children }) {
    return (
        <div
            className={`shadow-md w-full rounded-lg bg-[white] max-h-popperHeight pt-2 min-h-[100px] ${className}`}
        >
            {children}
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;
