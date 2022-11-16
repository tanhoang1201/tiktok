import TippyHeadLess from "@tippyjs/react/headless";

import { CloseIcon, LoadingIcon, SearchIcon } from "../../../components/icons";
import { Wrapper as PopperWrapper } from "../../../components/Popper";
import { AccountItem } from "../../../components/AccountItem";
import { useEffect, useRef, useState } from "react";

function Search() {
	const [searchValue, setSearchValue] = useState("");
	const [showResult, setShowResult] = useState(true);
	const [searchResult, setSearchResult] = useState([]);
	const [loading, setLoading] = useState(false);

	const inpRef = useRef();

	useEffect(() => {
		if (!searchValue.trim()) {
			setSearchResult([]);
			return;
		}

		setLoading(true);

		fetch(
			`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
				searchValue
			)}&type=less`
		)
			.then((response) => response.json())
			.then((result) => {
				setSearchResult(result.data);
				setLoading(false);
			});
	}, [searchValue]);

	const handleSetSearchValue = (e) => {
		setSearchValue(e.target.value);
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
						spellCheck
						onChange={handleSetSearchValue}
						onFocus={handleShowResults}
					/>
					{searchValue && !loading && (
						<button className="mx-3" onClick={handleRemoveSearchValue}>
							<CloseIcon />
						</button>
					)}
					{loading && (
						<div className="animate-spin mx-3">
							<LoadingIcon />
						</div>
					)}
					<hr className="w-[1px] h-6 bg-border" />
					<button className="pr-4 pl-3 hover:bg-hover h-full rounded-r-[inherit] searchBtn">
						<SearchIcon />
					</button>
				</div>
			</TippyHeadLess>
		</div>
	);
}

export default Search;
