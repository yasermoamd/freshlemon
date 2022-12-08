type CategoryCardProps = {
	category_name: string;
	recipe_length: number;
};
const CategoryCard = () => {
	return (
		<div class="bg-white rounded-t-2xl rounded-b-2xl pb-2 w-[183px] h-[231px]">
			<div class="">
				<img
					src="/img/fruties_category_bg.png"
					class="w-[183px] h-[110px]"
					alt=""
				/>
			</div>
			<div class="bg-white flex-col flex justify-center items-center gap-4">
				<div class="flex items-center justify-center bg-white w-[183px]">
					<div class="absolute">
						<div class="border-red-300 border-8  rounded-full">
							<img
								src="/img/profile_img.png"
								class="w-[80px] h-[80px]"
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col text-lg mt-8">
					<h1 class="text-lg font-bold">Jennifer Lawred</h1>
					<div class="flex flex-row gap-4">
						<div class="flex flex-col gap-1">
							<span>289</span>
							<span>recipes</span>
						</div>
						<div class="flex flex-col gap-1">
							<span>289</span>
							<span>recipes</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CategoryCard;
