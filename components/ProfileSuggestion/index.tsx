type ProfileItemProps = {
	fullname: string;
	recipes: number;
	followers: number;
};

const ProfileItem = () => {
	return (
		<div class="">
			<div></div>
		</div>
	);
};
const ProfileSuggestion = () => {
	return (
		<div class="flex flex-col">
			<div class="flex justify-between items-center">
				<h4>People you might want to follow</h4>
				<h4>See all Suggestion</h4>
			</div>
			<div class="bg-white">
				<ProfileItem />
			</div>
		</div>
	);
};
export default ProfileSuggestion;
