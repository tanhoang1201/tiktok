import PropTypes from "prop-types";

function Menu({ children }) {
	return <div className="pb-2">{children}</div>;
}

Menu.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Menu;
