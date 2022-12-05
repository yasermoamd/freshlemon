import { Head } from "$fresh/runtime.ts";
import { Link } from "preact-router";
export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div
        class="bg-contain"
        style="background-image: url(/img/bg_fruits.jpg)"
      >
        <div class="lg:absolute top-[20rem] left-28 mx-14 py-4">
          <div class="grid content-start md:content-around">
            <div class="flex flex-col">
              <span class="text-[40px]">
                Join over 50 millions people
                <br />
                sharing recipes everyday
              </span>
              <br />
              <span class="">
                Never run out of ideas again. Try new foods, ingredients,
                cooking style, and more
              </span>
            </div>
            <div class="flex justify-between w-[500px] my-8 ">
              <div class="bg-white text-[#30BE76] text-[14px]  w-[180px] text-[18px] text-center rounded-xl shadow-md">
                <Link href="/signup" class="pr-[17px] border-none">
                  Join Scratch
                </Link>
              </div>
              <div class="">
              </div>
              <div class="bg-[#30BE76] p-2 text-[#ffff] w-[180px] text-[18px] text-center rounded-xl shadow-md">
                <Link href="/about" class="pl-[17px] border-none">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
