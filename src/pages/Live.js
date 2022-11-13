import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";

function Live({ children }) {
    return (
        <div>
            <div className="shadow-md">
                <Header />
            </div>
            <div className="grid grid-cols-6 ">
                <div className="col-span-1 min-h-[2000px] bg-orange-400">
                    <Sidebar />
                </div>
                <div className="col-span-5">{children}</div>
            </div>
        </div>
    );
}

export default Live;
