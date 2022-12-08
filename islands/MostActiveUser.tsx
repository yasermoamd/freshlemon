type MostActiveUserPorps = {
	userId?: string;
	profile_img?: string;
	first_name?: string;
};
const MostActiveUserList = (props: MostActiveUserPorps) => {
	return (
		<div key={props.userId}>
			<img
				class="ml-6 mb-4 w-[40px] h-[40px]"
				src={props.profile_img}
				alt={props.first_name}
			/>
		</div>
	);
};
const MostActiveUser = (props: MostActiveUserPorps) => {
	return (
		<div class="bg-white bg-white w-[305px] h-[113px] rounded-xl">
			<div class="flex flex-col gap-2">
				<h3 class="ml-6 mt-2 font-bold font-serif text-[18px] text-[#030F09]">
					Most Active Today
				</h3>
				<div class="flex mr-4">
					<MostActiveUserList
						profile_img={props.profile_img}
						userId={props.userId}
					/>
					<MostActiveUserList
						profile_img={props.profile_img}
						userId={props.userId}
					/>
					<MostActiveUserList
						profile_img={props.profile_img}
						userId={props.userId}
					/>
					<MostActiveUserList
						profile_img={props.profile_img}
						userId={props.userId}
					/>
					<MostActiveUserList
						profile_img={props.profile_img}
						userId={props.userId}
					/>
				</div>
			</div>
		</div>
	);
};

export default MostActiveUser;
