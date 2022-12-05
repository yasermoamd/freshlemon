import { h } from "preact";
import { useState } from "preact/hooks";

import { Link } from "preact-router";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");

  const handleSubmit = (e: any) => {
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
          <Link href="/signup">Signup</Link>
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
            <Link href="/">
              <h1 class="text-[16px]">
                <span class="text-[#F8B449] font-serif font-bold">Fresh</span>
                <span class="text-[#30BE76] font-serif font-bold">lemon</span>
              </h1>
            </Link>
          </div>
          {/* preact form */}
          <div class="lg:mb-8 md:mb-8 mb-12">
            <div class="ml-4 mb-4 gap-1">
              <h2 class="text-[24px] text-[#030F09] font-bold font-serif leading-8">
                Welcome Back!
              </h2>
              <h4 class="text-[#606060] font-serif text-[14px] my-2">
                Please login to continue.
              </h4>
            </div>
            <form
              class="flex flex-col justify-center items-center gap-8"
              action="//api/v1/auth/login"
              method="POST"
            >
              <input
                class="w-[325px] block bg-white border  rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                placeholder="user@email.com"
                autoComplete="off"
                required
              />
              <input
                class="w-[325px] block bg-white border rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
                type="password"
                id="password"
                name="password"
                placeholder="******"
                value={password}
                onChange={(e: any) => setPassord(e.target.value)}
                autoComplete="off"
                required
              />
              <input
                type="submit"
                class="bg-[#30BE76] text-white rounded-xl w-[300px] h-[50px] text-[16px] font-bold"
                value="Create an account"
              />
              <p class="text-[#A8A8A8] text-center">
                If You dont have an account <br />{" "}
                <Link href="/signup">
                  <span class="underline text-[#30BE76] font-medium">
                    Create new account!
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* footer */}
      <div class="bg-gray-400 overflow-auto h-[226px] lg:h-[170px] md:h-[170px]">
        footer
      </div>
    </div>
  );
};

export default Signin;
