import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";

function Home({ children }) {
    return (
        <div>
            <div className="shadow-md">
                <div className="w-[1150px] mx-auto">
                    <Header />
                </div>
            </div>
            <div className="w-[1150px] mx-auto grid grid-cols-3 min-h-[2000px] gap-3">
                <div className="col-span-1 ">
                    <Sidebar />
                </div>
                <div className="col-span-2 bg-cyan-500">{children}</div>
            </div>
        </div>
    );
}

export default Home;
