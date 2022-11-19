import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function MenuItem({ to, title, icon, iconActive }) {
	const location = useLocation();
	let isActive = to === location.pathname;
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`flex items-center gap-2 p-2 hover:bg-hover rounded transition-colors ${
					isActive ? "text-primaryRed" : ""
				}`
			}
		>
			<div>{isActive ? iconActive : icon}</div>
			<h2 className="font-bold text-lg">{title}</h2>
		</NavLink>
	);
}

MenuItem.propTypes = {
	to: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.func,
	iconActive: PropTypes.func,
};

export default MenuItem;
