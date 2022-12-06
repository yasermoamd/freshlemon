import { Link } from "preact-router";
import Search from "../../islands/Search.tsx";

const Header = () => {
	return (
		<div class="hidden lg:flex md:flex flex-col bg-white">
			<header class="flex  justify-around  items-center h-[60px] shadow-sm">
				<div class="flex items-center justify-between gap-4 ml-16">
					<img
						src="https://i.ibb.co/FYWV183/loco-icon.png"
						alt="freshLemon"
					/>

					<h1 class="text-[16px] font-bold font-serif text-[#30BE76]">
						<Link href="/">
							Freshlemon
						</Link>
					</h1>
				</div>
				{/* Search bar */}
				<Search />
				{/* right navbar */}
				<nav class="flex items-center gap-8 text-[16px] text-white mr-16">
					<Link href="/notification">
						<img
							src="/icon/notification_icon.svg"
							class="w-[25px] h-[25px]"
							alt="notification"
						/>
					</Link>
					<Link href="/messenger">
						<img
							src="/icon/message_icon.svg"
							class="w-[25px] h-[25px]"
							alt="messages"
						/>
					</Link>
					<Link href="/profile">
						<img
							src="/img/profile_img.png"
							class="w-[35px] h-[35px]"
							alt="profile"
						/>
					</Link>
				</nav>
			</header>
		</div>
	);
};

export default Header;
