import Header from "../components/Header";

function HeaderOnly({ children }) {
	return (
		<div>
			<div className="shadow-md fixed inset-x-0 top-0">
				<Header />
			</div>
			<div className="min-h-[2000px] px-2 mt-hd">{children}</div>
		</div>
	);
}

export default HeaderOnly;
