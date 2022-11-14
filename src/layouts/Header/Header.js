import { Link } from "react-router-dom";
import images from "../../assets/images";
import {
	Logo,
	CloseIcon,
	LoadingIcon,
	SearchIcon,
	UploadIcon,
	MessageIcon,
	InboxIcon,
} from "../../components/icons";

function Header() {
	return (
		<div className="h-hd flex items-center justify-between">
			<Link to={"/"}>
				<Logo />
			</Link>

			{/* Search */}

			<div className="flex items-center border-[1px] border-transparent bg-[#1618230f] h-search rounded-full pl-4 w-[361px] focus-within:border-[1px] focus-within:border-[#16182333]">
				<input
					className="bg-transparent flex-1 outline-none group searchInp"
					type="text"
					placeholder="Search accounts and videos"
					spellCheck
				/>
				<button className="">
					<CloseIcon />
				</button>
				<LoadingIcon />
				<hr className="w-[1px] h-6 bg-border" />
				<button className="pr-4 pl-3 hover:bg-hover h-full rounded-r-[inherit] searchBtn">
					<SearchIcon />
				</button>
			</div>

			{/* Action */}

			<div className="flex items-center gap-4">
				<button className="text-primaryDark flex items-center gap-2 border-[1px] border-border h-9 px-4 hover:bg-hover">
					<UploadIcon />
					<span className="font-semibold">Upload</span>
				</button>
				<button className="text-primaryDark">
					<MessageIcon />
				</button>
				<button className="text-primaryDark">
					<InboxIcon />
				</button>
				<div className="h-8 w-8 cursor-pointer">
					<img src={images.avatar} alt="Avatar" className="rounded-full" />
				</div>
			</div>
		</div>
	);
}

export default Header;
