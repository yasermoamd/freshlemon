import { h } from "preact";
import { Link } from "preact-router";

const About = () => {
  return (
    <div>
      <div class="bg-[#30BE76] lg:p-4 flex justify-around">
        <Link href="/">
          <h1 class="text-[16px] text-white">Freshlemon</h1>
        </Link>
        <nav class="flex gap-8 text-[16px] text-white">
          <Link href="/">AFQ</Link>
          <Link href="/">Career</Link>
          <Link href="/">Contact Us</Link>
        </nav>
      </div>

      {/* content */}
      <div class="text-center my-20">
        <div class="grid grid-cols-3 gap-4 mx-20">
          <div class="bg-blue-100 h-[120px] my-10 text-center">Icon 1</div>
          <div class="bg-blue-200 h-[120px] my-10 text-center">Icon 2</div>
          <div class="bg-blue-300 h-[120px] my-10 text-center">Icon 3</div>
          <div class="bg-blue-400 h-[120px] my-10 text-center">Icon 4</div>
          <div class="bg-blue-500 h-[120px] my-10 text-center">Icon 5</div>
          <div class="bg-blue-600 h-[120px] my-10 text-center">Icon 6</div>
        </div>
      </div>
    </div>
  );
};

export default About;
