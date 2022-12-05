import { h } from "preact";
import { useState } from "preact/hooks";
import { Link } from "preact-router";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, seteName] = useState("");
  const [password, setPassord] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div class="flex flex-col justify-between">
      <div class="bg-[#30BE76] h-[50px] lg:p-4 hidden lg:flex md:flex  justify-center items-center justify-around">
        <div class="flex items-center gap-2 justify-center">
          <img
            class="mt-2"
            src="https://i.ibb.co/FYWV183/loco-icon.png"
            alt="freshLemon"
          />

          <h1 class="text-[16px] font-bold font-serif text-white">
            <Link href="/">
              Freshlemon
            </Link>
          </h1>
        </div>
        <nav class="flex gap-8 text-[16px] text-white">
          <Link href="/signin">Signin</Link>
        </nav>
      </div>
      {/* page title */}
      <div class="flex justify-center mt-10 lg:mt-20 md:mt-20">
        <div class="flex flex-row max-w-[910px] gap-[4rem] max-h-[570px]">
          {/*  */}
          <div class="lg:flex md:flex items-center justify-center gap-2 hidden">
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
          {/* preact form */}
          <div class="lg:mb-8 md:mb-8 mb-12">
            <h2 class="text-[24px] text-[#030F09] font-bold font-serif leading-8">
              Start from Scratch
            </h2>
            <h4 class="text-[#606060] font-serif text-[14px] my-2">
              Create an account on freshlemon!
            </h4>
            <form
              class="flex flex-col justify-center items-center gap-4"
              action="/api/v1/auth/register"
              onSubmit={handleSubmit}
            >
              <input
                class="w-[325px] block bg-white border  rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e: any) => seteName(e.target.value)}
                placeholder="Type Your full name"
                autoComplete="off"
                required
              />
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
              <input
                class="w-[325px] block bg-white border rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e: any) => setPassord(e.target.value)}
                placeholder="Type Your Password"
                autoComplete="off"
                required
              />
              <input
                type="submit"
                class="bg-[#30BE76] text-white rounded-xl w-[300px] h-[50px] text-[16px] font-bold"
                value="Create an account"
              />
              <p class="text-[#A8A8A8] text-center">
                If you have already an account <br />{" "}
                <Link href="/signin">
                  <span class="underline text-[#30BE76] font-medium">
                    Login Here
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* footer */}
      <div class="bg-gray-400 overflow-auto h-[216px] lg:h-[164px] md:h-[164px]">
        footer
      </div>
    </div>
  );
};

export default Signup;
