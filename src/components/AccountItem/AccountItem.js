import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import configs from "../../config";

import { icons } from "../icons";
function AccountItem({ data }) {
    return (
        <Link
            to={configs.routes.profile}
            className="flex gap-3 hover:bg-hover cursor-pointer py-[9px] px-4"
        >
            <img
                src={data.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover leading-8"
            />
            <div className="">
                <div className="flex items-center justify-center gap-2">
                    <h4 className="font-semibold leading-4">{data.nickname}</h4>
                    {data.tick && <icons.TickIcon />}
                </div>
                <span className="text-[14px] text-textLight">
                    {data.full_name}
                </span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
