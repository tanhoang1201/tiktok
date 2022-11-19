import PropTypes from "prop-types";

function AccountList({ children }) {
	return <div className="mb-2">{children}</div>;
}

AccountList.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AccountList;
