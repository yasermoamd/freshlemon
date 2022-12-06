import { Link } from "preact-router";

type CreateRecipeProps = {
	first_name: string;
	last_name?: string;
	profile_img: string;
	createdAtByHour: number;
	recipe_title: string;
	recipe_description: string;
	recipe_img: string;
	like: number;
	comments: number;
};

const RecipeCard = (props: CreateRecipeProps) => {
	return (
		<div class="bg-white w-[731px] rounded-bl-2xl rounded-br-2xl rounded-2xl mt-6">
			<div class="flex flex-row bg-white m-4 gap-6">
				<div class="flex">
					<img
						src={props.profile_img}
						alt={`${props.first_name} + ${props.last_name}`}
					/>
				</div>
				<div class="flex flex-col">
					<h3 class="font-semibold font-serif text-[#030F09] text-[14px]">
						{props.first_name} {props.last_name}
					</h3>
					<span class="text-[#606060] text-[12px]">
						{props.createdAtByHour}h ago
					</span>
				</div>
			</div>
			<div
				class="flex justify-between flex-col gap-10"
				style={{
					backgroundImage: "url(/img/recipe_card_img.png)",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center center",
					width: "731px",
					height: "238px",
				}}
			>
			</div>
			<div class="flex flex-col bg-white">
				<div class="flex justify-between items-center mx-8 my-4">
					<div class="font-semibold text-[18px] leading-[32px] font-serif text-[#030F09]">
						{props.recipe_title}
					</div>
					<div class="">
						<img
							src="/icon/like_shape.svg"
							class="w-[25px] h-[25px]"
							alt={`${props.recipe_title}`}
						/>
					</div>
				</div>
				<div class="mx-8 font-normal text-[14px] leading-[22px] font-serif text-[#A8A8A8]">
					{props.recipe_description}
				</div>
				<div class="flex justify-between mx-8 mb-4 mt-2">
					<div class="flex flex-row gap-4">
						<div class="text-[#606060] text-[14px] leading-[22px]">
							{props.like} Like
						</div>
						<div class="text-[#606060] text-[14px] leading-[22px]">
							{props.comments} Comment
						</div>
					</div>
					<div class="">
						<div class="flex justify-center gap-2 font-bold items-center border-[#30BE76] border-2 p-2 text-[#30BE76] w-[139px] h-[50px] text-[18px] text-center rounded-xl shadow-md">
							<img
								src="/icon/add_icon.svg"
								class="w-[24px]"
								alt="save"
							/>
							<Link href="/recipe" class="pl-[17px] border-none">
								save
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;