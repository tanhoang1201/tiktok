import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
	return (
		<div>
			<div className="shadow-md fixed inset-x-0 top-0">
				<div className="w-[1150px] mx-auto">
					<Header />
				</div>
			</div>
			<div className="w-[1150px] mx-auto grid grid-cols-3 min-h-[2000px] gap-3 px-2 mt-hd ">
				<div className="col-span-1 ">
					<Sidebar />
				</div>
				<div className="col-span-2">{children}</div>
			</div>
		</div>
	);
}

export default MainLayout;
