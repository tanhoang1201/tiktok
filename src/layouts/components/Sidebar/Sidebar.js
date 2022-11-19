import Menu from "./Menu";
import { MenuItem } from "./Menu";
import { icons } from "../../../components/icons";
import configs from "../../../config";
import Accounts from "./Accounts";

function Sidebar() {
	return (
		<div className="pt-5">
			<Menu>
				<MenuItem
					to={configs.routes.home}
					title="For you"
					icon={<icons.HomeIconOutline />}
					iconActive={<icons.HomeIconSolid />}
				/>
				<MenuItem
					to={configs.routes.following}
					title="Following"
					icon={<icons.UserGroupOutline />}
					iconActive={<icons.UserGroupSolid />}
				/>
				<MenuItem
					to={configs.routes.live}
					title="Live"
					icon={<icons.LiveIconOutLine />}
					iconActive={<icons.LiveIconSolid />}
				/>
			</Menu>
			<hr className="mx-2 text-border" />
			<Accounts />
			<hr className="mx-2 text-border" />
		</div>
	);
}

export default Sidebar;
