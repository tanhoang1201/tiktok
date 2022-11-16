import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MenuItem({ data, onClick }) {
    let Com = "div";
    const props = {};

    if (data.to) {
        Com = Link;
        props.to = data.to;
    }

    return (
        <Com
            onClick={() => onClick(data)}
            {...props}
            className={`py-[10px] px-6 flex items-center gap-2 hover:bg-hover cursor-pointer ${
                data.separate && "separate"
            }`}
        >
            <span>{data.icon}</span>
            <p className="text-base font-semibold">{data.title}</p>
        </Com>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default MenuItem;
