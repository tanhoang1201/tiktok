import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import PropTypes from "prop-types";

function Profile({ children }) {
	return (
		<div>
			<div className="shadow-md">
				<Header />
			</div>
			<div className="grid grid-cols-6 px-4">
				<div className="col-span-1 min-h-[2000px] bg-orange-400">
					<Sidebar />
				</div>
				<div className="col-span-5">{children}</div>
			</div>
		</div>
	);
}

Profile.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Profile;
