type MostActiveUserPorps = {
	userId: string;
	profile_img: string;
	first_name: string;
};

const MostActiveUser = (props: MostActiveUserPorps) => {
	return (
		<div class="bg-white bg-white w-[325px] max-h-[123px] rounded-xl">
			<div class="flex flex-col gap-2">
				<h3 class="ml-6 mt-2 font-bold font-serif text-[18px] text-[#030F09]">
					Most Active Today
				</h3>
				<div key={props.userId}>
					<img
						class="ml-6 mb-2"
						src={props.profile_img}
						alt={props.first_name}
					/>
				</div>
			</div>
		</div>
	);
};

export default MostActiveUser;
