import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function SubLayout({ children }) {
	return (
		<div>
			<div className="shadow-md fixed inset-x-0 top-0">
				<Header />
			</div>
			<div className="grid grid-cols-6 min-h-[2000px] gap-3 px-2 mt-hd">
				<div className="col-span-1">
					<Sidebar />
				</div>
				<div className="col-span-5">{children}</div>
			</div>
		</div>
	);
}

export default SubLayout;
