import { Link } from "preact-router";

type CreateRecipeProps = {
	followers: number;
};

const CreateRecipeBanner = (props: CreateRecipeProps) => {
	return (
		<div class="bg-white w-[731px] p-2 max-h-[80px] rounded-xl">
			<div class="flex justify-between items-center px-4">
				<div class="text-[#030F09] text-[18px] leading-[22px] font-serif">
					<p class="">
						{props.followers} of your followers are online
					</p>
				</div>
				<button class="bg-[#30BE76] text-white w-[179px] h-[50px] font-serif font-bold text-[16px] text-center rounded-xl shadow-xl">
					<Link href="/signup" class="pl-[17px]">
						Create Recipe
					</Link>
				</button>
			</div>
		</div>
	);
};

export default CreateRecipeBanner;
