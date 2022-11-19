import TippyHeadLess from "@tippyjs/react/headless";
import { useEffect, useRef, useState } from "react";

import { icons } from "../../../../components/icons";
import { Wrapper as PopperWrapper } from "../../../../components/Popper";
import { useDebounce } from "../../../../hooks";
import AccountItem from "../../../../components/AccountItem";
import { search } from "../../../../services/search";

function Search() {
	const [searchValue, setSearchValue] = useState("");
	const [showResult, setShowResult] = useState(true);
	const [searchResult, setSearchResult] = useState([]);
	const [loading, setLoading] = useState(false);

	const debounced = useDebounce(searchValue, 500);
	const inpRef = useRef();

	useEffect(() => {
		if (!debounced.trim()) {
			setSearchResult([]);
			return;
		}

		setLoading(true);

		const fetApi = async () => {
			setLoading(true);
			const res = await search(debounced);
			setSearchResult(res);
			setLoading(false);
		};

		fetApi();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debounced]);

	const handleSetSearchValue = (e) => {
		const searchValue = e.target.value;

		if (!searchValue.startsWith(" ")) {
			setSearchValue(searchValue);
		}
	};

	const handleRemoveSearchValue = () => {
		setSearchValue("");
		inpRef.current.focus();
	};

	const handleTurnOffResult = () => {
		setShowResult(false);
	};

	const handleShowResults = () => {
		setShowResult(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<TippyHeadLess
				interactive
				visible={searchResult.length > 0 && showResult}
				render={(attrs) => (
					<div tabIndex="-1" {...attrs} className="w-searchWith">
						<PopperWrapper>
							<h3 className="text-textLight text-sm font-semibold px-3 py-[5px]">Accounts</h3>
							{searchResult.map((result) => (
								<AccountItem key={result.id} data={result} />
							))}
						</PopperWrapper>
					</div>
				)}
				onClickOutside={handleTurnOffResult}
			>
				<div className="flex items-center border-[1px] border-transparent bg-[#1618230f] h-search rounded-full pl-4 w-searchWith focus-within:border-[1px] focus-within:border-[#16182333]">
					<input
						ref={inpRef}
						value={searchValue}
						className="bg-transparent flex-1 outline-none group searchInp caret-primaryRed"
						type="text"
						placeholder="Search accounts and videos"
						spellCheck={false}
						onChange={handleSetSearchValue}
						onFocus={handleShowResults}
					/>
					{searchValue && !loading && (
						<button className="mx-3" onClick={handleRemoveSearchValue}>
							<icons.CloseIcon />
						</button>
					)}
					{loading && (
						<div className="animate-spin mx-3">
							<icons.LoadingIcon />
						</div>
					)}
					<hr className="w-[1px] h-6 bg-border" />
					<button
						className="pr-4 pl-3 hover:bg-hover h-full rounded-r-[inherit] searchBtn"
						onMouseDown={handleSubmit}
					>
						<icons.SearchIcon />
					</button>
				</div>
			</TippyHeadLess>
		</div>
	);
}

export default Search;
