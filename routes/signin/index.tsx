import { h } from "preact";
import { useState } from "preact/hooks";
import { Link } from "preact-router";
import Nav from "../../components/Nav.tsx";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [name, seteName] = useState("");
	const [password, setPassord] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};
	return (
		<div class="flex flex-col justify-center">
			<Nav />
			{/* page title */}
			<div class="max-h-screen w-full mt-[12rem] sm:mt-[6rem] mb-[2rem]">
				<div class="flex justify-center gap-28">
					<div class="flex flex-row gap-[4rem]">
						{/*  */}
						<div class="md:flex items-center justify-center gap-2 hidden">
							<Link href="/">
								<img
									class="w-[17px] h-[26px]"
									src="https://i.ibb.co/FYWV183/loco-icon.png"
									alt="freshLemon"
								/>
							</Link>
							<Link>
								<h1 class="text-[16px] text-black font-bold">
									<span class="text-[#F8B449]">Fresh</span>
									<span class="text-[#30BE76]">lemon</span>
								</h1>
							</Link>
						</div>
					</div>
					{/* preact form */}
					<div class="flex flex-col gap-4">
						<div class="">
							<h2 class="text-[24px] text-[#030F09] font-bold font-serif leading-8">
								Welcome Back!
							</h2>
							<h4 class="text-[#606060] font-serif text-[14px] my-2">
								Please login to continue.
							</h4>
						</div>
						<form
							class="flex flex-col gap-4"
							action="/api/v1/auth/register"
							onSubmit={handleSubmit}
						>
							<label htmlFor="email" class="text-[#A8A8A8]">
								Email Adress
							</label>
							<input
								class="w-[325px] block bg-white border  rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
								type="text"
								id="email"
								name="email"
								value={email}
								onChange={(e: any) => setEmail(e.target.value)}
								placeholder="Type Your Email Address"
								autoComplete="off"
								required
							/>
							<label htmlFor="password" class="text-[#A8A8A8]">
								Password
							</label>
							<input
								class="w-[325px] block bg-white border rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
								type="password"
								id="password"
								name="password"
								value={password}
								onChange={(e: any) =>
									setPassord(e.target.value)}
								placeholder="Type Your Password"
								autoComplete="off"
								required
							/>
							<input
								type="submit"
								class="bg-[#30BE76] text-white rounded-xl w-[270px] h-[50px] text-[16px] font-bold ml-6"
								value="Create an account"
							/>
							<p class="text-[#A8A8A8] text-center">
								New to Scratch? <br />{" "}
								<Link href="/signup">
									<span class="underline text-[#30BE76] font-medium">
										Create Account Here
									</span>
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
