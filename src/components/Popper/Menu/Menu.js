import TippyHeadLess from "@tippyjs/react/headless";
import PropTypes from "prop-types";
import { useState } from "react";

import Wrapper from "../Wrapper";
import HeaderMenu from "./HeaderMenu";
import MenuItem from "./MenuItem";

function Menu({ items, children }) {
    const [history, setHistory] = useState([{ data: items }]);

    let current = history[history.length - 1];

    const handleNextMenu = (item) => {
        if (item.children) {
            setHistory([...history, item.children]);
        }
    };

    const renderItem = () => {
        return current.data.map((item) => (
            <MenuItem data={item} key={item.id} onClick={handleNextMenu} />
        ));
    };

    const handleBackMenu = () => {
        setHistory([...history.slice(0, history.length - 1)]);
    };

    const handleResetMenu = () => {
        setHistory([...history.slice(0, 1)]);
    };

    return (
        <TippyHeadLess
            placement="bottom-end"
            delay={[0, 700]}
            offset={[20, 8]}
            interactive
            render={(attrs) => (
                <div tabIndex="-1" {...attrs} className="w-[224px]">
                    <Wrapper className="pb-2 flex flex-col">
                        {history.length > 1 && (
                            <HeaderMenu
                                title={current.title}
                                onBack={handleBackMenu}
                            />
                        )}
                        <div className="overflow-y-auto"> {renderItem()}</div>
                    </Wrapper>
                </div>
            )}
            onHide={handleResetMenu}
            hideOnClick={false}
        >
            {children}
        </TippyHeadLess>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
};

export default Menu;
