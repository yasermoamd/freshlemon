import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";
export default {
	selfURL: import.meta.url,
	theme: {
		extend: {
			recipe_card_bg: "url(/img/recipe_card_img.png)",
		},
	},
} as Options;
