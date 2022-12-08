import { Link } from "preact-router";

type LiveCookingProps = {
	full_name?: string;
};

const LiveCooking = (props: LiveCookingProps) => {
	return (
		<div class="bg-white w-[305px] p-4 h-[249px] rounded-xl">
			<div class="flex flex-col items-start">
				<div class="mb-2">
					<h1 class="text-[#030F09] font-bold text-[16px] font-serif">
						Live cooking by {props.full_name}
					</h1>
				</div>
				<div class="">
					<div class="relative top-8 left-4">
						<img src="/icon/live_badge.svg" />
					</div>
					<img
						class="w-[300px] h-[152px] rounded-md"
						alt={`Live cooking by ${props.full_name}`}
						src="/img/videoscreen_shot.png"
					/>
				</div>
			</div>
		</div>
	);
};

export default LiveCooking;
