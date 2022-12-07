import { h } from "preact";

type ProfileCardProps = {
	followers: number;
	likes: number;
};

const ProfileCard = (props: ProfileCardProps) => {
	return (
		<div>
			<div class="bg-white shadow-md w-[334px] sm:w-[305px] max-h-[220px] rounded-md">
				<div class="lg:flex md:flex hidden sm:flex flex-row gap-6 sm:gap-1">
					<div class="m-[1rem] mt-5">
						<img
							src="/img/profile_img.png"
							class="w-[70px] h-[70px] "
						/>
					</div>
					<div class="lg:flex md:flex flex-col gap-2 mt-[1rem]">
						<div class="">
							<h1 class="font-bold font-serif text-[#030F09] text-[1.75rem]">
								Nick Evans
							</h1>
							<span class="font-normal font-serif text-[14px] text-[#606060] leading-[22px]">
								Potato Master
							</span>
						</div>
						<div class="flex items-center flex-row gap-2 font-serif mb-2">
							<span class="text-[#606060] text-[14px] leading-[22px]">
								{props.followers} followers
							</span>
							<span class="bg-[#979797] w-[10px] h-[10px] rounded-full">
							</span>
							<span class="text-[#606060] text-[14px] leading-[22px]">
								{props.likes} likes
							</span>
						</div>
					</div>
				</div>
				<hr class="border-[#d4d4d8] border-1 m-[1rem]" />
				<div class="flex flex-col mx-[2rem] pb-2">
					<div class="flex justify-between mx-[1rem]">
						<div class="text-[#030F09] text-[20px] font-bold font-serif">
							20
						</div>
						<div class="text-[#030F09] text-[20px] font-bold font-serif">
							75
						</div>
						<div class="text-[#030F09] text-[20px] font-bold font-serif">
							248
						</div>
					</div>
					<div class="flex justify-between">
						<div class="text-[#030F09] text-[16px] leading-[32px] font-serif">
							Recipes
						</div>
						<div class="text-[#030F09] text-[16px] leading-[32px] font-serif">
							Saved
						</div>
						<div class="text-[#030F09] text-[16px] leading-[32px] font-serif">
							Following
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
