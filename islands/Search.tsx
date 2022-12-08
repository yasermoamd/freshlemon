const Search = () => {
	return (
		<div class="flex flex-row items-center flex-wrap rounded-md w-[600px]">
			<input
				class="w-full py-2 pl-12 flex items-center focus:outline-none border-b-2"
				type="text"
				placeholder="Search Recipe, Profile, or Ingredients"
				style={{
					backgroundImage: "url(/icon/search_icon.svg)",
					backgroundRepeat: " no-repeat",
					backgroundSize: "35px 35px",
					backgroundPositionX: "5px",
					backgroundPositionY: "5px",
				}}
			/>
		</div>
	);
};
export default Search;
