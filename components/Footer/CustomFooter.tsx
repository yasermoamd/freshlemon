import { Link } from "preact-router";

type CustomFooterPorps = {
	about_freshlemon: string;
	help_center: string;
	privacy_policy: string;
};

const CustomFooter = () => {
	return (
		<div class="bg-white bg-white w-[305px] max-h-[123px] rounded-xl ">
			<div class="flex flex-col gap-4">
				<div class="flex justify-between gap-2 mx-4 mt-2 text-[#767676] tracking-[0.4px] text-[12px]">
					<Link href="/about_freshlemon">About Freshlemon</Link>
					<Link href="/help_center">Help Center</Link>
					<Link href="/privacy_policy">Privacy Policy</Link>
				</div>
				<div class="mx-6 mb-2 text-[#767676] tracking-[0.33px] text-[12px]">
					<p>© Freshlemon by hashon 2022</p>
				</div>
			</div>
		</div>
	);
};

export default CustomFooter;
