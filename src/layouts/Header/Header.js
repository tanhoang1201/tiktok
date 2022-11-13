import { Link } from "react-router-dom";
import {
    Logo,
    CloseIcon,
    LoadingIcon,
    SearchIcon,
} from "../../components/icons";

function Header() {
    return (
        <div className="h-hd flex items-center justify-between">
            <Link to={"/"}>
                <Logo />
            </Link>
            <div className="flex items-center bg-[#1618230f] h-search rounded-full pl-4 w-[361px]">
                <input
                    className="bg-transparent flex-1 outline-none "
                    type="text"
                    placeholder="Search accounts and videos "
                />
                <button>
                    <CloseIcon />
                </button>
                <LoadingIcon />
                <hr className="w-[1px] h-6 bg-[#1618231f]" />
                <button className="pr-4 pl-3 hover:bg-[#16182308] h-full rounded-r-[inherit]">
                    <SearchIcon />
                </button>
            </div>
            <div></div>
        </div>
    );
}

export default Header;
