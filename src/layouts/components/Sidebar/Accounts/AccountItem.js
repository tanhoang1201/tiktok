import { Link } from "react-router-dom";
import { icons } from "../../../../components/icons";
import images from "../../../../assets/images";
import configs from "../../../../config";

function AccountItem() {
	return (
		<Link
			to={configs.routes.profile}
			className="p-2 flex gap-3 hover:bg-hover rounded transition-colors"
		>
			<img src={images.avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
			<div className="">
				<div className="flex items-center justify-center gap-2">
					<h4 className="font-semibold leading-4">mtbitshop68</h4>
					<icons.TickIcon />
				</div>
				<span className="text-[14px] text-textLight">MTBstore68</span>
			</div>
		</Link>
	);
}

export default AccountItem;
