import AccountItem from "./AccountItem";
import AccountList from "./AccountList";

function Accounts() {
	return (
		<div className="my-4">
			<span className="text-sm block font-semibold text-textLight px-2 mb-2">
				Suggested accounts
			</span>
			<AccountList>
				<AccountItem />
				<AccountItem />
				<AccountItem />
			</AccountList>
			<button className="px-2 font-semibold text-sm text-primaryRed">See all</button>
		</div>
	);
}

export default Accounts;
