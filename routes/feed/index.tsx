import { Head } from "$fresh/runtime.ts";
import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/x/std/http/cookie.ts";
import Header from "../../components/Header/index.tsx";
import ProfileCard from "../../components/ProfileCard/index.tsx";
import CreateRecipeBanner from "../../components/CreateRecipeBanner/index.tsx";

import LiveCooking from "../../components/LiveCooking/index.tsx";
import RecipeCard from "../../components/RecipeCard/index.tsx";
import { IUserProfile } from "../../interfaces/index.ts";
import MostActiveUser from "../../islands/MostActiveUser.tsx";
import CustomFooter from "../../components/Footer/CustomFooter.tsx";
interface IsLogged {
	isAllowed: boolean;
}

export const handler: Handlers = {
	GET(req, ctx) {
		const cookies = getCookies(req.headers);

		return ctx.render!({ isAllowed: cookies.auth === "bar" });
		//{data.isAllowed ? "are" : "are not"}
	},
};

export default function Feed(
	{ data }: PageProps<IsLogged>,
) {
	return (
		<>
			<Head>
				<title>Feed - freshlemon</title>
			</Head>
			<div class="bg-[#F2F2F2] flex flex-col">
				<Header />
				<div class="flex flex-row justify-around mx-24 mt-8">
					<div>
						<ProfileCard followers={122} likes={123} />
					</div>
					<div class="flex flex-col items-center">
						<CreateRecipeBanner followers={128} />
						<RecipeCard
							like={13}
							comments={21}
							recipe_title="Tofu Salad Ginger Garlic"
							recipe_description="I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ..."
							first_name="Tamaki"
							last_name="Ryushi"
							profile_img="/img/profile_img.png"
							recipe_img="/img/recipe_card_img.png"
							createdAtByHour={12}
						/>
						<RecipeCard
							like={13}
							comments={21}
							recipe_title="Tofu Salad Ginger Garlic"
							recipe_description="I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ..."
							first_name="Tamaki"
							last_name="Ryushi"
							profile_img="/img/profile_img.png"
							recipe_img="/img/recipe_card_img.png"
							createdAtByHour={12}
						/>
						<RecipeCard
							like={13}
							comments={21}
							recipe_title="Tofu Salad Ginger Garlic"
							recipe_description="I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ..."
							first_name="Tamaki"
							last_name="Ryushi"
							profile_img="/img/profile_img.png"
							recipe_img="/img/recipe_card_img.png"
							createdAtByHour={12}
						/>
						<RecipeCard
							like={13}
							comments={21}
							recipe_title="Tofu Salad Ginger Garlic"
							recipe_description="I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ..."
							first_name="Tamaki"
							last_name="Ryushi"
							profile_img="/img/profile_img.png"
							recipe_img="/img/recipe_card_img.png"
							createdAtByHour={12}
						/>
					</div>
					<div class="flex flex-col gap-4">
						<LiveCooking full_name="Nick Evans" />
						<MostActiveUser
							profile_img="/img/profile_img.png"
							userId="13489108497"
							first_name="Tamaki"
						/>
						<CustomFooter />
					</div>
				</div>
			</div>
		</>
	);
}
