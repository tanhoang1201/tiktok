import PropTypes from "prop-types";

import { icons } from "../../icons";

function HeaderMenu({ title, onBack }) {
    return (
        <div className="relative flex items-center py-[15px] mt-[-8px] ">
            <button className="h-full px-7" onClick={onBack}>
                <icons.BackIcon />
            </button>
            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
                {title}
            </h3>
        </div>
    );
}

HeaderMenu.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default HeaderMenu;
