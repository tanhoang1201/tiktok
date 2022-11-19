import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import images from "../../../assets/images";
import { icons } from "../../../components/icons";
import Menu from "../../../components/Popper/Menu";
import Search from "./Search";
import configs from "../../../config";

const menu_item = [
	{
		id: 1,
		icon: <icons.LanguageIcon />,
		title: "English",
		children: {
			title: "Language",
			data: [
				{
					id: 1,
					title: "English",
				},
				{
					id: 2,
					title: "Vietnamese",
				},
			],
		},
	},
	{
		id: 2,
		icon: <icons.HelpIcon />,
		title: "Feedback and help",
		to: "/feedback",
	},
	{
		id: 3,
		icon: <icons.KeyboardIcon />,
		title: "Keyboard shortcuts",
	},
];

const userMenu = [
	{
		id: 4,
		icon: <icons.UserIcon />,
		title: "View profile",
		to: "/me",
	},
	{
		id: 5,
		icon: <icons.CoinIcon />,
		title: "Get coins",
		to: "/coins",
	},
	{
		id: 6,
		icon: <icons.SettingIcon />,
		title: "Settings",
		to: "/settings",
	},
	...menu_item,
	{
		id: 7,
		icon: <icons.LogInIcon />,
		title: "Log out",
		separate: true,
	},
];

function Header() {
	let user = true;
	return (
		<div className="h-hd flex items-center justify-between px-5 bg-[white]">
			<Link to={configs.routes.home}>
				<icons.Logo />
			</Link>

			{/* Search */}

			<Search />

			{/* Action */}

			<div className="flex items-center gap-4">
				<button className="text-primaryDark flex items-center gap-2 border-[1px] border-border h-hBtnM px-4 hover:bg-hover">
					<icons.UploadIcon />
					<span className="font-semibold">Upload</span>
				</button>
				{user ? (
					<>
						<Tippy content="Messages">
							<button className="text-primaryDark">
								<icons.MessageIcon />
							</button>
						</Tippy>
						<Tippy content="Inbox">
							<button className="text-primaryDark">
								<icons.InboxIcon />
							</button>
						</Tippy>
					</>
				) : (
					<button className="hover:bg-btnPrimaryHover primary h-hBtnM min-w-[100px]">Log in</button>
				)}

				<Menu items={user ? userMenu : menu_item}>
					{user ? (
						<div className="h-8 w-8 cursor-pointer">
							<img src={images.avatar} alt="Avatar" className="rounded-full" />
						</div>
					) : (
						<button className="h-hBtnM">
							<icons.MenuIcon />
						</button>
					)}
				</Menu>
			</div>
		</div>
	);
}

export default Header;
