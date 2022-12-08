import { Link } from "preact-router";

type CreateRecipeProps = {
	followers: number;
};

const CreateRecipeBanner = (props: CreateRecipeProps) => {
	return (
		<div class="bg-white w-[631px] h-[60px] flex rounded-2xl">
			<div class="flex container justify-between items-center m-4">
				<div class="">
					<p class="text-[#030F09] text-[18px] leading-[20px] font-serif">
						{props.followers} of your followers are online
					</p>
				</div>
				<div class="">
					<button class="bg-[#30BE76] text-white w-[128px] h-[36px] 
				font-serif font-bold leading-4 text-[14px] text-center rounded-xl shadow-lg">
						<Link href="/signup">
							Create Recipe
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateRecipeBanner;
